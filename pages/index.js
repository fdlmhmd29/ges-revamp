import { Container } from "theme-ui";
import config from "../blog.config";
import Wrapper from "../src/layout/Wrapper";
import ShowCase from "../src/section/Showcase";
import About from "../src/section/About";
import Services from "../src/section/Services";
import Help from "../src/components/Help";

const PostsPage = () => (
  <Wrapper
    url={config.url}
    title={config.title}
    description={config.description}
    imageUrl={config.shareImage}
    imageAlt={config.shareImageAlt}
  >
    <Container
      id="section-container"
      sx={{ width: "100%", overflow: "hidden", padding: "120px 0 0 0" }}
    >
      <ShowCase />
      <About />
      <Services />
      <Help />
    </Container>
  </Wrapper>
);

export default PostsPage;
