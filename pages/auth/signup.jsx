import { useState } from 'react';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = event => {
    event.preventDefault();

    console.log('email: ', email);
    console.log('password: ', password);
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
      <button className='btn btn-primary'>Sign up</button>
    </form>
  );
};
