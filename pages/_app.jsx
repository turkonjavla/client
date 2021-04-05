import App from 'next/app';
import 'bootstrap/dist/css/bootstrap.css';
import { buildClient } from '../api/build-client';

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <>
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
