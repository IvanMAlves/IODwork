import React, { useState } from "react";
import posts from "../posts.json";
import PostsList from "./PostsList";

const Posts = () => {
  return <PostsList posts={posts} />;
};

export default Posts;
