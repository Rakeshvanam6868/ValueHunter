"use client"
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { MdUpdate } from "react-icons/md";
import { BackgroundGradient } from "@/components/ui/background-gradient"
import Image from "next/image"
import { dealsData } from "@/utils/data/TopTenDeals"

export default function TopTenDeals() {
    return (
        <>
            <div className="flex flex-col items-center justify-center mt-10">

                <BackgroundGradient className=" px-20 py-3 rounded-lg flex items-center justify-center overflow-hidden">
                    <h1 className="text-center text-white font-bold text-[20px]">TOP DEALS TODAY</h1>
                </BackgroundGradient>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
                    {
                        dealsData.map((item) => (
                            <Card key={item.id} className="w-[330px] ">
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
                                                <p className="text-[12px] "> {item.timeAgo}</p>
                                            </div>

                                        </div>
                                    </div>
                                </CardContent>

                                <CardFooter className="flex justify-between">
                                    <Button variant="outline">PRICE HISTORY</Button>
                                    <Button>BUY</Button>
                                </CardFooter>
                            </Card>
                        ))
                    }


                </div>

            </div>


        </>
    );
}
