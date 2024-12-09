import { useState, useEffect } from 'react';
import tripService from '../services/tripService';
import { TripData } from '../types/trip';

interface UseTripResult {
  trip: TripData | null;
  loading: boolean;
  error: Error | null;
}

interface TripParams {
  hostName: string;
  tripSlug: string;
}

export const useTrip = ({ hostName, tripSlug }: TripParams): UseTripResult => {
  const [trip, setTrip] = useState<TripData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchTrip = async () => {
      console.log('Fetching trip for host:', hostName, 'and slug:', tripSlug);
      try {
        setLoading(true);
        const data = await tripService.getTrip(hostName, tripSlug);
        console.log('Received trip data:', data);
        setTrip(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching trip:', err);
        setError(err instanceof Error ? err : new Error('Failed to fetch trip'));
        setTrip(null);
      } finally {
        setLoading(false);
      }
    };

    if (hostName && tripSlug) {
      fetchTrip();
    } else {
      console.log('Missing hostName or tripSlug');
    }
  }, [hostName, tripSlug]);

  return { trip, loading, error };
};

export default useTrip; 