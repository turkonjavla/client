import App from 'next/app';
import 'bootstrap/dist/css/bootstrap.css';
import { buildClient } from '../api/build-client';
import { Header } from '../components/header';

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <>
      <Header currentUser={currentUser} />
      <Component {...pageProps} />
    </>
  );
};

AppComponent.getInitialProps = async appContext => {
  const { ctx } = appContext;

  const client = buildClient(ctx);
  const { data } = await client.get('/api/users/currentuser');
  const appProps = await App.getInitialProps(appContext);

  return {
    ...appProps,
    ...data,
  };
};

export default AppComponent;
