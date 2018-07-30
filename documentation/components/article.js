import Head from 'next/head';
import { MoreContentNav } from './navigation';

const ArticleHeader = ({ title, description }) => (
  <>
    <header className="o-container o-container--center o-container--sm u-center u-mb3 u-px3">
      <h1 className="h3 u-w300 u-mb2">{title}</h1>
      <p className="h6">{description}</p>
    </header>
    <hr className="Rule" />
  </>
);

export const NAME = 'Obsidian.css';

export const createTitle = t => (t ? `${t} | ${NAME}` : NAME);

const Article = ({ description, title, children }) => (
  <>
    <Head>
      <title>{createTitle(title)}</title>
    </Head>
    <article className="u-pt2 u-pb4 u-mb4">
      {title && <ArticleHeader description={description} title={title} />}
      {children}
    </article>
    <MoreContentNav />
  </>
);

Article.displayName = 'Article';
ArticleHeader.displayName = 'ArticleHeader';

export { Article, ArticleHeader };
