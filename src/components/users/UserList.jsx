import SearchBar from '../common/SearchBar';
import SortButton from './SortButton';
import UserCard from './UserCard';

const UserList = ({ 
  users, 
  showDetails, 
  onToggleDetails, 
  onViewPosts, 
  onDelete, 
  onSort, 
  sortOrder, 
  searchTerm, 
  onSearchChange, 
  resultsCount 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="mb-6">
        <div className="mb-4">
          <SearchBar 
            value={searchTerm} 
            onChange={onSearchChange}
            placeholder="Tìm kiếm theo tên..."
          />
        </div>
        
        <div className="flex justify-between items-center">
          <SortButton sortOrder={sortOrder} onSort={onSort} />
          <span className="text-gray-600">
            Tìm thấy: {resultsCount} người dùng
          </span>
        </div>
      </div>

      <div className="space-y-3">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            showDetails={showDetails[user.id]}
            onToggleDetails={onToggleDetails}
            onViewPosts={onViewPosts}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default UserList;
