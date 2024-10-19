import sticker from "./../../images/sticker.png"
const MainLanding = () => {
    return (
      <main
        className="flex bg-custom2-bg justify-between items-center w-full h-[93vh] p-8 text-white">
        {/* Left Content */}
        <div className="flex flex-col w-[40vw]">
          <h1 className="text-3xl leading-tight">
            Join with <span className="text-4xl font-bold block mt-2">METAMASK!</span>
          </h1>
          <p className="text-lg mt-4 w-[30vw] leading-relaxed">
            Download Browser extension of Metamask, then click below to open the metamask window and make the connection to play the game :)
          </p>
          <button className="bg-gradient-to-b from-purple-800 to-purple-900 text-white py-4 px-16 rounded-full shadow-lg mt-8 transition duration-300">
            Connect To Wallet
          </button>
        </div>
  
        {/* Right Content (Sticker Image) */}
        <div className="relative">
          <img src={sticker} alt="sticker" className="max-w-[40vw] h-auto" />
        </div>
      </main>
    );
  };
  
  export default MainLanding;
  