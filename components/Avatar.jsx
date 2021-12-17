import Image from 'next/image';
import { useMoralis } from 'react-moralis';

const Avatar = ({ username, pressLogout }) => {
  const { user, logout } = useMoralis();
  return (
    <Image
      className="rounded-full cursor-pointer hover:opacity-75"
      src={`https://avatars.dicebear.com/api/avataaars/${
        username || user.get('username')
      }.svg`}
      layout="fill"
      onClick={() => pressLogout && logout()}
    />
  );
};

export default Avatar;
