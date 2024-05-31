import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from 'react-icons/md';

const ArticleNavbar = ({Author}) => {
  const navigate= useNavigate();
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center text-white">
      {Author?<div className="profile bg-white p-4 shadow-md rounded flex items-center">
      <img src={Author.Image} alt={Author.Name} className="w-24 h-24 rounded-full mr-4" />
      <div>
        <div>
        <h2 className="text-2xl font-bold text-black">Author</h2>
        <h2 className="text-medium font-bold text-black">{Author.Name}</h2>
        </div>
        <i className="text-gray-600 text-sm mb-1">{Author.Bio}</i>
        <p className="text-blue-500">{Author.Email}</p>
      </div>
    </div>
:<></>}
      <div className="flex items-center space-x-4">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={()=>navigate('/create-article')}>
        <div className='flex justify-center items-center'>
            <FaPlus/><span>Create New Article</span>
            </div>
        </button>
        <FaEdit/>
        <MdDelete/>
      </div>
    </nav>
  );
};

export default ArticleNavbar;
