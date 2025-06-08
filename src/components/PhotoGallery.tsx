
import React from 'react';

const PhotoGallery = () => {
  const photos = [
    {
      id: 1,
      src: "/photos/encontro.jpeg",
      alt: "Couple photo 1",
      caption: "Nosso primeiro encontro 💕" 
    },
    {
      id: 2,
      src: "/photos/nossosquadros.jpeg",
      alt: "Couple photo 2",
      caption: "Fingindo que sabemos pintar"
    },
    {
      id: 3,
      src: "/photos/nos.jpeg",
      alt: "Couple photo 3",
      caption: "Só nós dois 🥰"
    },
    {
      id: 4,
      src: "/photos/quarto.jpeg",
      alt: "Couple photo 4",
      caption: "O quadro ficou uma gracinha no seu quarto"
    },
    {
      id: 5,
      src: "/photos/lugar.jpeg",
      alt: "Couple photo 5"
    }

  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Nossas belas memórias
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-96 object-cover md:h-[28rem] lg:h-[32rem] transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* 
              {photo.caption && (
              <p className="mt-2 text-center text-sm text-gray-700 font-bold">{photo.caption}</p>
              )}*/}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
