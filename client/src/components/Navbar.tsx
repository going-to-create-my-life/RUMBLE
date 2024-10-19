const Navbar = () => {
    return (
      <nav className="flex justify-between items-center h-[7vh] w-full bg-purple-900 px-8">
        <div className="text-white font-bold text-xl">Logo</div>
        <div className="flex items-center gap-8">
          <button className="bg-purple-700 hover:bg-purple-600 text-white py-2 px-6 rounded-full transition duration-300">
            Log In
          </button>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  