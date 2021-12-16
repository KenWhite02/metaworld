import Head from 'next/head';
import { useMoralis } from 'react-moralis';

import Login from '../components/Login';

const Home = () => {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-auto w-auto bg-black">
      <Head>
        <title>Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen w-full flex flex-col justify-center items-center bgGradient space-y-5">
        <h1 className="font-bold text-4xl text-white">
          Welcome to the Metaverse
        </h1>
        <button
          className="bg-black rounded-lg py-4 px-6 font-bold animate-pulse max-w-sm text-white hover:animate-none"
          onClick={() => logout()}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
