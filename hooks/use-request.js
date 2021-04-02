import { useState } from 'react';
import axios from 'axios';

export default ({ url, method, body }) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async () => {
    try {
      setErrors(null);
      const response = await axios[method](url, body);
      return response.data;
    } catch (error) {
      console.log('ERROR: ', error);
      setErrors(
        <div className='alert alert-danger'>
          <h5>Ooops..</h5>
          <ul className='my-0'>
            {error.response.data.errors.map(error => (
              <li key={error.message}>{error.message}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return { doRequest, errors };
};
