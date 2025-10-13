import Image from "next/image";

// components/CardItem.jsx
export default function CardItem({ card, onEdit, onDelete }) {
  return (
    <div className="border dark:border-gray-700 rounded-lg overflow-hidden shadow-sm bg-white dark:bg-gray-800">
      <Image width={320} height={320} src={card.image} alt={card.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-medium text-gray-800 dark:text-gray-100">{card.title}</h3>
        <div className="mt-3 flex justify-between">
          <button onClick={() => onEdit(card)} className="text-blue-600 hover:underline text-sm">
            Edit
          </button>
          <button onClick={() => onDelete(card.id)} className="text-red-600 hover:underline text-sm">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}