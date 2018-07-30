const IMAGE_URL = '/static/assets/filler-image.svg';

export const Fit = () => (
  <div className="o-flex o-flex--wrap o-flex--j--c">
    <div className="o-col--5/12 u-m3">
      <h6 className="small u-caps">Cover / Center Top</h6>
      <div className="o-intrinsic o-intrinsic--3x1 u-bg--bluegreen">
        <img
          src={IMAGE_URL}
          className="o-intrinsic__item u-fit--cover u-fit--tc"
          alt="Placeholder Image"
        />
      </div>
    </div>
    <div className="o-col--5/12 u-m3">
      <h6 className="small u-caps">Cover / Center Bottom</h6>
      <div className="o-intrinsic o-intrinsic--3x1 u-bg--bluegreen">
        <img
          src={IMAGE_URL}
          className="o-intrinsic__item u-fit--cover u-fit--cb"
          alt="Placeholder Image"
        />
      </div>
    </div>
    <div className="o-col--5/12 u-m3">
      <h6 className="small u-caps">Cover / Center Center</h6>
      <div className="o-intrinsic o-intrinsic--3x1 u-bg--bluegreen">
        <img
          src={IMAGE_URL}
          className="o-intrinsic__item u-fit--cover u-fit--cc"
          alt="Placeholder Image"
        />
      </div>
    </div>
    <div className="o-col--5/12 u-m3">
      <h6 className="small u-caps">Contain</h6>
      <div className="o-intrinsic o-intrinsic--3x1 u-bg--bluegreen">
        <img
          src={IMAGE_URL}
          className="o-intrinsic__item u-fit--contain"
          alt="Placeholder Image"
        />
      </div>
    </div>
    <div className="o-col--5/12 u-m3">
      <h6 className="small u-caps">Fill</h6>
      <div className="o-intrinsic o-intrinsic--16x9 u-bg--bluegreen">
        <img
          src={IMAGE_URL}
          className="o-intrinsic__item u-fit--fill"
          alt="Placeholder Image"
        />
      </div>
    </div>
  </div>
);
