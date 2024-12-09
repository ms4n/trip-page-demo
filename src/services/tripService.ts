import axios from 'axios';
import { TripData } from '../types/trip';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1';

interface ApiResponse<T> {
  status: string;
  data: T;
}

export const tripService = {
  getAllTrips: async (): Promise<TripData[]> => {
    const response = await axios.get<ApiResponse<TripData[]>>(`${API_BASE_URL}/trips`);
    return response.data.data;
  },

  getTrip: async (hostSlug: string, tripSlug: string): Promise<TripData> => {
    const url = `${API_BASE_URL}/trips/${hostSlug}/${tripSlug}`;
    console.log('Making API call to:', url);
    try {
      const response = await axios.get<ApiResponse<TripData>>(url);
      console.log('API response:', response.data);
      return response.data.data;
    } catch (error) {
      console.error('API error:', error);
      throw error;
    }
  }
};

export default tripService; 