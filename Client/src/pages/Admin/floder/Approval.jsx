import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const ApprovalCard = ({ bus }) => {
  console.log(bus)
  return (
    <div className="border p-4 rounded-lg shadow-md w-full">
      <h2 className="text-lg font-bold">{bus.busname}</h2>
      <p className="text-sm text-gray-600">Bus Id: {bus.busid}</p>
      <p className="text-sm text-gray-600">Bus Type: {bus.bustype}</p>
      <p className="text-sm text-gray-600">Total Seats: {bus.totalseats}</p>
      <p className="text-sm text-gray-600">Bus : {bus.hours}</p>
        {bus.status === "true" ?  <p className={"text-sm font-semibold text-green-500"}>Status : Approved</p> : <p className={"text-sm font-semibold text-red-500"}>Status : Pending</p> }
    </div> 
  );
};

const BusApprovalList = () => {
  const adminid = localStorage.getItem("user");
  console.log("approva bus : ",adminid)
  const [approvedBuses, setApprovedBuses] = useState([]);
  const [pendingBuses, setPendingBuses] = useState([]);

  const aprovebus = async() =>{
    try {
      const getdata = await axios.get(`http://localhost:3105/admin/approvedbus/?adminid=${adminid}`);
      if(!getdata) window.alert("Something Wrong");
      setApprovedBuses(getdata.data);
    } catch (error) {
      console.log("Error",error)
    }
  }

  const nonaprovebus = async() =>{
    try {
      const getdata = await axios.get(`http://localhost:3105/admin/nonapprovedbus/?adminid=${adminid}`);
      console.log("dasd",getdata)
      if(!getdata) window.alert("Something Wrong");
      setPendingBuses(getdata.data);
    } catch (error) {
      console.log("Error",error)
    }
  }
  useEffect(() => {
   
  aprovebus();
  nonaprovebus();
    // Simulating an API call with sample data
    // const sampleBuses = [
    //   { name: "SRN Travels", id: "SRN123", number: 101, type: "Sleeper", totalSeats: 40, status: "Approved" },
    //   { name: "Express Line", id: "EXP456", number: 202, type: "AC Seater", totalSeats: 45, status: "Pending" },
    //   { name: "Night Rider", id: "NRT789", number: 303, type: "Non-AC Seater", totalSeats: 50, status: "Approved" },
    //   { name: "Speed Star", id: "SPD321", number: 404, type: "Luxury Sleeper", totalSeats: 36, status: "Pending" },
    // ];

    // // Categorizing buses based on status
    // setApprovedBuses(sampleBuses.filter(bus => bus.status === "Approved"));
    // setPendingBuses(sampleBuses.filter(bus => bus.status === "Pending"));
  }, []);
// console.log(approvedBuses)

  return (
    <div className="ml-[300px] mt-10 p-5 w-3/4">
      <h1 className="text-3xl font-bold text-red-600"> Bus Status</h1>

   

      {/* Approved Buses Section */}
      <h2 className="text-2xl font-bold text-green-600 mt-6">Approved Buses</h2>
      <div className="flex flex-wrap gap-4 pt-2">
        {approvedBuses.length > 0 ? (
          approvedBuses.map((bus, index) => <ApprovalCard key={index} bus={bus} />)
        ) : (
          <p className="text-gray-600">No approved buses</p>
        )}
      </div>

         {/* Pending Buses Section */}
         <h2 className="text-2xl font-bold text-red-600 mt-6">Pending Buses</h2>
      <div className="flex flex-wrap gap-4 pt-2">
        {pendingBuses.length > 0 ? (
          pendingBuses.map((bus, index) => <ApprovalCard key={index} bus={bus} />)
        ) : (
          <p className="text-gray-600">No pending buses</p>
        )}
      </div>
    </div>
  );
};

export default BusApprovalList;
