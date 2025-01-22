import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HeroPage from "@/components/hero_page/HeroPage";
import Products from "@/components/products/Products";


export default function Home() {
  return (
    <div>
      <Header/>
      <HeroPage/>
      <Products/>
      <Footer/>
    </div>
    
  );
}
