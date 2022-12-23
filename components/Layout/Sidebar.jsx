import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Sidebar = ({ sideProps, pageName }) => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <div className="flex flex-col">
      {sideProps?.map((el) => (
        <div key={Math.random().toString()}>
          <Link
            href={`${pageName + el.route}`}
            className={
              path === `${pageName + el.route}`
                ? "bg-light-primary w-full inline-block px-4 py-1"
                : "w-full inline-block px-4 py-1"
            }
          >
            {el.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
