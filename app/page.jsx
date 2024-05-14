import Link from "next/link";

const HomePage = () => {
  return (
    <div className="bg-indigo-600 w-full h-screen">
      <h1 className="text-3xl">Welcome</h1>
      <Link href="/properties">Show Properties</Link>
    </div>
  );
};
export default HomePage;
