import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon, Download } from 'lucide-react'; // Replace DocumentDownloadIcon with Download if it's not found

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleResumeClick = () => {
    // Add your resume download logic here
    console.log('Resume button clicked');
  };

  return (
    <nav>
      <div className="fixed top-0 z-40 w-full border-b border-gray-200/20 bg-transparent">
        <div className="flex items-center justify-between px-4 py-2 lg:px-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <a className="text-xl font-bold text-gray-200">Your Logo</a>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6">
            <Link href="/">
              <a className="text-sm text-gray-400 hover:text-white transition-colors">Home</a>
            </Link>
            <Link href="/about">
              <a className="text-sm text-gray-400 hover:text-white transition-colors">Projects</a>
            </Link>
            <Link href="/">
              <a className="text-sm text-gray-400 hover:text-white transition-colors">About</a>
            </Link>
            <Link href="/">
              <a className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a>
            </Link>

            {/* Resume Button */}
            <button
              onClick={handleResumeClick}
              className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors flex items-center"
            >
              <Download className="h-4 w-4 mr-2" /> {/* Use an alternative icon */}
              Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XIcon className="h-6 w-6 text-gray-200" />
            ) : (
              <MenuIcon className="h-6 w-6 text-gray-200" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}
        >
          <div className="px-4 py-2">
            <Link href="/">
              <a className="text-sm font-medium text-gray-200 hover:text-white transition-colors block py-2">Home</a>
            </Link>
            <Link href="/about">
              <a className="text-sm font-medium text-gray-200 hover:text-white transition-colors block py-2">About</a>
            </Link>
            
            {/* Mobile Resume Button */}
            <button
              onClick={handleResumeClick}
              className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors flex items-center mt-2"
            >
              <Download className="h-4 w-4 mr-2" /> {/* Use an alternative icon */}
              Resume
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
