import { useRef } from 'react';
import { ByMoralis, useMoralis, useMoralisQuery } from 'react-moralis';
import { motion } from 'framer-motion';

import Message from './Message';
import SendMessage from './SendMessage';
import Profile from './Profile';
import { messagesAnimation, messagesTransition } from '../animations/messages';

const MINS_DURATION = 1440;

const Messages = () => {
  const { user } = useMoralis();
  const endOfMessagesRef = useRef(null);

  const { data, loading, error } = useMoralisQuery(
    'Messages',
    (query) =>
      query
        .ascending('createdAt')
        .greaterThan(
          'createdAt',
          new Date(Date.now() - 1000 * 60 * MINS_DURATION)
        ),
    [],
    {
      live: true,
    }
  );

  return (
    <div className="chat-height flex">
      <motion.div
        className="w-full lg:w-2/3 h-full overflow-y-scroll"
        initial="out"
        animate="in"
        variants={messagesAnimation}
        transition={messagesTransition}
      >
        <div className="py-2">
          <ByMoralis
            variant="dark"
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              font: '20px',
            }}
          />
        </div>

        <div className="space-y-10 px-4">
          {data.map((message) => (
            <Message key={message.id} message={message} />
          ))}
        </div>

        <div className="w-full mb-8">
          <SendMessage endOfMessagesRef={endOfMessagesRef} />
        </div>

        <div className="text-center text-white">
          <p className="truncate max-w-3xl m-auto">
            You're up to date {user.getUsername()} 💬
          </p>
        </div>

        <div className="mb-32" ref={endOfMessagesRef} />
      </motion.div>

      <div className="hidden w-1/3 lg:block">
        <Profile />
      </div>
    </div>
  );
};

export default Messages;
