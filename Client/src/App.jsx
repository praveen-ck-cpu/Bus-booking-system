import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Tickets from "./pages/ticket/Tickets";
import Details from "./pages/ticket/detail/Detail";
import CheckOut from "./pages/ticket/checkout/CheckOut";
import Invoice from "./pages/ticket/invoice/Invoice";
import ServicesPage from "./pages/ser/ServicesPage";
import Error from "./pages/Error";
import Login from "./pages/login_signup/Login";
import Signin from "./pages/login_signup/signup";
import Layout1 from "./pages/Admin/Layout1";
import Buses from "./pages/Admin/floder/Buses";
import Router1 from "./pages/Admin/floder/Router";
import Booking from "./pages/Admin/floder/Bookings";
import { Toaster } from "sonner";
import Dashboard from "./pages/Admin/floder/Dasborad";
import ShowTicket from "./pages/ShowTicket";
import CancelTicket from "./pages/CancelTicket";
import Invoice1 from "./pages/Cancellation";
import BusApprovalList from "./pages/Admin/floder/Approval";
import AdminLogin from "./pages/Admin/floder/Adminlogin";





function App() {
  return (
    <>
    <Toaster position="top-right" richColors />
      <Router>
        <main className="W-full  full fex-col bg-neutral-50 min-h-screen">
          {/* navbar */}

          {/* Routing */}
          <Routes>
            <Route path="/page" element={<Invoice1 />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/bus-tickets" element={<Tickets />} />
            <Route path="/bus-tickets/checkout" element={<CheckOut />} />
            <Route path="/bus-tickets/payment" element={<Invoice />} />
            <Route path="/signup" element={<Signin />} />
            {/*details */}
            <Route path="/bus-tickets/details" element={<Details />} />
            {/*Admin page */}

            <Route path="/show-tickets" element={<ShowTicket />} />
            <Route path="/cancel-tickets" element={<CancelTicket />} />
            <Route path="/cancel" element={<Invoice1 />} />


            {/* Public Route  */}
            <Route path="/alogin" element={<AdminLogin/>} />


            <Route element={<Layout1 />}>

              <Route path="/admin" element={<Dashboard />} />
              <Route path="/admin/buses" element={<Buses />} />
              <Route path="/admin/routes" element={<Router1 />} />
              <Route path="/admin/booking" element={<Booking />} />
              <Route path="/admin/apporval" element={<BusApprovalList />} />
            </Route>



            <Route path="*" element={<Error />} />





          </Routes>

          {/* footer */}


        </main>
      </Router>
    </>
  );
}

export default App;
