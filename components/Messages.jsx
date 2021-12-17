import { useEffect, useRef } from 'react';
import { ByMoralis, useMoralis, useMoralisQuery } from 'react-moralis';
import Message from './Message';
import SendMessage from './SendMessage';

const MINS_DURATION = 1440;

const Messages = () => {
  const { user } = useMoralis();

  const endOfMessagesRef = useRef(null);

  const executeScroll = () => endOfMessagesRef.current.scrollIntoView();

  useEffect(() => {
    executeScroll();
  }, []);

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
    <div className="text-white pb-32 rounded h-[400px] overflow-y-scroll">
      <div className="py-5">
        <ByMoralis
          variant="dark"
          style={{ marginLeft: 'auto', marginRight: 'auto', font: '20px' }}
        />
      </div>

      <div className="space-y-10 py-4 px-12">
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>

      <div className="flex justify-center">
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>

      <div ref={endOfMessagesRef} className="text-center text-white">
        <p className="truncate max-w-3xl m-auto">
          You're up to date {user.getUsername()} 💬
        </p>
      </div>
    </div>
  );
};

export default Messages;
