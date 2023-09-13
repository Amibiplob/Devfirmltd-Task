import Invoices from "@/components/Invoices";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="flex bg-slate-100 gap-7">
      <div className="basis-3/12">
        <Sidebar />
      </div>
      <div className="basis-full">
        <Navbar />
        <Invoices />
      </div>
    </main>
  );
}
