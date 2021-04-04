import axios from 'axios';

const Home = ({ currentUser }) => {
  console.log('CURRENT USER: ', currentUser);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export const getServerSideProps = async () => {
  const { data } = await axios.get(
    'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',
    {
      headers: {
        Host: 'ticketing.dev',
      },
    }
  );

  return {
    props: {
      ...data,
    },
  };
};

export default Home;
