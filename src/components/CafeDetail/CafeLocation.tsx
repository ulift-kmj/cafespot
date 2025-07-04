import KakaoMap from '@/components/CafeDetail/KakaoMap';

interface CafeLocationProps {
  address: string;
}

export default function CafeLocation({ address }: CafeLocationProps) {
  return (
    <div className="md:justify-start mt-4 md:mt-0">
      <div className="w-full h-full flex flex-col justify-evenly gap-5">
        <h3 className="text-2xl font-bold text-darkBrown">Location</h3>
        <KakaoMap address={address} />
      </div>
    </div>
  );
}
