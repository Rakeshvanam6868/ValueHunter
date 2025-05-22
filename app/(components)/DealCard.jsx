import Image from "next/image";
import { MdUpdate } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { timeAgo } from "@/utils/timeAgo";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function DealCard({ deal }) {
  if (!deal) return null;

  const {
    name = "Untitled Deal",
    imageSrc = "/fallback-image.jpg",
    originalPrice = 0,
    discountedPrice = 0,
    discountPercentage = 0,
    createdAt,
  } = deal;

  return (
    <Card className="w-full  dark:from-[#232d32] dark:to-dark:bg-[#141a1d]  bg-gradient-to-br from-white to-gray-200 max-w-[330px] mx-auto shadow-md hover:shadow-lg transition-shadow">
      <CardHeader>
        <Image
          src={imageSrc}
          alt={name || "Deal Image"}
          width={300}
          height={300}
          className="object-contain rounded-xl w-full h-[220px]"
          onError={(e) => {
            e.target.src = "/fallback-image.jpg"; // Fallback on error
          }}
        />
      </CardHeader>
      <CardContent>
        <CardDescription className="font-medium text-lg truncate">{name}</CardDescription>
        <div className="flex justify-between mt-4">
          <div className="flex flex-col items-start">
            <p className="text-green-500 font-bold">₹{discountedPrice.toFixed(2)}</p>
            <p className="text-red-500 line-through">₹{originalPrice.toFixed(2)}</p>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-green-500 font-semibold">{discountPercentage}% OFF</p>
            <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
              <MdUpdate />
              <span>{timeAgo(createdAt)}</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {/* <Button variant="outline" size="sm" className="text-xs">
          PRICE HISTORY
        </Button> */}
        <Button  size="sm" className="text-xs w-full" asChild>
          <a href={deal.link} target="_blank" rel="noopener noreferrer">BUY</a>
        </Button>
      </CardFooter>
    </Card>
  );
}