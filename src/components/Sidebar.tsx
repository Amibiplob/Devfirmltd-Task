import React from "react";

const Sidebar = () => {
  const sidebarItems = [
    "Dashboard",
    "Reservations",
    "Trips",
    "Invoices",
    "Planes",
    "Amenities",
    "Contacts",
    "Team",
    "Crew Members",
    "Files",
    "Messages",
    "Calender",
    "Setting",
    "Logout",
  ];
  return (
    <div className="flex flex-col bg-indigo-600 items-stretch text-left py-12">
      <h1 className="self-center text-4xl text-white opacity-70 mb-10">Logo</h1>
      {sidebarItems.map((item, i) => (
        <h1
          key={i}
          className="flex items-center pl-10 rounded-l-full self-end text-white opacity-70 w-3/4 h-14 hover:bg-indigo-400"
        >
          {item}
        </h1>
      ))}
    </div>
  );
};

export default Sidebar;
