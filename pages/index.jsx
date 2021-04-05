import { buildClient } from '../api/build-client';

const Home = ({ currentUser }) => {
  return (
    <div>
      <h1>
        {currentUser ? `Hi ${currentUser.email}!` : `You're not signed in`}
      </h1>
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
