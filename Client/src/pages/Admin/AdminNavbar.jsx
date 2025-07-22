import { useState } from "react";
import { FaBars, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import {  useNavigate } from "react-router-dom";
import AdminProfileModal from "../Admin/floder/AdminProfile"; 


const AdminNavbar = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const logout = () =>{
        navigate ("/alogin");
        localStorage.clear();
    }


    return (
        <>
            {/* Navbar */}
            <div className="fixed ml-64 w-[calc(100%-16rem)] bg-white shadow-xl p-4 flex justify-between items-center md:pl-72 z-10">
                <button className="md:hidden text-gray-700 text-2xl">
                    <FaBars />
                </button>
                <h1 className="text-xl font-bold"></h1>
                <div className="flex items-center space-x-4">
                    {/* User Icon to Open Modal */}
                    <FaUserCircle
                        className="text-2xl text-red-700 cursor-pointer"
                        onClick={() => setIsModalOpen(true)}
                    />
                    <div onClick={logout} className="text-red-700 flex items-center">
                        <FaSignOutAlt className="mr-1" /> Logout
                    </div>
                </div>
            </div>

            {/* Import and Use the Modal Component */}
            <AdminProfileModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default AdminNavbar;
