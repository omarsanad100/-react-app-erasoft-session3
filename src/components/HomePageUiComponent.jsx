import ProductCard from "../pages/ProductCard";

const HomePageUiComponent = ({ products }) => {
  return (
    <div className="bg-[#f3f6fd] min-h-screen p-4 sm:p-8">
      <section className="flex flex-col gap-5 mb-8 px-4 sm:px-8">
        <p className="text-red-500 font-medium mb-1">Our products</p>
        <h1 className="text-2xl font-semibold mb-6">Explore Our Products</h1>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {products.map(({ id, image, title, price }) => (
          <ProductCard key={id} image={image} title={title} price={price} />
        ))}
      </div>
    </div>
  );
};

export default HomePageUiComponent;
