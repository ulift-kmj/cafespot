import type { Cafe } from '@/types/cafe';
import { Link } from 'react-router';

interface CafeCardProps {
  cafe: Cafe;
}

export default function CafeCard({ cafe }: CafeCardProps) {
  return (
    <Link to={`/cafe/${cafe.id}`} className="flex flex-col">
      <div className="flex-col cursor-pointer group flex">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <img
            src={cafe.photos[0].url}
            alt={cafe.name}
            loading="lazy"
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div className="font-semibold text-[15px] flex items-center justify-between">
          <span>{cafe.name}</span>
        </div>
        <p className="font-light text-neutral-500 text-[14px]">
          {cafe.address}
        </p>
      </div>
    </Link>
  );
}
