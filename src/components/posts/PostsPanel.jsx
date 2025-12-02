import { Loader2 } from 'lucide-react';
import PostCard from './PostCard';
import EmptyPostsState from './EmptyPostsState';

const PostsPanel = ({ selectedUser, posts, isLoading }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        {selectedUser 
          ? `Bài viết của ${selectedUser.name}` 
          : 'Chọn người dùng để xem bài viết'
        }
      </h2>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-12">
          <Loader2 className="w-10 h-10 text-indigo-600 animate-spin mb-4" />
          <p className="text-gray-600">Đang tải bài viết...</p>
        </div>
      ) : selectedUser ? (
        <div className="space-y-4 max-h-[600px] overflow-y-auto">
          {posts.length > 0 ? (
            posts.map((post) => <PostCard key={post.id} post={post} />)
          ) : (
            <p className="text-gray-500 text-center py-8">Không có bài viết nào</p>
          )}
        </div>
      ) : (
        <EmptyPostsState />
      )}
    </div>
  );
};

export default PostsPanel;
