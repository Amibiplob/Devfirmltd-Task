import Invoices from "@/components/Invoices";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="flex">
      <div className="basis-3/12">
        <Sidebar />
      </div>
      <div>
        <Invoices />
      </div>
    </main>
  );
}
