import BestDishes from "./components/BestDishes/BestDishes";
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <div>
        {/* Hero section*/}
        <Hero />
        <BestDishes />
    </div>
  );
}
