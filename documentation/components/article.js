import Head from 'next/head';
import classNames from 'classnames';
import { MoreContentNav } from './navigation';

export const ArticleHeader = ({ title, description }) => (
  <header className="u-mb3 u-px3">
    <h1 className="h3 u-w300 u-mb2">{title}</h1>
    <p className="h6">{description}</p>
    <hr className="Rule" />
  </header>
);

const createTitle = title => (title ? `${title} | Obsidian.css` : 'Obsidian.css');

export const Article = ({
  className = '',
  description,
  title,
  nav = true,
  children,
  spaced
}) => {
  const cx = classNames(
    'o-container o-container--lg u-mxa u-pt2 u-pb4 u-mb4',
    className,
    {
      'u-px3': spaced
    }
  );
  return (
    <div className="o-flex o-flex--around o-container o-container--center">
      <Head>
        <title>{createTitle(title)}</title>
      </Head>
      {nav && <MoreContentNav />}
      <article className={cx}>
        {title && <ArticleHeader description={description} title={title} />}
        {children}
      </article>
    </div>
  );
};
