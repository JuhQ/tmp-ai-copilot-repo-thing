const Header = () => {
  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 p-4 z-10">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-blue-500">Twitter Clone</h1>
        <div className="flex items-center space-x-4">
          <button className="text-blue-500 hover:text-blue-600 font-medium">
            Home
          </button>
          <button className="text-gray-600 hover:text-gray-800 font-medium">
            Profile
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;