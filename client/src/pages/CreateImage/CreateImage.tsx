import { useMutation, useQuery } from 'react-query';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './CreateImage.module.css';
import * as imagesApi from '../../services/imagesApi';
import * as authorsApi from '../../services/authorsApi';
import { urls } from '../../config/routes';
import Button from '../../components/Button';
import Input from '../../components/Input';
import FormField from '../../components/FormField';
import FileUpload from '../../components/FileUpload';
import Autocomplete from '../../components/Autocomplete';
import DebounceInput from '../../components/DebounceInput';

function CreateImage() {
  const [author, setAuthor] = useState('');
  const [tags, setTags] = useState('');

  const navigate = useNavigate();

  const imagesMutation = useMutation(imagesApi.createImage, {
    onSuccess: (newImage) => {
      navigate(`${urls.images}/${newImage.id}`);
    },
  });
  const authors = useQuery(['authors', author], () =>
    authorsApi.fetchAuthors(author)
  );

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    imagesMutation.mutate(formData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className={styles.inputsBox}>
          <FormField label="Image" htmlFor="createImageImage">
            <FileUpload
              accept="image/*"
              name="image"
              placeholder="Upload image"
              id="createImageImage"
              multiple
              required
            />
          </FormField>
          <FormField label="Author" htmlFor="createImageAuthor">
            <DebounceInput
              element={Autocomplete}
              debounceTimeout={500}
              name="author"
              placeholder="Author"
              id="createImageAuthor"
              options={
                authors.data && authors.data.items.length > 0
                  ? authors.data.items.map((author: any) => author.name)
                  : []
              }
              value={author}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setAuthor(e.target.value)
              }
              onSelect={(option: any) => setAuthor(option)}
              required
            />
          </FormField>
          <FormField label="Tags" htmlFor="createImageTags">
            <DebounceInput
              element={Autocomplete}
              debounceTimeout={500}
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTags(e.target.value)
              }
              onSelect={(option: any) => setTags(option)}
            />
          </FormField>
          <FormField label="Original URL" htmlFor="createImageOriginalUrl">
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
