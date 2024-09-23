import Image from "next/image";

interface BannerProps {
  images: { id: number; image: string }[];
  speed?: number;
}
const Banner = ({ images, speed = 5000 }: BannerProps) => {
  return (
    <div className="relative w-full overflow-hidden h-20">
      <div className="absolute flex">
        <section
          style={{ animation: `swipe ${speed}ms linear infinite` }}
          className="flex"
        >
          {images.map(({ id, image }) => (
            <div className="flex-shrink-0 px-4" key={id}>
              <Image
                src={image}
                alt={id.toString()}
                className="max-w-xs h-20 object-cover"
                width={128}
                height={128}
              />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export { Banner };
