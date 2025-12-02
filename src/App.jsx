import { useState, useEffect, useCallback, useMemo } from 'react';
import { useUsers, useUserPosts, useSearch, usePagination } from './hooks';
import { LoadingSpinner, ErrorMessage } from './components/common';
import { UserList, PaginationControls } from './components/users';
import { PostsPanel } from './components/posts';
import { USERS_PER_PAGE, SORT_ORDER } from './constants/config';

function App() {
  const { users, isLoading, error, fetchUsers, deleteUser } = useUsers();
  const { posts, isLoading: isLoadingPosts, fetchPosts, clearPosts } = useUserPosts();
  
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showDetails, setShowDetails] = useState({});
  const [sortOrder, setSortOrder] = useState(SORT_ORDER.ASC);

  const filteredUsers = useSearch(users, searchTerm);
  
  const sortedUsers = useMemo(() => {
    return [...filteredUsers].sort((a, b) => {
      return sortOrder === SORT_ORDER.ASC 
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });
  }, [filteredUsers, sortOrder]);

  const {
    currentItems: currentUsers,
    currentPage,
    totalPages,
    goToNextPage,
    goToPrevPage,
    resetPage
  } = usePagination(sortedUsers, USERS_PER_PAGE);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  useEffect(() => {
    resetPage();
  }, [searchTerm, resetPage]);

  const handleUserClick = useCallback((user) => {
    setSelectedUser(user);
    fetchPosts(user.id);
  }, [fetchPosts]);

  const handleToggleDetails = useCallback((userId) => {
    setShowDetails(prev => ({
      ...prev,
      [userId]: !prev[userId]
    }));
  }, []);

  const handleSort = useCallback(() => {
    setSortOrder(prev => 
      prev === SORT_ORDER.ASC ? SORT_ORDER.DESC : SORT_ORDER.ASC
    );
  }, []);

  const handleDeleteUser = useCallback((userId) => {
    deleteUser(userId);
    if (selectedUser?.id === userId) {
      setSelectedUser(null);
      clearPosts();
    }
  }, [deleteUser, selectedUser, clearPosts]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error && users.length === 0) {
    return <ErrorMessage error={error} onRetry={fetchUsers} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-indigo-900 mb-8 text-center">
          Danh Sách Người Dùng
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <UserList
              users={currentUsers}
              showDetails={showDetails}
              onToggleDetails={handleToggleDetails}
              onViewPosts={handleUserClick}
              onDelete={handleDeleteUser}
              onSort={handleSort}
              sortOrder={sortOrder}
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              resultsCount={filteredUsers.length}
            />
            <PaginationControls
              currentPage={currentPage}
              totalPages={totalPages}
              onPrevPage={goToPrevPage}
              onNextPage={goToNextPage}
            />
          </div>

          <PostsPanel
            selectedUser={selectedUser}
            posts={posts}
            isLoading={isLoadingPosts}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
