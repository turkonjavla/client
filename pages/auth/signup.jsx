import { useState } from 'react';
import useRequest from '../../hooks/use-request';
import Router from 'next/router';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/users/signup',
    method: 'post',
    body: { email, password },
    onSuccess: () => Router.push('/'),
  });

  const onSubmit = async event => {
    event.preventDefault();
    doRequest();
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

      {errors}

      <button className='btn btn-primary'>Sign up</button>
    </form>
  );
};
