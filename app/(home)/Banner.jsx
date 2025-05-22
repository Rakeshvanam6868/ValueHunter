"use client"; // Required because Swiper is interactive

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Button } from "@/components/ui/button"; // ShadCN button example
import { Card, CardContent } from "@/components/ui/card"; // ShadCN card
import { Mail, MessageSquare } from "lucide-react"; // Icons

import 'swiper/css';
import 'swiper/css/autoplay';

export default function Banner() {
  return (
    <div className="flex items-center justify-center py-6">
      <div className="grid w-[95%] sm:w-[95%] md:w-[75%] lg:w-[75%] xl:w-[75%] sm:grid-cols-1 md:grid-cols-[70%_30%] lg:grid-cols-[70%_30%] xl:grid-cols-[70%_30%] gap-6">
        
        {/* Left Column - Swiper Carousel */}
        <div className="relative overflow-hidden rounded-xl">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="h-[220px] rounded-xl"
          >
            <SwiperSlide>
              <Image
                src="https://m.media-amazon.com/images/W/MEDIAX_1215821-T1/images/G/31/IMG25/Sports/May/IPL/Pc_header_-_IPL_store_2025_1.jpg "
                alt="Banner 1"
                width={1200}
                height={220}
                className="object-cover w-full h-full rounded-xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/e90e5b12078221ec.jpg?q=20"
                alt="Banner 2"
                width={1200}
                height={220}
                className="object-cover w-full h-full rounded-xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/1a15670517c596d3.jpeg?q=20"
                alt="Banner 3"
                width={1200}
                height={220}
                className="object-cover w-full h-full rounded-xl"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Right Column - Call to Action */}
        <Card className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-black shadow-md h-[220px] flex items-center justify-center p-4">
          <CardContent className="p-0 text-center">
            <h2 className="text-xl font-bold mb-2">Join Our Telegram Channel</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Get exclusive deals and updates first!
            </p>
            <a href="https://t.me/ValueHunterDeals" target="_blank" rel="noopener noreferrer">
            <Button  className="w-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center gap-2 ">
              <MessageSquare size={18} />
              Join Telegram
            </Button>
            </a>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}