import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const EditProfileModal = ({ isOpen, onClose, adminData, onUpdateProfile }) => {
    const [formData, setFormData] = useState(adminData); // Initialize with adminData

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateProfile(formData); // 🔹 Update AdminPage state
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-opacity-30 z-50">
            <div className="bg-white h-auto w-[500px] rounded-lg shadow-lg p-6 flex flex-col items-center relative border border-red-300">
                {/* Close Button */}
                <button className="absolute top-3 right-3 text-red-500 text-2xl" onClick={onClose}>
                    <FaTimes />
                </button>

                <h2 className="text-2xl font-bold text-red-700 mb-4">Edit Profile</h2>

                <form onSubmit={handleSubmit} className="w-full text-lg space-y-3">
                    <div>
                        <label className="block text-gray-700">Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange}
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-400" />
                    </div>

                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange}
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-400" />
                    </div>

                    <div>
                        <label className="block text-gray-700">Phone</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-400" />
                    </div>

                    <button type="submit" className="w-full p-2 bg-red-500 text-white rounded mt-4 hover:bg-red-600">
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditProfileModal;
