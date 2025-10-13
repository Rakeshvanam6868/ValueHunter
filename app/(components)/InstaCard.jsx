// components/InstaCard.jsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useEffect, useState } from "react";

// Helper to validate URL is an image
function isValidImageUrl(url) {
  if (!url) return false;
  return /\.(jpeg|jpg|gif|png|webp)$/i.test(url);
}

export default function InstaCard({ deal }) {
  const [imgSrc, setImgSrc] = useState(deal?.image || "/fallback-image.jpg");
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(deal?.image || "/fallback-image.jpg");
    setHasError(false);
  }, [deal]);

  const handleError = () => {
    if (!hasError && !imgSrc.endsWith("fallback-image.jpg")) {
      setImgSrc("/fallback-image.jpg");
      setHasError(true);
    }
  };

  if (!deal) return null;

  const { title = "Untitled Deal", image = "/fallback-image.jpg", link = "#" } = deal;

  return (
    <Card className="w-full max-w-sm mx-auto 
      bg-zinc-200 dark:bg-zinc-800 backdrop-blur-md 
      rounded-xl shadow-lg border border-white/20 dark:border-gray-700/30 
      overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      
      {/* Image Section */}
      <div className="relative h-48 md:h-56 w-full bg-gradient-to-br from-white/10 to-transparent dark:from-gray-800/10">
        {isValidImageUrl(imgSrc) ? (
          <Image
            src={imgSrc}
            alt={name || "Deal"}
            fill
            sizes="(max-width: 320px) 100vw, 320px"
            className="object-cover p-3 rounded-2xl"
            onError={handleError}
          />
        ) : (
          <div className="h-full w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400 text-sm">No Image</span>
          </div>
        )}
      </div>

      {/* Title Section */}
      <CardHeader className="p-4 text-center">
        <CardDescription className="font-semibold text-gray-800 dark:text-gray-100 text-lg line-clamp-2 leading-tight min-h-[2.5rem]">
          {title}
        </CardDescription>
      </CardHeader>

      {/* Buy Button */}
      <CardFooter className="p-4 pt-0 mt-auto">
        <Button asChild className="w-full py-2 text-sm font-medium 
          bg-green-300 hover:bg-green-400 dark:bg-green-500 dark:hover:bg-green-600 
          text-white backdrop-blur-sm rounded-lg transition-all duration-300 hover:shadow-inner">
          <a href={link} target="_blank" rel="noopener noreferrer">
            Buy Now
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}