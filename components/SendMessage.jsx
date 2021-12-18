import { useMoralis } from 'react-moralis';
import { useState, useEffect } from 'react';
import { IoSend } from 'react-icons/io5';

const SendMessage = ({ endOfMessagesRef }) => {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message) return;

    const Messages = Moralis.Object.extend('Messages');
    const messages = new Messages();

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get('ethAddress'),
      })
      .then(
        (message) => {
          console.log(message);
        },
        (error) => {
          console.log(error.message);
        }
      );

    endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });

    setMessage('');
  };

  return (
    <form className="fixed bottom-5 flex w-full px-2 lg:w-2/3">
      <input
        className="outline-none flex-grow bg-gray-800 rounded-full px-2 text-white"
        type="text"
        placeholder={`Enter a Message ${user.getUsername()}`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="font-bold text-white text-3xl ml-3"
        type="submit"
        onClick={sendMessage}
      >
        <IoSend />
      </button>
    </form>
  );
};

export default SendMessage;
