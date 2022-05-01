import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import * as authorsApi from '../../services/authorsApi';
import ImagesList from '../../components/ImagesList';

function AuthorPage() {
  const { authorId } = useParams();
  const {
    data: authorInfo,
    isLoading: authorInfoLoading,
    error: authorError,
  } = useQuery(['author', authorId], () => authorsApi.findByid(authorId));
  const {
    data: images,
    isLoading: imagesLoading,
    error: imagesError,
  } = useQuery(['images', authorId], () =>
    authorsApi.getAuthorImages(authorId)
  );

  return (
    <div>
      {authorInfo && (
        <div>
          <h1>{authorInfo.nickname}</h1>
          {images && images.items.length > 0 && (
            <ImagesList images={images.items} />
          )}
        </div>
      )}
    </div>
  );
}

export default AuthorPage;
