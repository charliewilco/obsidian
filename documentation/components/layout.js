import { Nav } from "./navigation";
import { Header } from "./header";
import { Footer } from "./footer";

export default ({ children }) => (
  <>
    <div className="o-flex">
      <Nav />
      <div className="u-wd--100">
        <Header />
        <main className="o--container o-container--center">{children}</main>
        <Footer />
      </div>
    </div>
  </>
);
