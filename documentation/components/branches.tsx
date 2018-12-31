import * as React from 'react';

export interface TrunkState {
  position: number,
  isEnd: boolean,
  isBeginning: boolean,
  length: number
}

// React.Component<any, any> | React.SFC<any>

export interface TrunkProps {
  navigation: React.ComponentType<any>
}

export interface BranchProps<V = any> {
  component?: React.ComponentType<any>;
  render?: (props: Context & V) => React.ReactNode;
}

export interface NavActions {
  goDirectToPosition: (position: number) => void;
  goToPrevious: () => void;
  goToNext: () => void;
  position: number;
}

export interface Context extends TrunkState, NavActions {}

export const TrunkContext = React.createContext({});

const nextPosition = ({ position, length }: TrunkState) => {
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
          {(context: Context) => <BranchNav {...context} />}
        </TrunkContext.Consumer>
        {React.Children.map(
          children,
          (child: React.ReactElement<any>, idx: number) => position === idx && React.cloneElement(child, { ...this.state })
        )}
      </TrunkContext.Provider>
    );
  }
}

export class Branch extends React.Component<BranchProps, any> {
  render() {
    const { component: Cx, render, ...props } = this.props;

    return (
      <TrunkContext.Consumer>
        {(context: Context) =>
          Cx ? <Cx {...props} {...context} /> : render({ ...props, ...context })
        }
      </TrunkContext.Consumer>
    );
  }
}
