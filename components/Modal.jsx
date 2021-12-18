import { useRef } from 'react';
import { useMoralis } from 'react-moralis';

const Modal = ({ showModal, setShowModal }) => {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();

  const username = useRef(null);

  const setUsername = () => {
    if (!username) return;

    setUserData({
      username: username.current.value,
    });

    username.current.value = '';
    setShowModal(false);
  };

  return (
    <>
      {showModal ? (
        <div className="w-72">
          <div className="space-y-3 glass p-2">
            <h1 className="text-white">Change Username</h1>
            <form>
              <input
                ref={username}
                type="text"
                placeholder="Enter new name..."
                className="outline-none rounded-full py-1 px-5 bg-slate-700 text-white"
              />
            </form>
            <div>
              <button
                className="bg-pink-500 hover:bg-pink-700 px-3 py-1 rounded text-white text-sm mr-1"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 px-3 py-1 rounded text-white text-sm"
                onClick={setUsername}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
