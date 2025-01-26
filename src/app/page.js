import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HeroPage from "@/components/hero_page/HeroPage";
import ProductSlider from "@/components/product_slider/ProductSlider";

export default function Home() {
  return (
    <div>
      <Header/>
      <HeroPage/>
      <ProductSlider/>
      <Footer/>
    </div>
    
  );
}
