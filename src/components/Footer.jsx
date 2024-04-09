import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} YourName. This website is a clone created for practice purposes only. It is not affiliated with or endorsed by Apple Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;
