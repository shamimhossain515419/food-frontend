import Link from "next/link";

export default function Banner() {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://t3.ftcdn.net/jpg/02/72/24/76/360_F_272247623_GmzIc6nAHj7OAFlIRxVdiNkaRoGT3ZsA.jpg')",
      }}
      className="relative w-full h-[500px] bg-cover bg-center  flex items-center justify-start text-center"
    >
      <div className=" bg-opacity-50 p-6 rounded-lg ">
        <h1 className="text-4xl md:text-6xl font-bold">
          Biggest Sale of the Year!
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Get up to 50% off on all products. Limited time offer!
        </p>
        <Link
          href="/shop"
          className="mt-6 inline-block bg-primary-color text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}
