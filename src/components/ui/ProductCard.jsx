"sue client";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ card }) => {
  return (
    <div className="shadowbox rounded p-2 cursor-pointer">
      <div>
        <Link href={`/product/${card?.id}`} className="h-[240px] w-full">
          <Image
            className="w-full h-[250px] object-contain"
            src={
              process.env.NEXT_PUBLIC_IMAGE_API_URL + "/storage/" + card?.photo
            }
            alt={card.name}
            width={250}
            height={250}
          />
        </Link>
        <div>
          <h1 className="text-base md:text-xl font-semibold uppercase mt-5">
            {card.name.length > 12 ? `${card.name.slice(0, 12)}..` : card.name}
          </h1>
          <h2 className="text-base md:text-lg font-thin my-2">
            {card.description.slice(0, 22)}...
          </h2>
          <h1 className="text-lg md:text-2xl font-semibold">৳ {card.price}</h1>
          <div className="flex gap-2 items-center justify-between my-2">
            <Link
              href={`/product/${card?.id}`}
              className="bg-[#18604a] text-center w-full text-white hover:bg-[#518607] duration-300 px-8 py-2 cursor-pointer rounded-md"
            >
              <h1 className="text-white uppercase text-base md:text-md font-semibold">
                Add to Cart
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
