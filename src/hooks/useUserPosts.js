import { useState, useCallback } from 'react';
import apiService from '../services/api';

export const useUserPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPosts = useCallback(async (userId) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await apiService.fetchUserPosts(userId);
      setPosts(data);
    } catch (err) {
      setError(err.message);
      setPosts([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearPosts = useCallback(() => {
    setPosts([]);
  }, []);

  return { posts, isLoading, error, fetchPosts, clearPosts };
};
