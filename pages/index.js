import { Container } from "theme-ui";
import { getAllPosts } from "../src/api";
import config from "../blog.config";
import Wrapper from "../src/layout/Wrapper";
import ShowCase from "../src/section/Showcase";
import About from "../src/section/About";
import Services from "../src/section/Services";
import Help from "../src/components/Help";
import Portfolio from "../src/section/Portfolio";

const PostsPage = ({ posts }) => (
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
      <Portfolio posts={posts} />
    </Container>
  </Wrapper>
);

export async function getStaticProps() {
  const posts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "coverImageAlt",
    "coverImageHeight",
    "coverImageWidth",
    "excerpt",
    "draft",
  ]);

  const startIndex = 0;
  const endIndex = config.postsPerPage;
  const prevPosts = null;
  const nextPosts = endIndex >= posts.length ? null : 2;

  return {
    props: { posts: posts.slice(startIndex, endIndex), prevPosts, nextPosts },
  };
}

export default PostsPage;
