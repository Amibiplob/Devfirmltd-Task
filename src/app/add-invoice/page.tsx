import AddInvoice from '@/components/AddInvoice';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import React from 'react';

const page = () => {
    return (
      <div className="flex bg-slate-100 gap-7">
        <div className="basis-3/12">
          <Sidebar />
        </div>
        <div className="basis-full">
          <Navbar />
          <AddInvoice/>
        </div>
      </div>
    );
};

export default page;