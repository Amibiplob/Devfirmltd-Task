"use client";

const InvoicePrint = () => {
  const print = () => {
    window.print();
  };
  return (
    <button
      onClick={print}
      className="bg-Primary px-16 py-3 rounded-full text-black"
    >
      Download Invoice
    </button>
  );
};

export default InvoicePrint;
