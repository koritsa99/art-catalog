import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import { register } from '../../redux/auth/auth.slice';
import FormField from '../../components/FormField';
import Input from '../../components/Input';
import Button from '../../components/Button';

const data = {
  username: 'dev1',
  email: 'dev1@mail.com',
  password: '123456789',
};

function Register() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
    validateOnBlur: true,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h1>Register</h1>
      <FormField label="Username" htmlFor="username">
        <Input
          type="text"
          autoComplete="nickname"
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
      <FormField label="Repeat password" htmlFor="repeatPassword">
        <Input
          type="password"
          autoComplete="new-password"
          placeholder="Repeat password"
          name="repeatPassword"
          id="repeatPassword"
          value={formik.values.repeatPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        />
      </FormField>
      <FormField label="Email" htmlFor="email">
        <Input
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        />
      </FormField>
      <Button type="submit" variant="secondary">
        Register
      </Button>
    </form>
  );
}

export default Register;
