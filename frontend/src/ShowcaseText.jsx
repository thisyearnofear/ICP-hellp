import React from 'react';
import logo from '../logo2.svg';

const ShowcaseText = () => {
  return (
    <div>
      <div
        className="shadow-lg overflow-hidden bg-white text-black rounded-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <div className="space-y-6 p-8">
            <p className="leading-relaxed text-gray-700">
              <strong>Hello, World!</strong> Papa here a new dev on the Internet Computer Protocol (ICP), thanks for hosting!
            </p>
            
            <p className="leading-relaxed text-gray-700">
              A little about me below.
            </p>
            
            <ul className="space-y-2 text-blue-600 mt-6">
              <li><a href="https://github.com/thisyearnofear" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://warpcast.com/papa" target="_blank" rel="noopener noreferrer">Web3 Social</a></li>
              <li><a href="https://warpcast.com/~/channel/icp" target="_blank" rel="noopener noreferrer">ICP Channel</a></li>
              <li><a href="https://twitter.com/papajimjams" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://paragraph.xyz/@papajams.eth" target="_blank" rel="noopener noreferrer">Writing</a></li>
              <li><a href="https://bit.ly/papaspotify" target="_blank" rel="noopener noreferrer">Spotify</a></li>
            </ul>

            <img src={logo} alt="Onchain logo" className="logo h-24 w-64 mt-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseText;
