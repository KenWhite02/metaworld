import Image from 'next/image';

import loading from '../assets/loading.gif';

const Loading = () => {
  return (
    <div className="bg-black h-screen w-full">
      <Image src={loading} layout="fill" objectFit="contain" />
    </div>
  );
};

export default Loading;
