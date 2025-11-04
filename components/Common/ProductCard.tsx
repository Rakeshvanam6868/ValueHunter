// components/Common/ProductCard.tsx
import Link from 'next/link';
import { Check, X } from 'lucide-react';
import Image from 'next/image';

interface ProductCardProps {
  product: {
    id: string;
    number: number;
    title: string;
    image: string;
    description: string;
    price: number;
    rating: number;
    specs: {
      Model: string;
      'Display Technology': string;
      'Refresh Rate': string;
      'Operating System': string;
      'Audio Wattage': string;
      'Product Dimensions': string;
    };
    reasonsToBuy: string[];
    reasonsToAvoid: string[];
    amazonPrice: number;
    amazonLink: string;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div id={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 mb-8">
      {/* Number Badge */}
      <div className="absolute top-4 left-4 bg-pink-500 text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center">
        {String(product.number).padStart(2, '0')}
      </div>

      {/* Product Image */}
      <div className="relative h-64 mb-6">
        <Image
          src={product.image}
          alt={product.title}
          width={1000}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold mb-4">{product.title}</h2>

      {/* Check Price Button */}
      <Link
        href={product.amazonLink}
        className="inline-block bg-pink-500 text-white font-medium px-6 py-3 rounded-full mb-6 hover:bg-pink-600 transition-colors"
      >
        Check Price on Amazon
      </Link>

      {/* Description */}
      <div className="prose prose-lg max-w-none mb-6">
        <p>{product.description}</p>
      </div>

      {/* Save With Amazon */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Save With Amazon</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Up to Rs 7600 Off with exchange offers.</li>
          <li>The No Cost EMI starts at Rs 1673/ month on selected credit cards.</li>
          <li>Up to Rs 2812 interest savings with No Cost EMI options.</li>
          <li>Get 5% back with Amazon Pay ICICI Bank credit card for Prime members.</li>
        </ul>
      </div>

      {/* Specifications */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Specifications:</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <table className="w-full">
            <tbody>
              {Object.entries(product.specs).map(([key, value]) => (
                <tr key={key} className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-medium">{key}:</td>
                  <td className="py-2">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Reasons Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Reasons to buy:</h3>
          <ul className="space-y-1">
            {product.reasonsToBuy.map((reason, i) => (
              <li key={i} className="flex items-start">
                <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Reasons to avoid:</h3>
          <ul className="space-y-1">
            {product.reasonsToAvoid.map((reason, i) => (
              <li key={i} className="flex items-start">
                <X className="h-4 w-4 text-red-600 mr-2 mt-0.5" />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Amazon Price Card */}
      <div className="bg-white p-4 rounded-lg flex items-center justify-between">
        <div>
          <div className="flex items-center">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
              alt="Amazon"
              width={40}
              height={40}
              className="h-8 w-8 mr-2"
            />
            <span className="text-sm text-gray-500">Amazon</span>
          </div>
          <div className="text-2xl font-bold text-indigo-600">₹{product.amazonPrice.toLocaleString()}</div>
        </div>
        <button className="bg-yellow-500 text-black font-medium px-4 py-2 rounded-full hover:bg-yellow-600 transition-colors">
          Get This
        </button>
      </div>
    </div>
  );
}