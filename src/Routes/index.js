import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import DashboardArrivalsPage from "../pages/admin/DashboardArrivalsPage";
import DashboardBannerPage from "../pages/admin/DashboardBannerPage";
import DashboardGalleryPage from "../pages/admin/DashboardGalleryPage";
import DashboardPage from "../pages/admin/DashboardPage";
import DashboardProduct from "../pages/admin/DashboardProduct";
import CareerPage from "../pages/CareerPage";
import CartPage from "../pages/CartPage";
import ContactPage from "../pages/ContactPage";
import DealershipPage from "../pages/DealershipPage";
import GalleryPage from "../pages/GalleryPage";
import HomePage from "../pages/HomePage";
import JobDetailsPage from "../pages/JobDetailsPage";
import LoginPage from "../pages/LoginPage";
import NewsPage from "../pages/NewsPage";
import NotFoundPage from "../pages/NotFoundPage";
import OrderPage from "../pages/OrderPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ProductsPage from "../pages/ProductsPage";
import RegisterPage from "../pages/RegisterPage";
import TireCategoriesPage from "../pages/TireCategoriesPage";

function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:slug" element={<ProductDetailPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/dealer" element={<DealershipPage />} />
        <Route path="/tire/:slug" element={<TireCategoriesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/jobs/:slug" element={<JobDetailsPage />} />

        {/* Admin Route */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/products" element={<DashboardProduct />} />
        <Route path="/dashboard/gallery" element={<DashboardGalleryPage />} />
        <Route path="/dashboard/arrivals" element={<DashboardArrivalsPage />} />
        <Route path="/dashboard/banner" element={<DashboardBannerPage />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default index;
