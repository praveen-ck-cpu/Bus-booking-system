import React, { useState } from "react";
import { FaTimes, FaUserCircle } from "react-icons/fa";
import EditProfileModal from "../floder/EditProfile";

const AdminProfileModal = ({ isOpen, onClose }) => {
    const [isEditOpen, setIsEditOpen] = useState(false);

    // Admin Profile State
    const [adminData, setAdminData] = useState({
        name: "Praveen",
        email: "praveen@example.com",
        phone: "+91 98765 43210",
        role: "Route Manager"
    });

    // Function to update admin data
    const handleProfileUpdate = (updatedData) => {
        setAdminData(updatedData);
        setIsEditOpen(false); // Close the edit modal
    };

    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-opacity-30 z-50">
                <div className="bg-white h-[450px] w-[500px] rounded-lg shadow-lg p-6 flex flex-col items-center relative border border-red-300">
                    {/* Close Button */}
                    <button className="absolute top-3 right-3 text-red-500 text-2xl" onClick={onClose}>
                        <FaTimes />
                    </button>

                    {/* Profile Icon */}
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center border-2 border-red-400 shadow-lg mb-4">
                        <FaUserCircle className="text-red-400 text-6xl" />
                    </div>

                    <h2 className="text-2xl font-bold text-red-700 mb-4">Admin Profile</h2>

                    <div className="text-gray-700 text-lg space-y-3 w-full text-center">
                        <p><strong>Name:</strong> {adminData.name}</p>
                        <p><strong>Email:</strong> {adminData.email}</p>
                        <p><strong>Phone:</strong> {adminData.phone}</p>
                        <p><strong>Role:</strong> {adminData.role}</p>
                    </div>

                    {/* Edit Profile Button */}
                    <div className="mt-4">
                        <button onClick={() => setIsEditOpen(true)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                            Edit Profile
                        </button>
                    </div>
                </div>
            </div>

            {/* Edit Profile Modal */}
            {isEditOpen && (
                <EditProfileModal 
                    isOpen={isEditOpen} 
                    onClose={() => setIsEditOpen(false)} 
                    adminData={adminData} 
                    onUpdateProfile={handleProfileUpdate} 
                />
            )}
        </>
    );
};

export default AdminProfileModal;
