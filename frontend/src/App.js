import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/main/login";
import Admin from "./components/admin";
import User from "./components/user";
import Main from "./components/main";
import Seller from "./components/seller";
import Header from "./components/main/header";
//import NewLogin from "./components/main/newlogin";
//import NewSignup from "./components/main/newsignup";
import Signup from "./components/main/signup";
import Ordering from "./components/main/ordering";
import BrowseEquipment from "./components/main/browseEquipment";
import Chat from "./components/user/chat";
import AddExpert from "./components/admin/addexpert";
import Expertlogin from "./components/main/expertlogin";
import Expertchat from "./components/expert/expertchat";
import Expert from "./components/expert";
import Home from "./components/main/home";
// import Checkout from "./components/main/checkout";
import Payment from "./components/main/payment";
import Sellersignup from "./components/main/sellersignup";
import Sellerlogin from "./components/main/sellerlogin";
import AdminAuthorisor from "./components/adminAuth";
import Authorisor from "./components/authenticator";
import UserChat from "./components/user/chat";
import AdminProfile from "./components/admin/profile";
import AddEquipment from "./components/seller/addEquipment";
import ManageEquipment from "./components/seller/manageEquipment";
import Resetpassword from "./components/main/resetPassword";
import Expertsignup from "./components/main/expertsignup ";
import Contactus from "./components/main/contactus";
import EquipmentDetail from "./components/main/equipmentDetails";
import ExpertAuthorisor from "./components/expertAuth";
import SellerAuthorisor from "./components/sellerAuth";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ManageOrder from "./components/user/manageOrder";
import UserProfile from "./components/user/profile";
/* import Sidebar from "./components/admin/sidebar"; */
import ManageUser from "./components/admin/manageuser";
import DashBoard from "./components/admin/dashboard";


function App() {
  const stripe = loadStripe("pk_test_51L4QZaSAo6VRyLQAvmwkd2hcY5qjlpFHL61Fu1aJTdoxjmfDAVg0CMwpqQbj3sJEHflEEwm4lFElImsZYGgTIq1O00Af6cPz8O");
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <AdminAuthorisor>
              <Admin />
            </AdminAuthorisor>
          }
          path="admin"
        >
          <Route element={<AdminProfile />} path="profile" />
          <Route element={<AddExpert />} path="addexpert" />
          <Route element={<ManageUser />} path="manageuser" />
          <Route element={<DashBoard/>} path="dashboard" />
        </Route>

        <Route
          element={
            <Authorisor>
              <User />
            </Authorisor>
          }
          path="user"
        >
          <Route element={<Chat />} path="chat" />
          <Route element={<ManageOrder />} path="manageorder" />
          <Route element={<UserProfile />} path="profile" />
        </Route>
        <Route element={<Main />} path="main">
          <Route element={<Signup />} path="signup" />
          <Route element={<Login />} path="login" />
          
          <Route
            element={
              <Elements stripe={stripe}>
                <Payment />
              </Elements>
            }
            path="payment"
          />
          {/* <Route element={<NewLogin />} path="newlogin" /> */}
          {/* <Route element={<NewSignup />} path="newsignup" /> */}
          <Route element={<BrowseEquipment />} path="browseEquipment" />
          <Route element={<EquipmentDetail />} path="equipmentDetails/:id" />
          <Route element={<Home />} path="home" />
          <Route element={<Ordering />} path="ordering" />
          <Route element={<Expertlogin />} path="expertlogin" />
          <Route element={<Sellersignup />} path="sellersignup" />
          <Route element={<Sellerlogin />} path="sellerlogin" />
          <Route element={<Resetpassword />} path="resetpassword" />
          <Route element={<Expertsignup />} path="expertsignup" />
          {/* <Route element={<Checkout/>} path="checkout" /> */}

          <Route element={<Contactus />} path="contactus" />

          <Route element={<Contactus />} path="/main/contactus" />

          {/* <Route element={<Equipmentdetails />} path="equipmentdetails" /> */}
        </Route>
        <Route
          element={
            <SellerAuthorisor>
              <Seller />
            </SellerAuthorisor>
          }
          path="seller"
        >
          <Route element={<AddEquipment />} path="addequipment" />
          <Route element={<ManageEquipment />} path="manageequipment" />
        </Route>

        <Route
          element={
            <ExpertAuthorisor>
              <Expert />
            </ExpertAuthorisor>
          }
          path="expert"
        >
          <Route element={<Expertchat />} path="expertchat" />
        </Route>

        <Route element={<Home />} path="home" />

        <Route element={<Navigate to="/home" />} path="/"></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
