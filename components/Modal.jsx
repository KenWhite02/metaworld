const Modal = () => {
  return (
    <>
      <button className="absolute bottom-0 right-5 text-sm text-white font-semibold">
        Change Username
      </button>

      <div className="bg-gray-500 shadow-lg">
        <div className="border-b px-4 py-2">
          <h1>Change Username</h1>
        </div>

        <div className="p-3">
          <form>
            <input type="text" />
          </form>
        </div>

        <div className="flex justify-end items-center w-full border-t p-3">
          <button className="bg-pink-500 hover:bg-pink-700 px-3 py-1 rounded text-white mr-1">
            Cancel
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 px-3 py-1 rounded text-white">
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
