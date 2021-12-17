import Head from 'next/head';
import Image from 'next/image';
import { useMoralis } from 'react-moralis';

import Login from '../components/Login';
import Header from '../components/Header';
import Messages from '../components/Messages';

const Home = () => {
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="w-full flex justify-center items-center">
      <Head>
        <title>Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-11/12 max-w-7xl my-16 glass rounded-lg shadow-2xl p-6 space-y-20 border-2 border-fuchsia-500">
        <Header />
        <Messages />
      </div>
    </div>
  );
};

export default Home;
