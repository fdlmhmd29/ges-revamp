import { getAllPosts } from "../src/api";
import React, { lazy } from "react";
import config from "../blog.config";
import Wrapper from "../src/layout/Wrapper";
import ShowCase from "../src/section/Showcase";
import About from "../src/section/About";
import Services from "../src/section/Services";
import Help from "../src/section/Help";
import Portfolio from "../src/section/Portfolio";
import Solution from "../src/section/Solution";

const PostsPage = ({ posts }) => (
  <Wrapper
    url={config.url}
    title={config.title}
    description={config.description}
    imageUrl={config.shareImage}
    imageAlt={config.shareImageAlt}
  >
    <ShowCase />
    <Solution />
    <About />
    <Services />
    <Help />
    <Portfolio posts={posts} />
  </Wrapper>
);

export async function getStaticProps() {
  const posts = getAllPosts([
    "id",
    "classes",
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
  const endIndex = config.portosPerPage;
  const prevPosts = null;
  const nextPosts = endIndex >= posts.length ? null : 2;

  return {
    props: { posts: posts.slice(startIndex, endIndex), prevPosts, nextPosts },
  };
}

export default PostsPage;
