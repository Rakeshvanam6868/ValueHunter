import { Hero } from "@/components/HomePage/Hero";
import DealsSection from "../(components)/DealsSection";
import Banner from "./Banner";
import HotDeals from "@/components/HomePage/HotDeals";
import Category from "@/components/HomePage/Category";
import RecentDeals from "@/components/HomePage/RecentDeals";
import Blog from "@/components/HomePage/Blog";
import Trust from "@/components/HomePage/Trust";
import { NewsLetter } from "@/components/HomePage/NewsLetter";


export default function Home1() {
  return (
   <>
   
      
      <Hero/>
      <HotDeals/>
      <Category/>
      <RecentDeals/>
      <Blog/>
      <Trust/>
      <NewsLetter/>
      <Banner/>
    
    </>
  );
}