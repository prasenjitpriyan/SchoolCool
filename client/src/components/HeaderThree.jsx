import React from "react";

const HeaderThree = () => {
  return (
    <div className="navbar dark:bg-royalBlue">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-white dark:bg-royalBlue"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-white dark:bg-royalBlue gap-2"
          >
            <li>
              <a>Student Management</a>
            </li>
            <li>
              <a>Staff Management</a>
            </li>
            <li>
              <a>Course Scheduling</a>
            </li>
            <li>
              <a>Attendance Tracking</a>
            </li>
            <li>
              <a>Grade Management</a>
            </li>
            <li>
              <a>Parent Portal</a>
            </li>
            <li>
              <a>Communication Tools</a>
            </li>
            <li>
              <a>Resource Management</a>
            </li>
            <li>
              <a>Dashboard and Reporting</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Additional Features</a>
      </div>
    </div>
  );
};

export default HeaderThree;
