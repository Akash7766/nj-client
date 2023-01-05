import React from "react";
import { useLocation } from "react-router-dom";
import Blog from "../Blogs/Blog";
import Contacts from "../Contact/Contacts";

import MainContent from "../Content/MainContent";
import DashFooter from "../DashFooter/DashFooter";

import Header from "../Header/Header";
import Instagram from "../Instagram/Instagram";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import Orders from "../Order/Orders";
import Packages from "../Package/Packages";
import Projects from "../Projects/Projects";
import SideBar from "../SideBar/SideBar";

import Slider from "../Slider/Slider";
import User from "../User/User";

const DashBoardHome = () => {
  let location = useLocation();
  let CurrentComponent =
    location.pathname === "/dash-board/blog" ? (
      <Blog />
    ) : location.pathname === "/dash-board/project" ? (
      <Projects />
    ) : location.pathname === "/dash-board/contact" ? (
      <Contacts />
    ) : location.pathname === "/dash-board/instagram" ? (
      <Instagram />
    ) : location.pathname === "/dash-board/order" ? (
      <Orders />
    ) : location.pathname === "/dash-board/slider" ? (
      <Slider />
    ) : location.pathname === "/dash-board/user" ? (
      <User />
    ) : location.pathname === "/dash-board/package" ? (
      <Packages />
    ) : (
      <MainContent />
    );
  return (
    <div>
      <Header />
      <SideBar />

      <div className="main-content">
        <div className="page-content">{CurrentComponent}</div>
      </div>
      {/* <MainContent /> */}
      <DashFooter />
    </div>
  );
};

export default DashBoardHome;
