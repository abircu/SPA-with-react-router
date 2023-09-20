import { Link, useNavigate } from "react-router-dom";

const Posts = ({ posts }) => {
  const navigate = useNavigate();
  const { userId, title, body, id } = posts;
  const handleClick = () => {
    navigate(`/posts/${id}`);
  };
  return (
    <div className="bg-gray-300 rounded-lg p-6 m-6">
      <h1>{id}</h1>
      <p className="p-2">{title}</p>
      <p className="mb-6">{body}</p>
      <Link to={`/posts/${id}`}>Post Details</Link>
      <button onClick={handleClick}>Click to see details</button>
    </div>
  );
};

export default Posts;
