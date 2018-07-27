import Intro from "../markdown/intro.mdx";
import { Installation } from "../components/installation";
import { LogoNamePlate as Logo } from "../components/logo";
import { Article } from "../components/article";

export default () => (
  <Article className="u-serif">
    <div className="Stage">
      <Logo name subtitle />
      <Installation />
    </div>
    <Intro />
    <style jsx>{`
      .Stage {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }

      h3 {
        font-size: 1.53125rem;
        margin-bottom: 1.625rem;
      }

      hr {
        background: hsla(0, 0%, 80%, 0.5);
        margin: 2rem 0;
      }
    `}</style>
  </Article>
);
