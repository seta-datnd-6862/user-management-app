const PostCard = ({ post }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
      <h3 className="font-bold text-gray-800 mb-2 capitalize">
        {post.title}
      </h3>
      <p className="text-gray-600 text-sm">{post.body}</p>
    </div>
  );
};

export default PostCard;
