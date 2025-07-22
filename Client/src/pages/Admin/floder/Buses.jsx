import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const dummy = {
  busname: "",
  bustype: "",
  totalseats: "",
  fromtime: "",
  totime: "",
  hours: "",
  amount: "",
  busnumber:"",
  rcbookno: "",
  license: "",
  adminid: localStorage.getItem("user") || ""
};

const busTypes = ["A/C Sleeper", "NON-A/C Sleeper", "A/C seats", "NON-A/C seats"];

export default function Buses() {
  const [busData, setBusData] = useState({ ...dummy });
  const [buses, setBuses] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBusData((prevData) => ({
      ...prevData,
      [name]: value,
      adminid: localStorage.getItem("user") || ""
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingIndex !== null) {
      const updatedBuses = [...buses];
      updatedBuses[editingIndex] = busData;
      setBuses(updatedBuses);
      setEditingIndex(null);
    } else {
      setBuses((prev) => [...prev, busData]);
      try {
        const response = await axios.post(`http://localhost:3105/admin/createbus/`, busData);
        window.alert(response.data.busid);
      } catch (error) {
        console.error("Error creating bus:", error);
      }
    }

    setBusData({ ...dummy, adminid: localStorage.getItem("user") || "" });
  };

  const handleEdit = (index) => {
    const bus = buses[index];
    const completeBus = {
      ...dummy,
      ...bus,
      adminid: localStorage.getItem("user") || ""
    };
    setBusData(completeBus);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setBuses(buses.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-4xl ml-[400px] mt-10 p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-red-500">
        {editingIndex !== null ? "Edit Bus" : "Add New Bus"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded shadow-lg">
        <h3 className="text-xl font-bold text-blue-700">Bus Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-medium">Bus Name</label>
            <input 
              className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400" 
              name="busname" 
              type="text"
              value={busData.busname} 
              onChange={handleChange} 
              autoComplete="off"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Bus Type</label>
            <select
              className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
              name="bustype"
              value={busData.bustype}
              onChange={handleChange}
              required
              autoComplete="off"
            >
              <option value="" disabled>Select Bus Type</option>
              {busTypes.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block font-medium">Total Seats</label>
            <input autoComplete="off" className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400" name="totalseats" value={busData.totalseats} onChange={handleChange} required />
          </div>
          <div>
            <label className="block font-medium">Hours</label>
            <input autoComplete="off" className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400" name="hours" value={busData.hours} onChange={handleChange} required />
          </div>
          <div>
            <label className="block font-medium">Amount</label>
            <input autoComplete="off" className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400" name="amount" value={busData.amount} onChange={handleChange} required />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-medium">From Time</label>
            <input autoComplete="off" className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400" name="fromtime" value={busData.fromtime} onChange={handleChange} required />
          </div>
          <div>
            <label className="block font-medium">To Time</label>
            <input autoComplete="off" className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400" name="totime" value={busData.totime} onChange={handleChange} required />
          </div>
        </div>

        <h3 className="text-xl font-bold text-green-700">Document Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block font-medium">Bus Number</label>
            <input autoComplete="off" className="w-full p-3 border rounded focus:ring-2 focus:ring-green-400" name="busnumber" value={busData.busnumber} onChange={handleChange} required />
          </div>
          <div>
            <label className="block font-medium">Bus RC Book Number</label>
            <input autoComplete="off" className="w-full p-3 border rounded focus:ring-2 focus:ring-green-400" name="rcbookno" value={busData.rcbookno} onChange={handleChange} required />
          </div>
          <div>
            <label className="block font-medium">Bus Driver License</label>
            <input autoComplete="off" className="w-full p-3 border rounded focus:ring-2 focus:ring-green-400" name="license" value={busData.license} onChange={handleChange} required />
          </div>
        </div>

        <button type="submit" className="w-full p-4 bg-red-400 text-white rounded hover:bg-red-700 transition">
          {editingIndex !== null ? "Update Bus" : "Add Bus"}
        </button>
      </form>

      <h2 className="text-2xl font-bold mt-10 text-red-700">Recently Added Buses</h2>
      <div className="mt-4 space-y-4">
        {buses.length === 0 ? (
          <p className="text-gray-500">No buses added yet.</p>
        ) : (
          buses.map((bus, index) => (
            <div key={index} className="p-5 border rounded shadow-md bg-white">
              <p className="text-lg font-semibold">{bus.busname} ({bus.bustype})</p>
              <p>Seats: {bus.totalseats}</p>
              <p>Duration: {bus.hours} hrs</p>
              <p>Fare: {bus.amount}</p>
              <p>{bus.fromtime} - {bus.totime}</p>
              <p className="font-semibold mt-2">Documents:</p>
              <p>Bus Number: {bus.busNumber}</p>
              <p>RC Book: {bus.rcBookNumber}</p>
              <p>Driver License: {bus.driverLicense}</p>
              <div className="mt-2 flex space-x-4">
                <button onClick={() => handleEdit(index)} className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Edit</button>
                <button onClick={() => handleDelete(index)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
