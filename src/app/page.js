import DevComp from "@/components/development/DevComp";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HeroPage from "@/components/hero_page/HeroPage";
import ProductSlider from "@/components/product_slider/ProductSlider";

export default function Home() {
  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center">
      <div className="bg-white h-[735px] w-full xl:w-3/5 xl:px-2 xl:pt-0">
        <Header />
        <HeroPage />
        <ProductSlider />
        <Footer />
        <DevComp/>
      </div>
    </div>
  );
}
