import { Trash2 } from 'lucide-react';
import UserDetails from './UserDetails';

const UserCard = ({ 
  user, 
  showDetails, 
  onToggleDetails, 
  onViewPosts, 
  onDelete 
}) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
      <div className="flex justify-between items-start mb-2">
        <div className="flex-1">
          <h3 className="font-bold text-lg text-gray-800">{user.name}</h3>
          <p className="text-gray-600 text-sm">{user.email}</p>
          <p className="text-gray-500 text-sm">{user.phone}</p>
          <p className="text-gray-500 text-sm">{user.company.name}</p>
        </div>
        <button
          onClick={() => onDelete(user.id)}
          className="text-red-500 hover:text-red-700 p-2"
          title="Xóa người dùng"
          aria-label="Xóa người dùng"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onToggleDetails(user.id)}
          className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition text-sm"
        >
          {showDetails ? 'Ẩn chi tiết' : 'Xem chi tiết'}
        </button>
        <button
          onClick={() => onViewPosts(user)}
          className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition text-sm"
        >
          Xem bài viết
        </button>
      </div>

      {showDetails && <UserDetails user={user} />}
    </div>
  );
};

export default UserCard;
