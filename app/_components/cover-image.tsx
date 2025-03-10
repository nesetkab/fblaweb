import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

export default function CoverImage({ title, src }: Props) {
  return (
    <div className="animate-fade-in">
      <Image
        src={src}
        alt={`Cover Image for ${title}`}
        className="shadow-sm w-full h-auto rounded-lg"
        width={2000}
        height={1000}
        priority
      />
    </div>
  );
}
