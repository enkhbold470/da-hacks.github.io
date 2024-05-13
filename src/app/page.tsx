import Navbar from "./components/navbar";
export default function Page() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-radial from-white to-blue-500 h-screen flex items-center justify-center">
        <h1 className="text-5xl font-bold text-black">Join De Anza Hacks</h1>
      </div>
    </>
  );
}
