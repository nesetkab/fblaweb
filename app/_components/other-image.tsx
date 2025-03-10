import Image from 'next/image'

interface Props {
  src: string;
  alt: string;
  slug?: string;
}
export default function OtherImage({ src, alt }: Props) {
  return (
    <div className="animate-fade-in">
      <Image
        src={src}
        alt={alt}
        className="rounded-lg shadow-sm"
        fill
        objectFit="cover"
      />
    </div>
  )
}
