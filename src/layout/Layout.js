import PropTypes from "prop-types";

// Yellow
import { Header, Main, Footer, Head, Style } from "../lib";

const Layout = (props) => {
  return (
    <>
      <Head {...props} />

      <Header />
      <Main>{props.children}</Main>
      <Footer />

      <Style />
    </>
  );
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
};

export default Layout;
