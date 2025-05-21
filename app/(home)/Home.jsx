import DealsSection from "../(components)/DealsSection";
import Banner from "./Banner";


export default function Home1() {
  return (
    <>
      <Banner/>
      
      <DealsSection
        title="Top Deals Today"
        filter={{ isTopDeal: true }}
      />

      <DealsSection
        title="Recent Deals"
        filter={{ sort: "recent" }}
      />

      <DealsSection
        title="70%+ Off"
        filter={{ minDiscount: 70 }}
      />
    
    </>
  );
}