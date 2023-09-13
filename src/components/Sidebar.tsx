import React from "react";

const Sidebar = () => {
  const sidebarItems = [
    "Logo",
    "Dashboard",
    "Reservations",
    "trips",
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
    <div>
      {sidebarItems.map((item, i) => (
        <div key={i}>
          <h1 className="text-4xl">{item}</h1>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
