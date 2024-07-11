// Comic.tsx
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { formatDistanceToNow } from 'date-fns';
import { XKCDComic } from '../types';
import '../fonts/css/comic.css';

const Comic: React.FC = () => {
  const [email, setEmail] = useState('');
  const [xkcdToken, setXkcdToken] = useState('');
  const [comicInfo, setComicInfo] = useState<XKCDComic | null>(null);
  const router = useRouter();

  const handleFetch = async () => {
    try {
      const token = await xkcdFetch();
      setXkcdToken(token);

      const comicData = await apiInfoFetch(token);
      setComicInfo(comicData);

      // Navigate to the new page with email and comicData as query parameters
      router.push({
        pathname: `/comic/${email}`,
        query: { comicData: JSON.stringify(comicData) },
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const xkcdFetch = async (): Promise<string> => {
    const params = new URLSearchParams();
    if (email) {
      params.append('email', email);
    }
    const response = await axios.get(
      `https://fwd.innopolis.university/api/hw2?${params.toString()}`,
    );
    return response.data;
  };

  const apiInfoFetch = async (token: string): Promise<XKCDComic> => {
    const params = new URLSearchParams();
    params.append('id', token);
    const response = await axios.get(
      `https://fwd.innopolis.university/api/comic?${params.toString()}`,
    );
    if (response.status !== 200) {
      throw new Error('Failed to fetch comic info');
    }
    return response.data;
  };

  return (
    <section>
      <form>
        <label>
          Email:{' '}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </label>
      </form>
      <button type="button" onClick={handleFetch}>
        Fetch ID
      </button>
    </section>
  );
};

export default Comic;
