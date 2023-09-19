"use client";
import React, { useState } from "react";
import InvoicePrint from "./InvoicePrint";
import UploadImage from "./UploadImage";
import Link from "next/link";
import Product from "@/components/Product";
import { headers } from "next/dist/client/components/headers";

const AddInvoice = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const currentDate = `${year}-${"0" + month}-${day}`;
  const AllProduct = Product;
  const [productType, setProductType] = useState<any>([]);
  const [showDescription, setShowDescription] = useState<any>([]);
  const [showPrice, setShowPrice] = useState<any>([]);
  const [subtotal, setSubtotal] = useState<any>(0);
  const AddProduct = (
    <>
      <div className="grid grid-cols-3 gap-x-40 mb-3 px-7">
        <div className="grid grid-cols-3 gap-6 col-span-2 font-bold">
          <div className="">
            <select
              onChange={(e) => selectProduct(e)}
              defaultValue={"default"}
              className="w-full px-4 py-4 mt-5 rounded-xl border-2 border-black opacity-40"
            >
              <option value="default" disabled>
                Select Product Type
              </option>
              {AllProduct.map(({ name }) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className="">
            <select
              onChange={(e) => productDescription(e)}
              defaultValue={"default"}
              className="w-full px-4 py-4 mt-5 rounded-xl border-2 border-black opacity-40"
            >
              <option value="default" disabled>
                Select Product
              </option>
              {productType.map(({ name }: any, index: any) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className="">
            <input
              readOnly
              defaultValue={showDescription}
              className="w-full px-4 py-4 mt-5 rounded-xl border-2 border-black opacity-40"
              type="text"
            />
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <input
            readOnly
            defaultValue={showPrice}
            className="w-full px-4 py-5 mt-5 rounded-xl border-2 border-black opacity-40"
            type="text"
          />
          <button onClick={() => setCount(count.slice(0, -1))}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-14 h-14 text-red-500 bg-red-100 rounded-lg p-3 mt-5"
            >
              <path
                fillRule="evenodd"
                d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
  const [count, setCount] = useState<any>([1]);
  const ProductCount = (num: any) => {
    let array = [...count, num];
    setCount(array);
  };

  const selectProduct = (e: any) => {
    AllProduct.map(({ name, type }) => {
      if (e.target.value == name) {
        setProductType(type);
      }
    });
  };
  const productDescription = (e: any) => {
    productType.map(({ name, description, price }: any) => {
      if (e.target.value == name) {
        setShowDescription(description);
        setShowPrice(price);
        setSubtotal(subtotal + price);
      }
    });
  };
  const [invoiceNo, setInvoiceNo] = useState<any>("");
  let [invoiceDate, setInvoiceDate] = useState<any>("");
  const [tripNo, setTripNo] = useState<any>("");

  const AddInvoices = async () => {
    if (invoiceDate == "") {
      invoiceDate = currentDate;
    }
    if (invoiceNo && invoiceDate && tripNo && subtotal) {
      let data = {
        InvoiceNo: invoiceNo,
        Trip: tripNo,
        InvDate: invoiceDate,
        InvAmount: subtotal + subtotal / 10,
        BalDue: subtotal + subtotal / 10,
        PaymentMethod: "jcb",
        DueDate: invoiceDate,
        Status: "Paid",
      };

      let response = await fetch(`${window.location.origin}/submit-form`, {
        method: "POST",
        body: JSON.stringify({ data }),
      });
      response = await response.json();
    window.alert(response)
    }
  };

  return (
    <div>
      <div className="my-6">
        <h1 className="text-2xl font-bold">Invoices</h1>
        <p className="opacity-60 mt-4">Invoices / New Invoice</p>
      </div>
      <div className="flex justify-between rounded-xl bg-white px-7 py-9">
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <label className="font-bold">Select</label>
            <select
              onChange={(e) => setInvoiceNo(e.target.value)}
              defaultValue={"default"}
              className="w-full px-4 py-4 mt-5 rounded-full border-2 border-black opacity-40"
            >
              <option value="default" disabled>
                Select Client
              </option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
            </select>
          </div>
          <div>
            <label className="font-bold">Invoice Date</label>
            <input
              onChange={(e) => setInvoiceDate(e.target.value)}
              type="date"
              defaultValue={currentDate}
              className="w-full px-4 py-4 mt-5 rounded-full border-2 border-black opacity-40"
            />
          </div>

          <div>
            <label className="font-bold">Trip</label>
            <select
              onChange={(e) => setTripNo(e.target.value)}
              defaultValue={"default"}
              className="w-full px-4 py-4 mt-5 rounded-full border-2 border-black opacity-40"
            >
              <option value="default" disabled>
                Select Trip
              </option>
              <option value="T10">T10</option>
              <option value="T20">T20</option>
              <option value="T30">T30</option>
              <option value="T40">T40</option>
              <option value="T50">T50</option>
              <option value="T60">T60</option>
              <option value="T70">T70</option>
              <option value="T80">T80</option>
              <option value="T90">T90</option>
              <option value="T100">T100</option>
            </select>
          </div>
        </div>
        <UploadImage />
      </div>

      <div className="bg-white my-5 py-9 rounded-xl">
        <div className="grid grid-cols-3 gap-x-40 mb-3 px-7">
          <div className="grid grid-cols-3 gap-6 col-span-2 font-bold">
            <h1>Product Type</h1>
            <h1>Product</h1>
            <h1>Description</h1>
          </div>
          <h1>Total</h1>
        </div>
        <hr />
        {count.map((index: any) => (
          <div key={index}>{AddProduct}</div>
        ))}
        <button
          onClick={() => ProductCount(count.length + 1)}
          className="flex gap-1 text-Primary hover:bg-indigo-50 font-bold px-7 mb-5"
        >
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
        </button>
        <hr />
        <div className="flex flex-col items-end gap-5 font-bold my-6 mr-20">
          <div className="flex w-52 text-right">
            <h1 className="w-1/2 opacity-80">Subtotal :</h1>
            <h1 className="w-1/2 opacity-50">{subtotal}</h1>
          </div>
          <div className="flex w-52 text-right">
            <h1 className="w-1/2 opacity-80">TVA :</h1>
            <h1 className="w-1/2 opacity-50">{subtotal / 10}</h1>
          </div>
        </div>
        <hr />
        <div className="flex justify-between gap-5 items-center mb-3 pl-7 mr-20 my-9">
          <div className="flex justify-between gap-6 font-bold w-1/2">
            <Link href='/'
              onClick={AddInvoices}
              className="bg-Primary px-14 py-6 rounded-full text-white"
            >
              Save
            </Link>
            <Link
              href="/"
              className="text-black opacity-70 border-2 px-14 py-6 rounded-full"
            >
              Cancel
            </Link>
            <InvoicePrint />
          </div>
          <div className="flex w-52 text-right font-bold text-Primary">
            <h1 className="w-1/2">Total :</h1>
            <h1 className="w-1/2">{subtotal + subtotal / 10}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddInvoice;
