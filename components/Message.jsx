import { useMoralis } from 'react-moralis';
import TimeAgo from 'timeago-react';

import Avatar from './Avatar';

const Message = ({ message }) => {
  const { user } = useMoralis();

  const isUserMessage = message.get('ethAddress') === user.get('ethAddress');

  return (
    <div
      className={`flex items-end space-x-2 relative ${
        isUserMessage && 'justify-end'
      }`}
    >
      <div className={`relative h-8 w-8 ${isUserMessage && 'order-last ml-2'}`}>
        <Avatar username={message.get('username')} />
      </div>

      <div
        className={`flex space-x-4 p-3 rounded-lg ${
          isUserMessage
            ? 'rounded-br-none bg-fuchsia-600'
            : 'rounded-bl-none bg-indigo-500'
        }`}
      >
        <p>{message.get('message')}</p>
      </div>

      <TimeAgo
        className={`text-[10px] italic text-gray-400 ${
          isUserMessage && 'order-first'
        }`}
        datetime={message.createdAt}
      />

      <p
        className={`absolute -bottom-5 text-xs ${
          isUserMessage ? 'text-pink-400' : 'text-blue-400'
        }`}
      >
        {message.get('username')}
      </p>
    </div>
  );
};

export default Message;
