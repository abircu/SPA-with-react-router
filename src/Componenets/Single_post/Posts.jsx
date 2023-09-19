import { Link } from "react-router-dom";

const Posts = ({ posts }) => {
  const { userId, title, body, id } = posts;
  return (
    <div className="bg-gray-300 rounded-lg p-6 m-6">
      <h1>{id}</h1>
      <p className="p-2">{title}</p>
      <p className="mb-6">{body}</p>
      <Link to={`/posts/${id}`}>Post Details</Link>
    </div>
  );
};

export default Posts;
