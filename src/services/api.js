import { API_BASE_URL, API_ENDPOINTS } from '../constants/api';
import { ERROR_MESSAGES } from '../constants/config';

class ApiService {
  async fetchUsers() {
    try {
      const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.USERS}`);
      if (!response.ok) throw new Error(ERROR_MESSAGES.FETCH_USERS);
      return await response.json();
    } catch (error) {
      throw new Error(error.message || ERROR_MESSAGES.NETWORK_ERROR);
    }
  }

  async fetchUserPosts(userId) {
    try {
      const response = await fetch(
        `${API_BASE_URL}${API_ENDPOINTS.POSTS}?userId=${userId}`
      );
      if (!response.ok) throw new Error(ERROR_MESSAGES.FETCH_POSTS);
      return await response.json();
    } catch (error) {
      throw new Error(error.message || ERROR_MESSAGES.NETWORK_ERROR);
    }
  }
}

export default new ApiService();
