import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import { login } from '../../redux/auth/auth.slice';
import { getLoading, getError } from '../../redux/auth/auth.selectors';
import { AsyncActionDispatch } from '../../redux/store';
import styles from './Login.module.css';
import FormField from '../../components/FormField';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Alert from '../../components/Alert';

function Register() {
  const dispatch = useDispatch<AsyncActionDispatch>();

  const loading = useSelector(getLoading);
  const error = useSelector(getError);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validateOnBlur: true,
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h1 className={styles.title}>Login</h1>

      {error && (
        <div className={styles.alertBox}>
          <Alert>{error}</Alert>
        </div>
      )}

      <FormField label="Username" htmlFor="username">
        <Input
          type="text"
          autoComplete="nick-name"
          placeholder="Username"
          name="username"
          id="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        />
      </FormField>
      <FormField label="Password" htmlFor="password">
        <Input
          type="password"
          autoComplete="new-password"
          placeholder="Password"
          name="password"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        />
      </FormField>

      <Button type="submit" variant="secondary" isLoading={loading}>
        Login
      </Button>
    </form>
  );
}

export default Register;
