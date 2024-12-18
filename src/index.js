import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Contact from "./components/Contact/Contact";
import Blog from "./components/Blog/Blog";
import Main from "./components/Main/Main";
import { Route } from "react-router-dom";
import FAQ from "./components/FAQ/FAQ";
import LoginRegister from "./components/LoginRegister/LoginRegister";
import Career from "./components/career/career";
import Shop from "./components/shop/shop";
import AboutUs from "./components/Aboutus/About_us";
import OrderTracking from "./components/Order Tracking/OrderTracking";
import Wish from "./components/wishlist/wishlist";
import Brand from "./components/brand/brand";
import AdminPanel from "./components/Admin/Admin";
import CreateProduct from "./components/CreateProduct/createProduct";
import CreateBlog from "./components/CreateBlog/createBlog";
import GetContact from "./components/Contact/getcontact";
import AddSlide from "./components/Add-slide/Addslide";

/*const router1 = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/admin" element={<AdminPanel />}>
      <Route path="create-product" element={<CreateProduct />} />
      <Route path="create-blog" element={<CreateBlog />} />
      <Route path="create-contact" element={<CreateContact />} />
    </Route>
  )
);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="main" element={<Main />} />
      <Route path="blog" element={<Blog />} />
      <Route path="contact" element={<Contact />} />
      <Route path="career" element={<Career />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="LoginRegister" element={<LoginRegister />} />
      <Route path="Shop" element={<Shop />} />
      <Route path="OrderTracking" element={<OrderTracking />} />
      <Route path="AboutUs" element={<AboutUs />} />
      <Route path="Wish" element={<Wish />} />
      <Route path="Brand" element={<Brand />} />
    </Route>
  )
);

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <RouterProvider router={router1} />
  </React.StrictMode>
);*/
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Main App Routes */}
      <Route path="/" element={<App />}>
        <Route index element={<Main />} />
        <Route path="Main" element={<Main />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="career" element={<Career />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="LoginRegister" element={<LoginRegister />} />
        <Route path="Shop" element={<Shop />} />
        <Route path="OrderTracking" element={<OrderTracking />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="Wish" element={<Wish />} />
        <Route path="Brand" element={<Brand />} />
      </Route>

      {/* Admin Panel Routes */}
      <Route path="/admin" element={<AdminPanel />}>
        <Route path="/admin/create-product" element={<CreateProduct />} />
        <Route path="/admin/create-blog" element={<CreateBlog />} />
        <Route path="/admin/getallcontacts" element={<GetContact />} />
        <Route path="/admin/add-slide" element={<AddSlide />} />
      </Route>
    </>
  )
);

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
