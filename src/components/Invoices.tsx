import { headers } from "next/dist/client/components/headers";
import Link from "next/link";
import React from "react";
const Invoices = async () => {
  const host = headers().get("host");
  const protocal = process?.env.NODE_ENV === "development" ? "http" : "https";
  const data = await fetch(`${protocal}://${host}/submit-form`);
  const fakeData = await data.json();
  // console.log(fakeData);
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
          <tbody className="">
            {fakeData.map((data: any, i: number) => (
              <tr key={i} className="hover:bg-gray-100 text-center">
                <td className="py-3 opacity-60">
                  <span>{data.InvoiceNo}</span>
                </td>
                <td className="py-3 opacity-60">
                  <span>{data.Trip}</span>
                </td>
                <td className="py-3 opacity-60">
                  <span>{data.InvDate}</span>
                </td>
                <td className="py-3 opacity-60">
                  <span>{data.InvAmount}</span>
                </td>
                <td className="py-3 opacity-60">
                  <span>{data.BalDue}</span>
                </td>
                <td className="py-3 opacity-60">
                  <span>{data.PaymentMethod}</span>
                </td>
                <td className="py-3 opacity-60">
                  <span>{data.DueDate}</span>
                </td>
                {data.Status == "Cancelled" && (
                  <td className="py-3">
                    <h1 className="bg-blue-100 text-blue-500 py-1 rounded-full">
                      {data.Status}
                    </h1>
                  </td>
                )}
                {data.Status == "Paid" && (
                  <td className="py-3">
                    <h1 className="bg-green-100 text-green-500 py-1 rounded-full">
                      {data.Status}
                    </h1>
                  </td>
                )}
                {data.Status == "Unpaid" && (
                  <td className="py-3">
                    <h1 className="bg-red-100 text-red-500 py-1 rounded-full">
                      {data.Status}
                    </h1>
                  </td>
                )}
                <td className="py-3 flex gap-4 justify-center">
                  <button className="bg-indigo-100 p-2 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                      <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                    </svg>
                  </button>
                  <button className="bg-red-100 p-2 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-red-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Invoices;
