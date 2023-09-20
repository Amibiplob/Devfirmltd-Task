import Link from "next/link";
import React from "react";
import FakeDataTable from "./FakeDataTable";
const Invoices = () => {
  return (
    <div>
      <div className="flex justify-between my-9">
        <div>
          <h1 className="text-2xl font-bold">Invoices</h1>
          <p className="opacity-60 mt-4">Invoices</p>
        </div>
        <Link
          href="/add-invoice"
          className="bg-Primary rounded-full py-4 px-14 text-black flex gap-2 items-center font-bold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9 h-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h1>Add Invoice</h1>
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="bg-white rounded-xl w-full">
          <thead>
            <tr className="">
              <th className="py-5"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-y opacity-80">
              <th className="py-4">Invoice No.</th>
              <th className="py-4">Trip</th>
              <th className="py-4">Inv. Date</th>
              <th className="py-4">Inv. Amount</th>
              <th className="py-4">Bal. Due</th>
              <th className="py-4">Payment Method</th>
              <th className="py-4">Due Date</th>
              <th className="py-4">Status</th>
              <th className="py-4">Action</th>
            </tr>
          </tbody>
     
       <FakeDataTable/>
        
        </table>
      </div>
    </div>
  );
};

export default Invoices;
