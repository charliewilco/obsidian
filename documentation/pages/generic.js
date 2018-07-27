import { Snippet } from "../components/snippet";
import { Article } from "../components/article";

const snippet = `
/*---------Reset----------*/
/*
  NOTE: Modified from Jonathan Neal and Nicolas Gallagher's normalize.css
*/

/* Base Reset */

* {
  margin: 0;
  padding: 0;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  text-size-adjust: 100%;
  font: var(--ff-w) var(--ff-init-size) / var(--lh) var(--default);
  -webkit-tap-highlight-color: transparent;
  color: var(--text);
}

:--blocks { display: block; }

[hidden],
template {
  display: none;
}

/* Media */

:--mediaObjects {
  display: inline-block;
  vertical-align: baseline;
}

audio:not([controls]) {
  display: none;
  height: 0;
}

/* Text Selectors */

abbr[title] {
  border-bottom-width: calc(var(--base-border) / 2);
  border-bottom-style: dotted;
}

b,
strong {
  font-weight: bold;
}

i,
em {
  font-style: italic;
}


/* Content */

figure { margin: 0; }

hr {
  border: 0;
  height: var(--base-border);
}

/* Code Blocks */

pre { overflow: auto; }

code,
pre {
  font-family: var(--ff-mono);
  font-size: 100%;
}
`;

const x = () => (
  <>
    <article>
      <header>
        <h1>Headline</h1>
      </header>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo dolor
        voluptate nobis beatae doloribus, reprehenderit molestias minima fugit,
        non voluptatem, facere numquam accusamus aliquam autem. Voluptatibus
        veniam, nostrum vel perferendis.
      </p>
      <p>
        Molestias tempora officiis ea vero quia quasi dolore beatae dolores
        optio quam sequi voluptates at, quaerat consequatur. Earum non,
        provident harum. Maxime omnis, asperiores inventore iusto fugiat facere
        ipsam qui.
      </p>
      <p>
        Dicta totam eum magni, in, omnis laborum iste nihil dolor minus nam sint
        amet cum quasi optio, veniam recusandae molestiae id esse expedita
        repudiandae velit dolore nobis. Perspiciatis laboriosam, voluptatum.
      </p>
      <p>
        Saepe dolorem quos sapiente voluptatibus necessitatibus, molestias minus
        ex praesentium, consequuntur explicabo molestiae dolorum blanditiis nemo
        laborum nesciunt officiis corporis fuga pariatur iure iusto veniam
        earum! Praesentium consequatur at earum!
      </p>
      <p>
        Aperiam ut asperiores repellendus ratione odio est nemo praesentium,
        quis. Reiciendis, sint dolores distinctio odio nisi nemo laborum?
        Laboriosam facere fugit sunt eveniet nam quibusdam velit iure saepe
        deleniti cum.
      </p>
    </article>

    <hr />

    <address>
      You can contact author at{" "}
      <a href="http://www.somedomain.com/contact">www.somedomain.com</a>.<br />
      If you see any bugs, please{" "}
      <a href="mailto:webmaster@somedomain.com">contact webmaster</a>.<br />
      You may also want to visit us:<br />
      Mozilla Foundation<br />
      1981 Landings Drive<br />
      Building K<br />
      Mountain View, CA 94043-0801<br />
      USA
    </address>
  </>
);

export default () => (
  <Article title="Generic" wrapper className="u-sans">
    <Snippet snippet={snippet} component={x} />
  </Article>
);
