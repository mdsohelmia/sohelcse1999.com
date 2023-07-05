export default function Home() {
  return (
    <div className="px-48 container mx-auto mt-12">
      <div className="flex space-x-12">
        <div>
          <img
            src="me1.jpg"
            className="w-40 h-40 object-cover rounded cursor-pointer filter grayscale hover:grayscale-0"
            alt="Sohel"
          />
        </div>
        <div className="flex-1 flex">
          Hi, my name is Sohel Mia. I am a software engineer and one of the
          maintainers of the Ethereum blockchain protocol. I believe technology
          can help us build a less zero-sum world.
        </div>
      </div>
      <p className="mt-5">
        Sohel Mia has been in software development for 4+ years and designing
        efficient, scalable and & secure technology solutions. Besides being a
        software engineer, he loves to promote coding to the youth. Currently,
        he is working as a Software Engineer, Cloud & CDN Service Provider In
        Bangladesh | VOD, Streaming, Edge Computing at Gotipath.
      </p>
      <iframe
        src="https://cdn.dhakalive.tv/jsplayer.html"
        title="Gotipath Live"
      ></iframe>
    </div>
  );
}
