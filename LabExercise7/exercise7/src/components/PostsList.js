import { Link } from "react-router-dom";
//https://jsonplaceholder.typicode.com/users/1/posts

const PostsList = ({ posts }) => (
  <div>
    <ul>
      {posts.map((post) => (
        <li>
          ID: {post.id}<br/>
          <p>
          {post.title}
          {/* {post.body} */}
          </p>
        </li>
      ))}
    </ul>
  </div>
);

export default PostsList