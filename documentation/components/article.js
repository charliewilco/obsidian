import Head from 'next/head';
import classNames from 'classnames';
import { MoreContentNav } from './navigation';

const ArticleHeader = ({ title, description }) => (
  <>
    <header className="o-Container o-Container--center o-Container--sm u-center u-mb3 u-px3">
      <h1 className="h3 u-w300 u-mb2">{title}</h1>
      <p className="h6">{description}</p>
    </header>
    <hr className="Rule" />
  </>
);

export const NAME = 'Obsidian.css';

export const createTitle = t => (t ? `${t} | ${NAME}` : NAME);

const Article = ({ description, size = 'lg', title, children }) => {
  const cx = classNames(
    'o-Container o-Container--center',
    { [`o-Container--${size}`]: size },
    'u-pt2 u-pb4 u-mb4'
  );
  return (
    <>
      <Head>
        <title>{createTitle(title)}</title>
      </Head>
      <article className={cx}>
        {title && <ArticleHeader description={description} title={title} />}
        {children}
      </article>
      <MoreContentNav />
    </>
  );
};
Article.displayName = 'Article';
ArticleHeader.displayName = 'ArticleHeader';

export { Article, ArticleHeader };
