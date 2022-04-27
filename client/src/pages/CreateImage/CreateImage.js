import { useMutation } from 'react-query';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './CreateImage.module.css';
import Button from '../../components/Button';
import Input from '../../components/Input';
import FormField from '../../components/FormField';
import FileUpload from '../../components/FileUpload';
import Autocomplete from '../../components/Autocomplete';
import * as imagesApi from '../../services/imagesApi';
import * as authorsApi from '../../services/authorsApi';
import { urls } from '../../config/routes';

function CreateImage() {
  const [author, setAuthor] = useState('');
  const [tags, setTags] = useState('');
  const [authorsList, setAuthorsList] = useState([]);

  const navigate = useNavigate();

  const imagesMutation = useMutation(imagesApi.createImage, {
    onSuccess: (newImage) => {
      navigate(`${urls.images}/${newImage.id}`);
    },
  });

  useEffect(() => {
    authorsApi.fetchAuthors(author).then((res) => setAuthorsList(res));
  }, [author]);

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    imagesMutation.mutate(formData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className={styles.inputsBox}>
          <FormField label="Image">
            <FileUpload
              accept="image/*"
              name="image"
              placeholder="Upload image"
              id="createImageImage"
              multiple
              required
            />
          </FormField>
          <FormField label="Author">
            <Autocomplete
              name="author"
              placeholder="Author"
              id="createImageAuthor"
              options={
                authorsList && authorsList.length > 0
                  ? authorsList.map((author) => author.nickname)
                  : []
              }
              value={author}
              onChange={(e) => setAuthor(e.currentTarget.value)}
              onSelect={(option) => setAuthor(option)}
              required
            />
          </FormField>
          <FormField label="Tags">
            <Autocomplete
              name="tags"
              placeholder="Tags eg. tag1, tag2"
              id="createImageTags"
              options={[
                'anal',
                'anal_beads',
                'fisting',
                'cum',
                'anal_insertion',
              ].filter((tag) => tag.toLowerCase().includes(tags.toLowerCase()))}
              value={tags}
              onChange={(e) => setTags(e.currentTarget.value)}
              onSelect={(option) => setTags(option)}
            />
          </FormField>
          <FormField label="Original URL">
            <Input
              type="url"
              autoComplete="off"
              name="originalUrl"
              placeholder="Original URL"
              id="createImageOriginalUrl"
            />
          </FormField>
        </div>

        <Button
          type="submit"
          className={styles.submitBtn}
          isLoading={imagesMutation.isLoading}
          variant="secondary"
        >
          Create
        </Button>
      </form>
    </div>
  );
}

export default CreateImage;
