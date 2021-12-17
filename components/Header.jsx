import { useMoralis } from 'react-moralis';

import Avatar from './Avatar';
import ChangeUsername from './ChangeUsername';

const Header = () => {
  const { user, logout } = useMoralis();

  return (
    <div className="text-white space-y-5 border-b-4 border-fuchsia-500 pb-12">
      <div className="flex justify-center">
        <h1 className="text-4xl sm:text-6xl font-bold gradient cursor-pointer">
          Decentraland
        </h1>
      </div>

      <div className="flex flex-col items-center space-y-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center">
          <div className="h-20 w-20 sm:h-36 sm:w-36  relative border-4 border-pink-500 rounded-full mr-2">
            <Avatar />
          </div>
          <div>
            <h1 className="text-3xl font-bold sm:text-6xl truncate max-w-sm">
              {user.getUsername()}
            </h1>
            <h1 className="text-xs sm:text-base font-semibold text-gray-400 hover:text-gray-100 cursor-pointer">
              Change Username
            </h1>
          </div>
        </div>

        <div>
          <button
            className="text-lg font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-1 rounded-lg hover:animate-pulse"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
