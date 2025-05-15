import DealsSection from "../(components)/DealsSection";


export default function Home1() {
  return (
    <>
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

      <DealsSection
        title="All Deals"
        filter={{}}
      />
    </>
  );
}