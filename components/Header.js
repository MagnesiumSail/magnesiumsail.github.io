// components/Header.js
export default function Header() {
    return (
      <header className="w-full bg-gray-800 text-white py-4 px-8 shadow-md">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            Indiana Brown
          </div>
          <ul className="flex space-x-8">
            <li><a href="#about" className="hover:underline">About Me</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  