import Header from "@/components/header/header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Header />
      
      <main className="relative flex flex-col items-center justify-center shadow-md  bg-white/10 py-48 m-6 rounded-[4rem]">
        <h1 className="text-4xl text-black font-medium uppercase">VDT</h1>
        <h2 className="text-6xl text-black font-medium uppercase tracking-[0.2em]">Virasat</h2>
        <Link href="/login" className="absolute -bottom-[4.5rem] w-36 h-36 grid place-items-center border-[16px] border-[#448aff] bg-white shadow-inner rounded-full">
          <span className="text-xl font-semibold">LOGIN</span>
        </Link>
      </main>

      {/* Vision Section */}
      <section className="grid grid-cols-2 mt-24 px-6 py-12">
        <div className="">
          <h3 className="text-7xl text-[#448aff] font-bold w-full max-w-xl">Empowering Future Innovators & Leaders</h3>
        </div>
        <div className="text-5xl">
          <div className="bg-white/5 rounded-3xl flex items-center justify-center py-32 shadow-xl uppercase font-bold">Vision</div>
        </div>
      </section>

      {/* About Us */}
      <section className="p-4">
        <h4>123</h4>
      </section>
    </div>
  );
}
