import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const gotoHome = useNavigate();
  const { postsId } = useParams();
  const posts = useLoaderData();
  console.log(posts);
  const { id, title, body } = posts;
  console.log(postsId);
  const handleDetails = () => {
    gotoHome(-1);
  };
  return (
    <div>
      <h1>{id}</h1>
      <h1>{title}</h1>
      <h1>{body}</h1>
      <button onClick={handleDetails}>Go to home</button>
    </div>
  );
};

export default PostDetails;
