const categories = [
  {
    name: "Electronics",
    image:
      "https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg",
  },
  {
    name: "Fashion",
    image:
      "https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg",
  },
  {
    name: "Home & Kitchen",
    image:
      "https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg",
  },
  {
    name: "Beauty",
    image:
      "https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg",
  },
  {
    name: "Sports",
    image:
      "https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg",
  },
];

export default function Categories() {
  return (
    <div className="container mx-auto py-10 mt-10">
      <h2 className="text-3xl font-bold text-center text-primary-color mb-6">
        Shop by Category
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="group cursor-pointer text-center">
            <div className="relative w-full h-40 overflow-hidden rounded-lg shadow-lg">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <p className="mt-3 text-lg font-semibold text-gray-800 group-hover:text-primary-color">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
