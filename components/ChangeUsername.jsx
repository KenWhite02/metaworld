import { useMoralis } from 'react-moralis';

const ChangeUsername = () => {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();

  const setUsername = () => {
    const username = prompt(
      `Enter your new Username (current: ${user.getUsername()})`
    );

    if (!username) return;

    setUserData({
      username,
    });
  };

  return (
    <div className="absolute bottom-0 right-5">
      <button
        disabled={isUserUpdating}
        className="text-sm text-white font-semibold"
        onClick={setUsername}
      >
        Change Username
      </button>
    </div>
  );
};

export default ChangeUsername;
