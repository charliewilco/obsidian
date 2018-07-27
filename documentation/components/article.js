import classNames from "classnames";

export const ArticleHeader = ({ title }) => (
  <header>
    <h1>{title}</h1>
  </header>
);

export const Article = ({ className = "", title, wrapper, children }) => {
  const cx = classNames(
    "o-container o-container--md u-mxa u-px3 u-mb4",
    className,
    {
      Pane: wrapper
    }
  );
  return (
    <>
      <article className={cx}>
        {title && <ArticleHeader title={title} />}
        {children}
      </article>
      <style jsx>{`
        .Pane {
          background: #fff;
          box-shadow: 0 0 4px rgba(0, 0, 0, 0.0175),
            0 4px 8px rgba(0, 0, 0, 0.035);
        }
      `}</style>
    </>
  );
};
