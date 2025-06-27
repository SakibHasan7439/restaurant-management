import BestDishes from "./components/BestDishes/BestDishes";
import CustomerReview from "./components/Customer-review/CustomerReview";
import Hero from "./components/Hero/Hero";
import Partners from "./components/Partners/Partners";
import RestaurantFooter from "./components/RestaurantFooter/RestaurantFooter";
import TeamMembers from "./components/Team-members/TeamMembers";

export default function Home() {
  return (
    <div>
        {/* Hero section*/}
        <Hero />
        <BestDishes />
        <CustomerReview />
        <TeamMembers />
        <Partners />
        <RestaurantFooter />
    </div>
  );
}
