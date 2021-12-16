import Image from 'next/image';
import { useMoralis } from 'react-moralis';
import { motion } from 'framer-motion';
import TypeWriter from 'react-typewriter';

import Loading from './Loading';
import gif from '../assets/moon-36.gif';
import {
  buttonAnimation,
  buttonTransition,
  intro2Animation,
  intro2Transition,
  introAnimation,
  introTransition,
  loginAnimation,
  loginTransition,
} from '../animations/login';

const Login = () => {
  const { authenticate, isInitializing, isInitialized, isAuthenticating } =
    useMoralis();

  if (isInitializing || !isInitialized || isAuthenticating) {
    return <Loading />;
  }

  return (
    <motion.div
      className="bg-black relative text-white"
      initial="out"
      animate="in"
      variants={loginAnimation}
      transition={loginTransition}
    >
      <div className="flex flex-col absolute z-50 h-full p-5 justify-center space-y-3">
        <TypeWriter typing={0.4}>
          <h1 className="font-bold text-4xl text-white lg:gradient lg:text-6xl max-w-md tracking-widest">
            Welcome to Metaverse
          </h1>
        </TypeWriter>

        <motion.h1
          className="font-semibold text-xl text-gray-400"
          initial="out"
          animate="in"
          variants={introAnimation}
          transition={introTransition}
        >
          Create and explore the virtual world
        </motion.h1>

        <motion.h1
          className="font-semibold text-xl text-gray-400"
          initial="out"
          animate="in"
          variants={intro2Animation}
          transition={intro2Transition}
        >
          owned by its users.
        </motion.h1>

        <motion.button
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg p-4 font-bold animate-pulse max-w-sm hover:animate-none"
          onClick={() => authenticate()}
          initial="out"
          animate="in"
          variants={buttonAnimation}
          transition={buttonTransition}
        >
          Login to the METAVERSE
        </motion.button>
      </div>

      <div className="w-full h-screen glass">
        <Image
          placeholder="blur"
          blurDataURL={gif}
          src={gif}
          layout="fill"
          objectFit="cover"
          objectPosition={'center'}
          quality={100}
        />
      </div>
    </motion.div>
  );
};

export default Login;
