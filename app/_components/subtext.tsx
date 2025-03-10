import cn from "classnames";
import Link from "next/link";
import Image from "next/image";
import OtherImage from "@/app/_components/other-image";
export default function Subtext() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      <div className="animate-fade-left">
        <h2 className="text-3xl font-bold mb-4">
          Community First
        </h2>
        <p className="text-lg text-gray-600">
          Our arena is more than just a venue - it's a hub for community engagement and activity.
        </p>
      </div>
      <div className="relative h-64 md:h-auto animate-fade-right">
        <OtherImage
          src="/images/event.jpg"
          alt="Community Events"
        />
      </div>
    </div>
  );
}