"use client";

import * as React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { MdUpdate } from "react-icons/md";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";
import { dealsData } from "@/utils/data/TopTenDeals";

export default function TopTenDeals() {
    return (
        <>
            <div className="flex flex-col items-center justify-center mt-10">
                <BackgroundGradient className="px-20 py-3 rounded-lg flex items-center justify-center overflow-hidden">
                    <h1 className="text-center text-white font-bold text-[20px]">TOP DEALS TODAY</h1>
                </BackgroundGradient>

                <div className="w-full max-w-6xl mt-10 px-4 ">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: false,
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {dealsData.map((item) => (
                                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/4 pl-4">
                                    <Card className="w-full dark:bg-[#141a1d] bg-[#e7dfea]  max-w-[330px] mx-auto">
                                        <CardHeader>
                                            <Image
                                                src={`${item.imageSrc}`}
                                                alt={`${item.name}`}
                                                height="300"
                                                width="300"
                                                className="object-contain rounded-lg"
                                            />
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription>{item.name}</CardDescription>
                                            <div className="flex justify-between mt-4">
                                                <div className="flex flex-col items-start">
                                                    <p className="text-green-500">₹{item.discountedPrice}</p>
                                                    <p className="text-red-500 line-through">{item.originalPrice}</p>
                                                </div>
                                                <div className="flex flex-col items-end">
                                                    <p className="text-green-500">{item.discountPercentage}% OFF</p>
                                                    <div className="flex items-center gap-1 mt-1">
                                                        <MdUpdate className="text-[12px]" />
                                                        <p className="text-[12px]">{item.timeAgo}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                        <CardFooter className="flex justify-between">
                                            <Button variant="outline">PRICE HISTORY</Button>
                                            <Button>BUY</Button>
                                        </CardFooter>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="dark:bg-[#141a1d] bg-[#e7dfea] hidden sm:flex  " />
                        <CarouselNext className="dark:bg-[#141a1d] bg-[#e7dfea] hidden sm:flex " />
                    </Carousel>
                </div>  
            </div>
        </>
    );
}