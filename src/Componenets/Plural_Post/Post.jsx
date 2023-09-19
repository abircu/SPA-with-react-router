import { useLoaderData } from "react-router-dom";
import Posts from "../Single_post/posts";

const Post = () => {
  const post = useLoaderData();
  return (
    <div
      className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-amber-200
    m-6 p-6 "
    >
      {post.map((posts) => (
        <Posts key={posts.id} posts={posts} />
      ))}
    </div>
  );
};

export default Post;
