import React, {useState} from 'react';
import {formatDistanceToNow} from 'date-fns';
import {XKCDComic} from '../types';
import '../fonts/css/comic.css'

const Comic: React.FC = () => {
    const [email, setEmail] = useState('');
    const [xkcdToken, setXkcdToken] = useState('');
    const [comicInfo, setComicInfo] = useState<XKCDComic | null>(null);

    const handleFetch = async () => {
        try {
            const token = await xkcdFetch();
            setXkcdToken(token);

            const comicData = await apiInfoFetch(token);
            setComicInfo(comicData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const xkcdFetch = async (): Promise<string> => {
        const params = new URLSearchParams();
        if (email) {
            params.append('email', email);
        }
        const response = await fetch(`https://fwd.innopolis.university/api/hw2?${params.toString()}`);
        return response.text();
    };

    const apiInfoFetch = async (token: string): Promise<XKCDComic> => {
        const params = new URLSearchParams();
        params.append('id', token);
        const response = await fetch(`https://fwd.innopolis.university/api/comic?${params.toString()}`);
        if (!response.ok) {
            throw new Error('Failed to fetch comic info');
        }
        return response.json();
    };

    return (
        <section>
            <form>
                <label>Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                     placeholder="Enter your email"/></label>
            </form>
            <button onClick={handleFetch}>Fetch ID</button>

            <div className="info">
                <p>Your token is: <span>{xkcdToken}</span></p>
                <p>Comic Title: <span>{comicInfo?.safe_title}</span></p>
                <p>Publication
                    Date: <span>{comicInfo ? formatDistanceToNow(new Date(comicInfo.year, comicInfo.month - 1, comicInfo.day), {addSuffix: true}) : ''}</span>
                </p>
            </div>
            <img id="comic-img" src={comicInfo?.img} alt="Decorative image" aria-hidden="true"/>
        </section>
    );
};

export default Comic;