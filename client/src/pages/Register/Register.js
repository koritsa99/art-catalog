import { useDispatch } from 'react-redux';

import { register } from '../../redux/auth/auth.slice';

const data = {
  username: 'dev1',
  email: 'dev1@mail.com',
  password: '123456789',
};

function Register() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Register</h1>
      <button type="button" onClick={() => dispatch(register(data))}>
        Register
      </button>
    </div>
  );
}

export default Register;
