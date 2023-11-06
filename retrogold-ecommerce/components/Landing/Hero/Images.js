import Image from 'next/image'

const ImageRender = ({ hero, currentIndex }) => {
  return (
<<<<<<< HEAD
    <>
      <Image
        src={hero[currentIndex].heroImages}
        width="200"
        height="200"
        className="heroImages"
        alt="hero Images"
        unoptimized
        priority
      />
      <div className="container mx-auto heroText">
        <h1 className="lg:text-8xl md:text-8xl text-4xl font-extrabold text-white">
          {hero[currentIndex].headline}{' '}
        </h1>
        <p className="text-lg lg:text-xl font-bold text-white">
          {hero[currentIndex].headstatement}{' '}
        </p>
      </div>
    </>
  )
=======
    <div className="relative h-screen flex flex-col justify-center items-center w-full h-full">
      <Image
        src={hero[currentIndex].heroImages}
        objectFit="cover"
        className="heroImages"
        alt="hero Images"
        fill={true}
        unoptimized
        priority
      />
      <div className="absolute bottom-1/4 lg:bottom-1/2 text-center w-3/4 translate-x-1/5 text-white font-extrabold text-2xl md:text-6xl lg:text-7xl">
        <h1 className="text-center text-white font-extrabold text-2xl md:text-6xl lg:text-6xl">
          {hero[currentIndex].headline}
        </h1>
      </div>
    </div>
  );
>>>>>>> origin/main
}

export default ImageRender
