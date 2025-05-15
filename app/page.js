import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";
import Header from "./(home)/Header";
import TopTenDeals from "./(home)/TopTenDeals";
import Home1 from "./(home)/Home";

export default function Home() {
  return (
   <> 
     <Header/>
     <TopTenDeals/>
     <Home1/>
   </>
  );
}
