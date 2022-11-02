import { Link } from "react-router-dom";
const PostsList = ({ posts }) => (
  <div>
    <ul>
      {posts.map((post) => (
        <li>
          <Link to={`/post/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>
            Published by 🤖 <strong> {post.author}</strong> on{" "}
            {post.publishedAt}
          </p>
        </li>
      ))}
    </ul>
  </div>
);

export default PostsList