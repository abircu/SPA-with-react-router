import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const posts = useLoaderData();
  console.log(posts);
  const { id, title, body } = posts;
  return (
    <div>
      <h1>{id}</h1>
      <h1>{title}</h1>
      <h1>{body}</h1>
    </div>
  );
};

export default PostDetails;
