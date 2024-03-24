import Image from 'next/image'

const ImageRender = ({ hero, currentIndex }) => {



  return (
    <div className="relative h-screen flex flex-col justify-center items-center w-full">
      <Image
        src={hero[currentIndex].heroImages || 'IMG_1360.jpeg'}
        className="heroImages"
        alt="hero Images"
        fill={true}
        unoptimized
        loading='lazy'
      />
      <div className="absolute bottom-1/4 lg:bottom-1/4 text-center w-3/5 translate-x-1/5 text-white font-extrabold text-2xl md:text-6xl lg:text-7xl">
        <h1 className="text-center text-white font-extrabold text-5xl md:text-6xl lg:text-7xl">
          {hero[currentIndex].headline || 'Connecting your Mind, Body, Spirit & Home'}
        </h1>
      </div>
    </div>
  );

}

export default ImageRender
