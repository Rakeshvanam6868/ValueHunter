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
    <Card className="w-full max-w-sm mx-auto 
      bg-white/10 dark:bg-gray-900/20 backdrop-blur-md 
      rounded-xl shadow-lg border border-white/20 dark:border-gray-700/30 
      overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      
      {/* Image Section */}
      <div className="relative h-48 md:h-56 w-full bg-gradient-to-br from-white/10 to-transparent dark:from-gray-800/10">
        <Image
          src={imageSrc}
          alt={name || "Deal"}
          fill
          sizes="(max-width: 320px) 100vw, 320px"
          className="object-cover"
          onError={(e) => (e.target.src = "/fallback-image.jpg")}
        />
        {/* Discount Badge */}
        <div className="absolute top-2 left-2 px-2.5 py-1 text-xs font-bold text-white 
          bg-green-500/90 backdrop-blur-sm rounded-md shadow-md">
          {discountPercentage}% OFF
        </div>
      </div>

      {/* Title Section */}
      <CardHeader className="p-4">
        <CardDescription className="font-semibold text-gray-800 dark:text-gray-100 text-lg line-clamp-2 leading-tight min-h-[2.5rem]">
          {name}
        </CardDescription>
      </CardHeader>

      {/* Price & Time Info */}
      <CardContent className="p-4 pt-0">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-green-600 dark:text-green-400 font-bold text-xl">₹{discountedPrice.toFixed(2)}</p>
            <p className="text-gray-500 dark:text-gray-400 line-through text-sm mt-1">
              ₹{originalPrice.toFixed(2)}
            </p>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
            <MdUpdate size={14} />
            <span>{timeAgo(createdAt)}</span>
          </div>
        </div>
      </CardContent>

      {/* Buy Button */}
      <CardFooter className="p-4 pt-0 mt-auto">
        <Button asChild className="w-full py-2 text-sm font-medium 
          bg-white/20 hover:bg-white/30 dark:bg-gray-800/30 dark:hover:bg-gray-800/50 
          text-white backdrop-blur-sm rounded-lg transition-all duration-300 hover:shadow-inner">
          <a href={deal.link} target="_blank" rel="noopener noreferrer">
            Buy Now
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}