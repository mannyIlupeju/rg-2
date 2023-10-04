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
        <h1 className="text-center text-white font-extrabold text-4xl md:text-6xl lg:text-8xl">
          {hero[currentIndex].headline}
        </h1>
        <p className="text-center text-white font-bold text-lg lg:text-xl">
          {hero[currentIndex].headstatement}
        </p>
      </div>
    </div>
  );
}

export default ImageRender
