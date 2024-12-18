import React from "react";
import { Link, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Admin.css";

const AdminPanel = () => {
  return (
    <div className="admin-panel-container">
      <h2>Admin Panel</h2>
      <nav className="nav nav-pills flex-column flex-sm-row mb-4">
        <Link
          to="/admin/create-product"
          className="flex-sm-fill text-sm-center nav-link"
        >
          Create Product
        </Link>
        <Link
          to="/admin/create-blog"
          className="flex-sm-fill text-sm-center nav-link"
        >
          Create Blog
        </Link>
        <Link
          to="/admin/getallcontacts"
          className="flex-sm-fill text-sm-center nav-link"
        >
          Get Contact Messages
        </Link>
        <Link
          to="/admin/add-slide"
          className="flex-sm-fill text-sm-center nav-link"
        >
          Add Slides
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default AdminPanel;
