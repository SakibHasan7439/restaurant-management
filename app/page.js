import BestDishes from "./components/BestDishes/BestDishes";
import CustomerReview from "./components/Customer-review/CustomerReview";
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <div>
        {/* Hero section*/}
        <Hero />
        <BestDishes />
        <CustomerReview />
    </div>
  );
}
