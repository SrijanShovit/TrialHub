import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  const path = router.pathname;

  const EmployeeSubpages = [
    {
      name: "All",
      route: "",
    },
    {
      name: "Administrators",
      route: "/admin",
    },
  ];
  const TaskSubpages = [
    {
      name: "Task Page",
      route: "",
    },
    {
      name: "TaskSubpage1",
      route: "/tsp1",
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
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-row flex-1">
        <Sidebar sideProps={sideProps} pageName={pageName} />
        <main className="w-full">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
