import * as React from 'react';

export interface TrunkState {
  position: number,
  isEnd: boolean,
  isBeginning: boolean,
  length: number
}

export interface TrunkProps {
  navigation: new (props: any) => React.Component
}

export interface BranchProps {
  component: new (props: any) => React.Component,
  render: (props: any) => React.ReactNode
}

export interface NavActions {
  goDirectToPosition: (position: number) => void;
  goToPrevious: () => void;
  goToNext: () => void;
}

export interface Context extends TrunkState, NavActions {}

export const TrunkContext = React.createContext({});

const nextPosition = ({ position, length, isEnd }: TrunkState) => {
  let currentPosition = position !== length ? position + 1 : length;
  return {
    position: currentPosition,
    isBeginning: currentPosition === 0,
    isEnd: currentPosition === length - 1
  };
};

const prevPosition = ({ position, length }: TrunkState) => {
  let currentPosition = position !== length ? position - 1 : 0;

  return {
    position: currentPosition,
    isBeginning: currentPosition === 0,
    isEnd: currentPosition === length - 1
  };
};

export class Trunk extends React.Component<TrunkProps, TrunkState> {
  state = {
    position: 0,
    isEnd: false,
    isBeginning: true,
    length: React.Children.count(this.props.children)
  };

  goDirectToPosition = position => this.setState({ position });

  goToPrevious = () => this.setState(prevPosition);

  goToNext = () => this.setState(nextPosition);

  render() {
    const { children, navigation: BranchNav } = this.props;
    const { position } = this.state
    return (
      <TrunkContext.Provider
        value={{
          ...this.state,
          goToPrevious: this.goToPrevious,
          goToNext: this.goToNext,
          goDirectToPosition: this.goDirectToPosition
        }}>
        <TrunkContext.Consumer>
          {context => <BranchNav {...context} />}
        </TrunkContext.Consumer>
        {React.Children.map(
          children,
          (child, idx) => position === idx && React.cloneElement(child, { ...this.state })
        )}
      </TrunkContext.Provider>
    );
  }
}

export class Branch extends React.Component<BranchProps, void> {
  render() {
    const { component: Cx, render, ...props } = this.props;

    return (
      <TrunkContext.Consumer>
        {context =>
          Cx ? <Cx {...props} {...context} /> : render({ ...props, ...context })
        }
      </TrunkContext.Consumer>
    );
  }
}
