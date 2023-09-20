import React from "react";

const Sidebar = () => {
  const sidebarItems = [
    { name: "Dashboard" },
    { name: "Reservations" },
    { name: "Trips" },
    {
      name: "Invoices",
      className:
        "flex items-center p-5 lg:p-9 rounded-l-full lg:self-end text-white opacity-70 lg:w-3/4 h-14 bg-indigo-500",
    },
    { name: "Planes" },
    { name: "Amenities" },
    { name: "Contacts" },
    { name: "Team" },
    { name: "Crew Members" },
    { name: "Files" },
    { name: "Messages" },
    { name: "Calender" },
    { name: "Setting" },
    { name: "Logout" },
  ];
  return (
    <div className="flex flex-col gap-1 bg-Primary text-black  items-stretch text-left py-12 rounded-3xl">
      <h1 className="self-center text-4xl mb-10">Logo</h1>
      {sidebarItems.map(({ name, className }, index) => (
        <h1
          key={index}
          className={
            className
              ? className
              : "flex items-center p-5 lg:p-9 rounded-l-full lg:self-end  opacity-70 lg:w-3/4 h-14 hover:bg-lime-200"
          }
        >
          {name}
        </h1>
      ))}
    </div>
  );
};

export default Sidebar;
