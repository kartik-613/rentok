// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "../pages/Home";
// import Hireperson from "../pages/Hireperson/Hireperson";
// import Products from "../pages/Products";
// import Login from "../pages/Login";
// import Sell from "../pages/Sell";
// import Header from "../components/header/Header";
// import Footer from "../components/Footer";
// import RegisterPage from "../pages/register/Register";
// import ApprovalDashboard from "../pages/Hireperson/ApprovalDashboard";
// import EmployeeInfo from "../pages/Hireperson/EmployeInfo";
// import { BookingFormModal } from "../pages/Hireperson/BookingFormModal";

// const MainRoute = () => {
//   return (
//     <>
//       <Router>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/hireperson" element={<Hireperson />} />
//           <Route path="/products/:category" element={<Products />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<RegisterPage />} />
//           <Route path="/sell" element={<Sell />} />
//           <Route path="/approval" element={<ApprovalDashboard />} />
//           <Route path="/employee/:id" element={<EmployeeInfo />} />
//           <Route path="/booking/:id" element={<BookingFormModal />} />

//         </Routes>
//         <Footer />
//       </Router>
//     </>
//   );
// };

// export default MainRoute;


import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import LoadingPage from "../pages/LoadingPage"; // ✅ new page

// Lazy loaded pages
const Home = lazy(() => import("../pages/Home"));
const HirePerson = lazy(() => import("../pages/Hireperson/Hireperson"));
const Products = lazy(() => import("../pages/Products"));
const Login = lazy(() => import("../pages/Login"));
const Sell = lazy(() => import("../pages/Sell"));
const RegisterPage = lazy(() => import("../pages/register/Register"));
const ApprovalDashboard = lazy(() => import("../pages/Hireperson/ApprovalDashboard"));
const EmployeeInfo = lazy(() => import("../pages/Hireperson/EmployeeInfo"));
const BookingFormModal = lazy(() => import("../pages/Hireperson/BookingFormModal"));
const NotFound = lazy(() => import("../pages/NotFound"));
const LinkPage = lazy(() => import("../pages/LinkPage"));
// const Hotels = lazy(() => import("../pages/Hotels"));
// const HotelDetail = lazy(() => import("../pages/HotelDetail"));

const appRoutes = [
  { path: "/", element: <Home /> },
  { path: "/hireperson", element: <HirePerson /> },
  { path: "/products/:category", element: <Products /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/sell", element: <Sell /> },
  { path: "/approval", element: <ApprovalDashboard /> },
  { path: "/employee/:id", element: <EmployeeInfo /> },
  { path: "/booking/:id", element: <BookingFormModal /> },
  { path: "/linkpage", element: <LinkPage /> },
  // { path: "/hotels", element: <Hotels /> },
  // { path: "//hotels/:id", element: <HotelDetail /> },
];

const MainRoute = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          {appRoutes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default MainRoute;
