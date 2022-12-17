import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  const path = router.pathname;

  const EmployeeSubpages = [
    {
      name: "all",
      route: "",
    },
    {
      name: "administrators",
      route: "/admin",
    },
  ];
  const TaskSubpages = [
    {
      name: "taskSubpage1",
      route: "",
    },
    {
      name: "taskSubpage2",
      route: "/tsp2",
    },
  ];

  let sideProps;
  let pageName;

  if (path.startsWith("/employee")) {
    sideProps = EmployeeSubpages;
    pageName = "/employee";
  } else if (path.startsWith("/task")) {
    sideProps = TaskSubpages;
    pageName = "/task";
  }

  return (
    <div className="">
      <Navbar />
      <div className="flex flex-row bg-pink-600">
        <Sidebar sideProps={sideProps} pageName={pageName} />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
