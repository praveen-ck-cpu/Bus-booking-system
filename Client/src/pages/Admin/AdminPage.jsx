import React, { useState } from 'react';
import { FaBus, FaRoute, FaClipboardList, FaThLarge } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import Img from '../../assets/herobg.png';
import { NavLink, useLocation } from 'react-router-dom';

const AdminPage = () => {
    const location = useLocation();
    const adminid = location.state;
    const [name, setName] = useState("Praveen M");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newName, setNewName] = useState("");

    const handleEditClick = () => {
        setNewName(name);
        setIsModalOpen(true);
    };

    const handleSave = () => {
        setName(newName);
        setIsModalOpen(false);
    };

    return (
        <>
            <div className='fixed' >
                <div className=" w-64 h-screen bg-red-500 text-white flex flex-col p-4 -z-1">
                    {/* Profile Section */}
                    <div className="flex flex-col items-center pt-5 mb-6">
                        <div className="w-30 h-30 bg-white rounded-full flex items-center justify-center border-4 border-blue-400 shadow-lg overflow-hidden">
                            <img 
                                src={Img}
                                alt="Admin Profile" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-lg font-semibold mt-2 text-black">{name}</h2>
                    </div>

                    {/* Navigation Menu */}
                    <nav className="flex flex-col space-y-3">
                        <NavLink to="/admin" className="flex items-center gap-3 p-2 hover:bg-white text-black rounded">
                            <FaThLarge /> Dashboard
                        </NavLink>
                        <NavLink to="/admin/buses" state={adminid} className="flex items-center gap-3 p-2 hover:bg-white text-black rounded">
                            <FaBus /> Buses
                        </NavLink>
                        <NavLink to="/admin/routes" className="flex items-center gap-3 p-2 hover:bg-white text-black rounded">
                            <FaRoute /> Routes
                        </NavLink>
                        <NavLink to="/admin/apporval" className="flex items-center gap-3 p-2 hover:bg-white text-black rounded">
                            <FaClipboardList /> Apporval Bus
                        </NavLink>
                        <NavLink to="/admin/booking" className="flex items-center gap-3 p-2 hover:bg-white text-black rounded">
                            <FaClipboardList /> Bookings
                        </NavLink>
                    </nav>

                    {/* Edit Profile Button */}
                    <div className="mt-auto">
                        <button 
                            onClick={handleEditClick}
                            className="flex items-center gap-3 p-3 bg-white text-black rounded hover:bg-gray-200 w-full cursor-pointer"
                        >
                            <FiEdit /> Edit Name
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center   bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                        <h2 className="text-lg font-semibold mb-4 text-red-700">Edit Name</h2>
                        <input 
                            type="text" 
                            value={newName} 
                            onChange={(e) => setNewName(e.target.value)}
                            className="w-full p-2 border rounded mb-4"
                        />
                        <div className="flex justify-end space-x-2">
                            <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
                            <button onClick={handleSave} className="px-4 py-2 bg-red-500 text-white rounded">Save</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AdminPage;
