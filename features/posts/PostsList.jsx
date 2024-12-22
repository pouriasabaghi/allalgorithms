import PostItem from "./PostItem";

function PostsList({ posts }) {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <PostItem
          loading={index < 3 ? "eager" : "lazy"}
          priority={index === 0}
          key={post.id}
          post={post}
        />
      ))}
    </ul>
  );
}

export default PostsList;
