import { useState } from 'react';
import axios from 'axios';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const onSubmit = async event => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/users/signup', {
        email,
        password,
      });

      console.log('resposne: ', response.data);
    } catch (error) {
      console.error('Error signing up: ', error.response.data);
      setErrors(error.response.data.errors);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Signup</h1>
      <div className='form-group'>
        <label htmlFor='email'>Email address</label>
        <input
          type='email'
          value={email}
          className='form-control'
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          value={password}
          className='form-control'
          onChange={e => setPassword(e.target.value)}
        />
      </div>

      {errors.length > 0 && (
        <div className='alert alert-danger'>
          <h5>Ooops..</h5>
          <ul className='my-0'>
            {errors.map(error => (
              <li key={error.message}>{error.message}</li>
            ))}
          </ul>
        </div>
      )}

      <button className='btn btn-primary'>Sign up</button>
    </form>
  );
};
