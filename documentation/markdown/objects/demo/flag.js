const IMAGE_URL = '/static/assets/filler-image.svg';

export const Flag = () => (
  <>
    <div className="o-flag u-mb3">
      <figure className="o-flag__figure o-col--3/12 u-mr3">
        <img src={IMAGE_URL} alt className="u-bl" />
      </figure>
      <div className="o-flag__body small">
        <p className="u-m0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et porro
          provident ipsa nam, quod molestias doloribus dolore sequi quaerat, facilis
          repellendus est corporis dolorum sed. Culpa ipsam pariatur cumque maxime!
        </p>
      </div>
    </div>
    <div className="o-flag o-flag--top u-mb3">
      <figure className="o-flag__figure o-col--3/12 u-mr3">
        <img src={IMAGE_URL} alt className="u-bl" />
      </figure>
      <div className="o-flag__body small">
        <h6 className="u-mb2">Top</h6>
        <p className="u-m0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et porro
          provident ipsa nam, quod molestias doloribus dolore sequi quaerat, facilis
          repellendus est corporis dolorum sed. Culpa ipsam pariatur cumque maxime!
        </p>
      </div>
    </div>
    <div className="o-flag o-flag--bottom u-mb3">
      <figure className="o-flag__figure o-col--3/12 u-mr3">
        <img src={IMAGE_URL} alt className="u-bl" />
      </figure>
      <div className="o-flag__body small">
        <h6 className="u-mb2">Bottom</h6>
        <p className="u-m0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et porro
          provident ipsa nam, quod molestias doloribus dolore sequi quaerat, facilis
          repellendus est corporis dolorum sed. Culpa ipsam pariatur cumque maxime!
        </p>
      </div>
    </div>
    <div className="o-flag o-flag--reverse u-mb3">
      <figure className="o-flag__figure o-col--3/12">
        <img src={IMAGE_URL} alt className="u-bl" />
      </figure>
      <div className="o-flag__body small u-mr3">
        <h6 className="u-mb2">Reversed</h6>
        <p className="u-m0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et porro
          provident ipsa nam, quod molestias doloribus dolore sequi quaerat, facilis
          repellendus est corporis dolorum sed.
        </p>
      </div>
    </div>
  </>
);
