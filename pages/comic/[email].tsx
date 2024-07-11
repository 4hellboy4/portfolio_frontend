// pages/comic/[email].tsx
import { useRouter } from 'next/router';
import { XKCDComic } from '../../types';
import { formatDistanceToNow } from 'date-fns';

const ComicPage = () => {
  const router = useRouter();
  const { email, comicData } = router.query;

  const comicInfo: XKCDComic = comicData
    ? JSON.parse(comicData as string)
    : null;

  if (!comicInfo) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <h1>Comic for {email}</h1>
      <div className="info">
        <p>
          Comic Title: <span>{comicInfo.safe_title}</span>
        </p>
        <p>
          Publication Date:{' '}
          <span>
            {formatDistanceToNow(
              new Date(comicInfo.year, comicInfo.month - 1, comicInfo.day),
              { addSuffix: true },
            )}
          </span>
        </p>
      </div>
      <img id="comic-img" src={comicInfo.img} alt={comicInfo.alt} />
    </section>
  );
};

export default ComicPage;
