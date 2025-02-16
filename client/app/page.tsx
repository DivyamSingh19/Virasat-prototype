import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <main className="relative flex flex-col items-center justify-center bg-white py-48 m-6 rounded-[4rem]">
        <h1 className="text-4xl text-black font-medium uppercase">VDT</h1>
        <h2 className="text-6xl text-black font-medium uppercase tracking-[0.2em]">Virasat</h2>
        <Link href="/login" className="absolute -bottom-16 w-36 h-36 grid place-items-center bg-black border-[16px] border-[#a8dfff] rounded-full">
          <span className="text-xl font-semibold">LOGIN</span>
        </Link>
      </main>
    </div>
  );
}
