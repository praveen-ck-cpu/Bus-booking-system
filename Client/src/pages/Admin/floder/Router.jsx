import axios from "axios";
import { useState } from "react";
const dummy = {
  busid: "",
  source: "",
  stop: [],
  destination: "",
  date: "",
  totalKm: "",
}
export default function Router1() {
  const [routeData, setRouteData] = useState(dummy);

  const adminid = localStorage.getItem("user");
  console.log("routes : ",adminid);
  const [routes, setRoutes] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRouteData({ ...routeData, [name]: value });
  };

  const handleStopChange = (index, value) => {
    const updatedStops = [...routeData.stop];
    updatedStops[index] = { name: value };
    setRouteData({ ...routeData, stop: updatedStops });
  };

  const addStop = () => {
    setRouteData({ ...routeData, stop: [...routeData.stop, {}] });
  };

  const removeStop = (index) => {
    const updatedStops = routeData.stop.filter((_, i) => i !== index);
    setRouteData({ ...routeData, stop: updatedStops });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedData = {
      busid: routeData.busid,
      source: routeData.source,
      stop: routeData.stop.map((stop) => stop.name),
      destination: routeData.destination,
      date: routeData.date,
      totalkm: Number(routeData.totalKm),
    };

    try {
      const response = await axios.post(`http://localhost:3105/admin/createroutedetails`,formattedData);
      if(!response) window.alert("Server error");
      setRouteData(dummy);
          //  const response = await fetch(
      //   editingIndex !== null
      //     ? `https://your-backend-api.com/routes/${routes[editingIndex].id}`
      //     : `http://localhost:3105/admin/createroutedetails`,
      //   {
      //     method: editingIndex !== null ? "PUT" : "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify(formattedData),
      //   }
      // );

      if (!response.ok) {
        throw new Error(`Failed to ${editingIndex !== null ? "update" : "add"} route`);
      }

      const responseData = await response.json();

      if (editingIndex !== null) {
        const updatedRoutes = [...routes];
        updatedRoutes[editingIndex] = responseData;
        setRoutes(updatedRoutes);
        setEditingIndex(null);
      } else {
        setRoutes([...routes, responseData]);
      }

      setRouteData({
        busid: "",
        source: "",
        stop: [{ name: "" }],
        destination: "",
        date: "",
        totalKm: "",
      });
    } catch (error) {
      console.error("Error:", error);
      alert(error.message);
    }
  };

  const handleEdit = (index) => {
    setRouteData(routes[index]);
    setEditingIndex(index);
  };

  const handleDelete = async (index) => {
    const routeToDelete = routes[index];

    try {
      const response = await fetch(`https://your-backend-api.com/routes/${routeToDelete.id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete route");

      setRoutes(routes.filter((_, i) => i !== index));
    } catch (error) {
      console.error("Error deleting route:", error);
      alert("Failed to delete route");
    }
  };



  return (
    <div className="max-w-4xl ml-[400px] mt-15 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-red-500">
        {editingIndex !== null ? "Edit Route" : "Add New Route"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1">
          <div>
            <label className="block font-medium">Bus ID</label>
            <input className="w-full p-2 border rounded" name="busid" value={routeData.busid} onChange={handleChange} required />
          </div>
        </div>

        <div>
          <label className="block font-medium">Source</label>
          <input className="w-full p-2 border rounded" name="source" value={routeData.source} onChange={handleChange} required />
        </div>

        <div>
          <label className="block font-medium">Stops</label>
          {routeData.stop.map((stop, index) => (
            <div key={index} className="flex items-center space-x-2 mt-2">
              <input
                className="w-full p-2 border rounded"
                value={stop.name}
                onChange={(e) => handleStopChange(index, e.target.value)}
                required
              />
              {index > 0 && (
                <button type="button" onClick={() => removeStop(index)} className="px-2 py-1 bg-red-500 text-white rounded">
                  ✖
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={addStop} className="mt-2 px-4 py-2 bg-green-500 text-white rounded">
            + Add Stop
          </button>
        </div>

        <div>
          <label className="block font-medium">Destination</label>
          <input className="w-full p-2 border rounded" name="destination" value={routeData.destination} onChange={handleChange} required />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Date</label>
            <input className="w-full p-2 border rounded" name="date" type="date" value={routeData.date} onChange={handleChange} required />
          </div>
          <div>
            <label className="block font-medium">Total KM</label>
            <input className="w-full p-2 border rounded" name="totalKm" type="number" value={routeData.totalKm} onChange={handleChange} required />
          </div>
        </div>

        <button type="submit" className="w-full p-2 bg-red-400 text-white rounded hover:bg-red-700 transition">
          {editingIndex !== null ? "Update Route" : "Add Route"}
        </button>
      </form>

      {/* Display Routes */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold mt-10 text-red-700 ">Recently Added Routes</h3>
        <div className="grid grid-cols-3 gap-4">
          {routes.map((route, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md border">
              <h4 className="text-lg font-semibold">Bus: {route.busid}</h4>
              <p>Source: {route.source}</p>
              <p>Destination: {route.destination}</p>
              <p>Date: {route.date}</p>
              <p>Distance: {route.totalKm} KM</p>
              <div className="flex space-x-2 mt-2">
                <button onClick={() => handleEdit(index)} className="px-3 py-1 bg-yellow-500 text-white rounded">
                  Edit
                </button>
                <button onClick={() => handleDelete(index)} className="px-3 py-1 bg-red-500 text-white rounded">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
