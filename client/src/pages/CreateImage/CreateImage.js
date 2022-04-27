import { useMutation } from 'react-query';

import styles from './CreateImage.module.css';
import Button from '../../components/Button';
import Input from '../../components/Input';
import FormField from '../../components/FormField';
import * as imagesApi from '../../services/imagesApi';
import FileUpload from '../../components/FileUpload';

function CreateImage() {
  const mutation = useMutation(imagesApi.createImage);

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    mutation.mutate(formData);
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
              required
            />
          </FormField>
          <FormField label="Author">
            <Input
              type="text"
              autoComplete="off"
              name="author"
              placeholder="Author"
              id="createImageAuthor"
              required
            />
          </FormField>
          <FormField label="Tags">
            <Input
              type="text"
              autoComplete="off"
              name="tags"
              placeholder="Tags eg. tag1, tag2"
              id="createImageTags"
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
          isLoading={mutation.isLoading}
        >
          Create
        </Button>
      </form>
    </div>
  );
}

export default CreateImage;
