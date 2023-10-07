import Image from 'next/image'

const ImageRender = ({ hero, currentIndex }) => {
  return (
    <div className="relative h-screen">
      <Image
        src={hero[currentIndex].heroImages}
        layout="fill"
        objectFit="cover"
        className="heroImages"
        alt="hero Images"
        unoptimized
        priority
      />
      <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2">
        <h1 className="text-center text-white font-extrabold text-2xl md:text-6xl lg:text-7xl">
          {hero[currentIndex].headline}
        </h1>
      </div>
    </div>
  );
}

export default ImageRender
