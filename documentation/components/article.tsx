import * as React from 'react'
import Head from 'next/head';
import classNames from 'classnames';
import { MoreContentNav } from './navigation';

export interface IArticleProps {
  title?: string,
  description?: string,
  children: React.ReactNode,
  meta?: string,
  size?: 'sm' | 'md' | 'lg'
}

export const ArticleHeader: React.SFC<{
  title?: string,
  description?: string
}> = ({ title, description }) => (
  <>
    <header className="o-Container o-Container--center o-Container--sm u-center u-mb3 u-px3">
      <h1 className="h3 u-w300 u-mb2">{title}</h1>
      {description && (<p className="h6">{description}</p>)}
    </header>
    <hr className="Rule" />
  </>
);

export const NAME = 'Obsidian.css';

export const createTitle: string = (t: string) => (t ? `${t} | ${NAME}` : NAME);

export const Article: React.SFC<IArticleProps> = ({ description, meta, size = 'lg', title, children }) => {
  const cx = classNames(
    'o-Container o-Container--center',
    { [`o-Container--${size}`]: size },
    'u-pt2 u-pb4 u-mb4'
  );
  return (
    <>
      <Head>
        <title>{createTitle(title)}</title>
        <meta name="description" content={description || meta} />
      </Head>
      <article className={cx}>
        {title && <ArticleHeader description={description} title={title} />}
        {children}
      </article>
      <MoreContentNav />
    </>
  );
};