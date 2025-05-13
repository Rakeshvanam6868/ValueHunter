import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";
import Header from "./(home)/Header";
import TopTenDeals from "./(home)/TopTenDeals";

export default function Home() {
  return (
   <> 
     <Header/>
     <TopTenDeals/>
   </>
  );
}
