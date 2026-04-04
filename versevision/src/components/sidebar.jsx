import React, { useState } from "react";
import { LuPanelLeftOpen, LuX } from "react-icons/lu";
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);
  const {session, signOut} = useAuth();

  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      await signOut();
      setIsOpen(false);
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  } 

  return (
    <>
      {/* Open button, only visible when sidebar is closed */}
      {!isOpen && (
        <button
          className="hover: cursor-pointer"
          onClick={openSidebar}
          aria-label="Open sidebar"
        >
          <LuPanelLeftOpen size={28} />
        </button>
      )}

      {/* Overlay, only visible when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={closeSidebar}
          aria-label="Close sidebar overlay"
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={`sidebar-panel fixed top-0 left-0 h-full w-76 bg-white shadow-lg z-50 transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        role="navigation"
        aria-label="Sidebar"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-bold">Menu</h2>
            <button
              className="hover: cursor-pointer"
              onClick={closeSidebar}
              aria-label="Close sidebar"
            >
              <LuX size={24} />
            </button>
          </div>
          <nav className="sidebar-content p-4 flex-1">
            {/* Add your sidebar links or content here */}
            <ul className="space-y-4">
              <li><Link to="/" onClick={closeSidebar} className="hover:underline">Home</Link></li>
              <li><Link to="/chat" onClick={closeSidebar} className="hover:underline">Chat</Link></li>
              <li><Link to="/about" onClick={closeSidebar} className="hover:underline">About</Link></li>
              <li><Link to="/contact" onClick={closeSidebar} className="hover:underline">Contact</Link></li>
            </ul>
          </nav>
          <div className="p-4 border-t border-gray-200">
            {session ? (
              <button
                className="w-full text-red-500 text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-black/80 transition-colors duration-200 cursor-pointer"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            ) : (
              <button
                className="w-full border border-gray-200 text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                onClick={() => { setIsOpen(false); navigate('/login'); }}
              >
                Login / Sign Up
              </button>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;