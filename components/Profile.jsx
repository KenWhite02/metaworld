import { useState } from 'react';
import { IoPencil } from 'react-icons/io5';
import { FaEthereum } from 'react-icons/fa';
import { useMoralis } from 'react-moralis';
import { motion } from 'framer-motion';

import Avatar from './Avatar';
import Carousel from './Carousel/Carousel';
import Modal from './Modal';
import {
  addressAnimation,
  addressTransition,
  avatarAnimation,
  avatarTransition,
  editAnimation,
  editTransition,
  ethAnimation,
  ethTransition,
  imageAnimation,
  imageTransition,
  nameAnimation,
  nameTransition,
} from '../animations/profile';

const Profile = () => {
  const { isUserUpdating, user } = useMoralis();

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full py-5 space-y-5 text-white">
        <div className="absolute z-50 top-60">
          <Modal showModal={showModal} setShowModal={setShowModal} />
        </div>

        <motion.div
          initial="out"
          animate="in"
          variants={avatarAnimation}
          transition={avatarTransition}
        >
          <div className="h-20 w-20 relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full">
            <Avatar />
          </div>
        </motion.div>

        <div className="flex items-center w-6/12 justify-between">
          <motion.h1
            className="font-bold text-lg truncate"
            initial="out"
            animate="in"
            variants={nameAnimation}
            transition={nameTransition}
          >
            {user.getUsername()}
          </motion.h1>

          <motion.button
            disabled={isUserUpdating}
            className="text-lg ml-3 text-blue-500 cursor-pointer"
            initial="out"
            animate="in"
            variants={editAnimation}
            transition={editTransition}
          >
            <IoPencil onClick={openModal} />
          </motion.button>
        </div>

        <div className="flex flex-col items-center justify-center">
          <motion.h1
            className="text-md flex items-center font-bold"
            initial="out"
            animate="in"
            variants={addressAnimation}
            transition={addressTransition}
          >
            <FaEthereum /> Address
          </motion.h1>

          <motion.span
            className="truncate w-1/2 font-extralight tracking-tighter text-sm text-gray-500"
            initial="out"
            animate="in"
            variants={ethAnimation}
            transition={ethTransition}
          >
            {user.get('ethAddress')}
          </motion.span>
        </div>

        <div className="h-1 w-11/12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

        <motion.div
          className="w-11/12 h-60 relative rounded-md"
          initial="out"
          animate="in"
          variants={imageAnimation}
          transition={imageTransition}
        >
          <Carousel />
        </motion.div>
      </div>
    </>
  );
};

export default Profile;
