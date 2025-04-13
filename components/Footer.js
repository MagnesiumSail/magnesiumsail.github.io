// components/Footer.js
export default function Footer() {
    return (
      <footer id="contact" className="w-full bg-gray-800 text-white py-6 px-8 mt-12 shadow-inner">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left text-sm">
            &copy; {new Date().getFullYear()} Indiana Brown. All rights reserved.
          </div>
          <div className="flex items-end space-x-6">
            <h3 className="text-2xl text-orange-100 font-semibold">Get in Touch!</h3>
            <a href="mailto:bro19015@byui.edu" className="hover:underline">Email</a>
            <a href="https://github.com/MagnesiumSail" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
            <a href="https://www.linkedin.com/in/indiana-brown-163a34236/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
          </div>
        </div>
      </footer>
    );
  }  