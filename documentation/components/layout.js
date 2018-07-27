import { Nav } from "./navigation";
import { Header } from "./header";
import { Footer } from "./footer";

export default ({ children }) => (
  <>
    <Header />
    <Nav />
    <main className="o--container o-container--center">{children}</main>
    <Footer />
  </>
);
