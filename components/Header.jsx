import { useEffect, useState, useRef } from 'react';
import { useMoralis } from 'react-moralis';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { motion } from 'framer-motion';

import Avatar from './Avatar';
import Modal from './Modal';
import { headerAnimation, headerTransition } from '../animations/header';

const Header = () => {
  const { user, logout } = useMoralis();
  const [option, setOption] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setOption(!option);
    if (showModal) {
      setShowModal(!showModal);
    }
  };

  const openModal = () => {
    setShowModal(!showModal);
  };

  let menuRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setOption(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  return (
    <>
      <div className="absolute z-50 top-24 right-5">
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </div>

      <motion.div
        className="h-14 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-between px-2 relative w-full text-white shadow-2xl"
        initial="out"
        animate="in"
        variants={headerAnimation}
        transition={headerTransition}
      >
        <div className="flex items-center">
          <div className="h-10 w-10 relative md:h-12 md:w-12">
            <Avatar />
          </div>

          <div className="w-24 sm:w-36 md:w-44">
            <h1 className="font-bold tracking-wide truncate">
              {user.getUsername()}
            </h1>
          </div>
        </div>

        <div ref={menuRef}>
          <BiDotsVerticalRounded className="text-xl" onClick={handleClick} />
          <div
            className={`bg-white shadow-md rounded-sm flex flex-col absolute right-4 z-50 ${
              option ? 'block' : 'hidden'
            }`}
          >
            <span
              className="px-3 py-1 font-semibold cursor-pointer text-xs text-black"
              onClick={logout}
            >
              Logout
            </span>

            <div className="h-[1px] w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

            <span
              className="px-3 py-1 font-semibold cursor-pointer text-xs text-black lg:hidden"
              onClick={openModal}
            >
              Change Username
            </span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
