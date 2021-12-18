import Head from 'next/head';
import { useMoralis } from 'react-moralis';
import { motion } from 'framer-motion';

import Login from '../components/Login';
import Header from '../components/Header';
import Messages from '../components/Messages';
import { homeAnimation, homeTransition } from '../animations/home';

const Home = () => {
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <motion.div
      className="w-full flex items-center justify-center"
      initial="out"
      animate="in"
      variants={homeAnimation}
      transition={homeTransition}
    >
      <Head>
        <title>Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-screen bg-black">
        <Header />
        <Messages />
      </div>
    </motion.div>
  );
};

export default Home;
