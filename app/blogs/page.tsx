import BlogContent from "@/components/BlogPage/BlogContent";
import BlogHeader from "@/components/BlogPage/BlogHeader";
import Subscribe from "@/components/BlogPage/Subscribe";
import TopicSection from "@/components/BlogPage/TopicSection";

export default function Blog (){
 
  return (
      <>
        <BlogHeader/>
        <BlogContent />
        <TopicSection />
        <Subscribe />
      
      </>
  );
};