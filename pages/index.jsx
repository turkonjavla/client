import { buildClient } from '../api/build-client';

const Home = ({ currentUser }) => {
  console.log('CURRENT USER: ', currentUser);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export const getServerSideProps = async context => {
  const { data } = await buildClient(context).get('/api/users/currentuser');

  return {
    props: {
      ...data,
    },
  };
};

export default Home;
