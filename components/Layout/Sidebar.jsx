import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Sidebar = ({ sideProps, pageName }) => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <div className="flex flex-col bg-green-600">
      {sideProps?.map((el) => (
        <div key={Math.random().toString()}>
          <Link
            href={`${pageName + el.route}`}
            className={path === `${pageName + el.route}` ? "underline" : null}
          >
            {el.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
