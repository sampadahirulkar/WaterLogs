import React from 'react'
import Navbar from "/src/components/Navbar"
import Search from '/src/components/Search'
import Chats from '/src/components/Chats'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Search/>
      <Chats/>
    </div>
  );
};

export default Sidebar 