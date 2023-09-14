'use client'

const InvoicePrint = () => {
     const print = () => {
         window.print();
         console.log(window)
     };
    return (
      <button
        onClick={print}
        className="bg-indigo-600 px-16 py-3 rounded-full text-white"
      >
        Download Invoice
      </button>
    );
};

export default InvoicePrint;