import HeroComp from "@/components/app/home/hero-comp";
import ProductShow from "@/components/app/home/product-show";
import Products from "@/components/app/home/products";

const Index = () => {
  return (
    <div className="mt-[-64px]">
      <HeroComp />
      <ProductShow />
      <Products />
    </div>
  );
};

export default Index;
