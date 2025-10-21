import React from 'react';
import  Link  from 'next/link';
import { ExternalLink, ThumbsUp, Clock } from 'lucide-react';
import { DealCountdown } from './DealCountdown';
import Image from 'next/image';
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
  category: string;
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
  couponCode
}: DealProps) => {
  return <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Hot deal badge */}
      {isHot && <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg z-10">
          HOT DEAL
        </div>}
      {/* Deal image */}
      <Link href={`/deal/${id}`} className="block relative">
        <Image height={100} width={100} src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute bottom-0 left-0 bg-indigo-600 text-white text-sm font-semibold px-2 py-1">
          {discount}% OFF
        </div>
      </Link>
      <div className="p-4">
        {/* Merchant info */}
        <div className="flex items-center mb-2">
          <Image height={100} width={100} src={merchantLogo} alt={merchant} className="h-6 w-6 object-contain mr-2" />
          <span className="text-sm text-gray-600">{merchant}</span>
        </div>
        {/* Deal title */}
        <Link href={`/deal/${id}`}>
          <h3 className="font-semibold text-lg mb-1 line-clamp-2 hover:text-indigo-600 transition-colors">
            {title}
          </h3>
        </Link>
        {/* Price info */}
        <div className="flex items-baseline mb-2">
          <span className="text-xl font-bold text-indigo-600">
            ${dealPrice}
          </span>
          <span className="text-sm text-gray-500 line-through ml-2">
            ${originalPrice}
          </span>
        </div>
        {/* Description */}
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
        {/* Coupon code if available */}
        {couponCode && <div className="flex items-center mb-3 bg-gray-100 rounded p-2">
            <span className="text-xs font-medium text-gray-600 mr-2">
              Code:
            </span>
            <span className="text-sm font-mono bg-white px-2 py-1 border border-gray-300 rounded">
              {couponCode}
            </span>
          </div>}
        {/* Deal footer */}
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            <DealCountdown expiryDate={expiryDate} />
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <ThumbsUp className="h-4 w-4 mr-1" />
            <span>{popularity}</span>
          </div>
        </div>
        {/* Action button */}
        <a href={`/out/${id}`} target="_blank" rel="noopener noreferrer" className="mt-4 block w-full bg-indigo-600 hover:bg-indigo-700 text-white text-center py-2 rounded-md font-medium transition-colors duration-300 flex items-center justify-center">
          Get Deal <ExternalLink className="h-4 w-4 ml-1" />
        </a>
      </div>
    </div>;
};