import React from 'react';
import logo from '../assets/QuillSpacez.png'; // Import the logo image

function Logo({ width = "200px" }) { // Set a more reasonable default width
  return (
    <div className="flex justify-center items-center">
      <img
        src={logo} // Use the imported logo
        alt="Company Logo"
        style={{ width }} // Dynamically set the width
        className="max-w-full h-auto" // Ensure responsiveness
      />
    </div>
  );
}

export default Logo;
