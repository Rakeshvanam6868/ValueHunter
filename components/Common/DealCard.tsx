// components/Common/DealCard.tsx
import Link from 'next/link';
import { ExternalLink, ThumbsUp, Clock } from 'lucide-react';
import Image from 'next/image';
import { DealCountdown } from './DealCountdown';

export interface DealProps {
  id: string;
  title: string;
  description: string;
  originalPrice: number;
  dealPrice: number;
  discount: number;
  image: string;
  merchant: string;
  merchantLogo: string;
  expiryDate: string;
  popularity: number;
  isHot?: boolean;
  couponCode?: string;
}

export const DealCard = ({
  id,
  title,
  description,
  originalPrice,
  dealPrice,
  discount,
  image,
  merchant,
  merchantLogo,
  expiryDate,
  popularity,
  isHot,
  couponCode,
}: DealProps) => {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
      {/* Hot Deal Badge */}
      {isHot && (
        <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          HOT
        </div>
      )}

      {/* Image */}
      <Link href={`/deal/${id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Discount Badge */}
          <div className="absolute bottom-3 left-3 bg-indigo-600 text-white text-sm font-bold px-2 py-1 rounded-full shadow-md">
            {discount}% OFF
          </div>
        </div>
      </Link>

      <div className="p-5">
        {/* Merchant */}
        <div className="flex items-center mb-2">
          <Image
            src={merchantLogo}
            alt={merchant}
            width={24}
            height={24}
            className="h-6 w-6 object-contain mr-2"
          />
          <span className="text-xs font-medium text-gray-500">{merchant}</span>
        </div>

        {/* Title */}
        <Link href={`/deal/${id}`}>
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
            {title}
          </h3>
        </Link>

        {/* Price */}
        <div className="flex items-baseline mb-2">
          <span className="text-2xl font-bold text-indigo-600">${dealPrice.toFixed(2)}</span>
          <span className="text-sm text-gray-400 line-through ml-2">${originalPrice.toFixed(2)}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>

        {/* Coupon */}
        {couponCode && (
          <div className="mb-3">
            <span className="inline-flex items-center text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded">
              Code: <span className="ml-1 font-mono bg-white px-2 py-0.5 rounded border">{couponCode}</span>
            </span>
          </div>
        )}

        {/* Footer: Timer + Popularity */}
        <div className="flex justify-between items-center text-xs text-gray-500 mt-4 pt-3 border-t border-gray-100">
          <div className="flex items-center">
            <Clock className="h-3.5 w-3.5 mr-1" />
            <DealCountdown expiryDate={expiryDate} />
          </div>
          <div className="flex items-center">
            <ThumbsUp className="h-3.5 w-3.5 mr-1" />
            <span>{popularity}</span>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href={`/out/${id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center text-sm"
        >
          Get Deal <ExternalLink className="h-4 w-4 ml-1" />
        </a>
      </div>
    </div>
  );
};