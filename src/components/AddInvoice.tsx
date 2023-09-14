import React from "react";

const AddInvoice = () => {
  return (
    <div>
      <div className="my-9">
        <h1 className="text-2xl font-bold">Invoices</h1>
        <p className="opacity-60 mt-4">Invoices / New Invoice</p>
      </div>
      <div className="grid grid-cols-4 gap-x-6 px-7 py-9 rounded-xl bg-white ">
        <div className="col-span-2">
          <label className="font-bold">Select</label>
          <select className="w-full px-4 py-5 mt-5 rounded-full border-2 border-black opacity-40">
            <option value="" selected disabled>
              Select Client
            </option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
          </select>
        </div>
        <div>
          <label className="font-bold">Invoice Date</label>
          <input
            type="date"
            className="w-full px-4 py-5 mt-5 rounded-full border-2 border-black opacity-40"
          />
        </div>
        <div>
          <label className="font-bold">Plane Image</label>
          <div className="flex justify-center items-center mt-5 border-2 border-black border-dashed rounded-md h-32">
            <label htmlFor="upload" className="flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                />
              </svg>

              <p>Upload Plane Image</p>
            </label>
            <input hidden type="file" id="upload" />
          </div>
        </div>
        <div>
          <label className="font-bold">Trip</label>
          <select className="w-full px-4 py-5 mt-5 rounded-full border-2 border-black opacity-40">
            <option value="" selected disabled>
              Select Trip
            </option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>
      <div className="bg-white mt-5 py-9">
        <div className="grid grid-cols-3 gap-x-40 mb-3 px-7">
          <div className="grid grid-cols-3 gap-6 col-span-2 font-bold">
            <h1>Product Type</h1>
            <h1>Product</h1>
            <h1>Description</h1>
          </div>
          <h1>Total</h1>
        </div>
        <hr />
        <div className="grid grid-cols-3 gap-x-40 mb-3 px-7">
          <div className="grid grid-cols-3 gap-6 col-span-2 font-bold">
            <div className="">
              <select className="w-full px-4 py-5 mt-5 rounded-xl border-2 border-black opacity-40">
                <option value="" selected disabled>
                  Select Client
                </option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
              </select>
            </div>
            <div className="">
              <select className="w-full px-4 py-5 mt-5 rounded-xl border-2 border-black opacity-40">
                <option value="" selected disabled>
                  Select Client
                </option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
              </select>
            </div>
            <div className="">
              <input
                className="w-full px-4 py-5 mt-5 rounded-xl border-2 border-black opacity-40"
                type="text"
              />
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <input
              className="w-full px-4 py-5 mt-5 rounded-xl border-2 border-black opacity-40"
              type="text"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-16 h-16 text-red-500 bg-red-100 rounded-lg p-1 mt-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </div>
        </div>
        <div className="flex gap-1 text-indigo-600 font-bold px-7 mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>

          <h1>Add Product</h1>
        </div>
        <hr />
        <div className="flex flex-col items-end gap-5 font-bold my-6 mr-20">
          <div className="flex w-52 text-right">
            <h1 className="w-1/2 opacity-80">Subtotal :</h1>
            <h1 className="w-1/2 opacity-50">00000000</h1>
          </div>
          <div className="flex w-52 text-right">
            <h1 className="w-1/2 opacity-80">TVA :</h1>
            <h1 className="w-1/2 opacity-50">00000</h1>
          </div>
        </div>
        <hr />
        <div className="flex justify-between gap-5 items-center mb-3 pl-7 mr-20 my-9">
          <div className="flex justify-between gap-6 font-bold w-1/2">
            <button className="bg-indigo-600 px-14 py-5 rounded-full text-white">Save</button>
            <button className="text-black opacity-70 border-2 px-14 py-5 rounded-full">Cancel</button>
            <button className="bg-indigo-600 px-14 py-5 rounded-full text-white">Download Invoice</button>
          </div>
          <div className="flex w-52 text-right font-bold text-indigo-600">
            <h1 className="w-1/2">Total :</h1>
            <h1 className="w-1/2">00000</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddInvoice;
