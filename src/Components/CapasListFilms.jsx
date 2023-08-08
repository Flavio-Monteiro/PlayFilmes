import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Imagens capas de filmes
import Image1 from "../assets/iimages/capas filmes/image01.jpg";
import Image2 from "../assets/iimages/capas filmes/image02.jpg";
import Image3 from "../assets/iimages/capas filmes/image03.jpg";
import Image4 from "../assets/iimages/capas filmes/image04.jpg";
import Image5 from "../assets/iimages/capas filmes/image05.jpg";
import Image6 from "../assets/iimages/capas filmes/image06.jpg";
import Image7 from "../assets/iimages/capas filmes/image07.jpg";
import Image8 from "../assets/iimages/capas filmes/image08.jpg";
import Image9 from "../assets/iimages/capas filmes/image09.jpg";
import Image10 from "../assets/iimages/capas filmes/image10.jpg";
import Image11 from "../assets/iimages/capas filmes/image11.jpg";
import Image12 from "../assets/iimages/capas filmes/image12.jpg";
// Imagns capas de Séries
import Image13 from "../assets/iimages/capas-series/image13.jpg";
import Image14 from "../assets/iimages/capas-series/image14.jpg";
import Image15 from "../assets/iimages/capas-series/image15.jpg";
import Image16 from "../assets/iimages/capas-series/image16.jpg";
import Image17 from "../assets/iimages/capas-series/image17.jpg";
import Image18 from "../assets/iimages/capas-series/image18.jpg";
import Image19 from "../assets/iimages/capas-series/image19.jpg";
import Image20 from "../assets/iimages/capas-series/image20.jpg";
import Image21 from "../assets/iimages/capas-series/image21.jpg";
import Image22 from "../assets/iimages/capas-series/image22.jpg";
// Imagens Capas de Animação
import Image23 from "../assets/iimages/animacao/image23.jpg";
import Image24 from "../assets/iimages/animacao/image24.jpg";
import Image25 from "../assets/iimages/animacao/image25.jpg";
import Image26 from "../assets/iimages/animacao/image26.jpg";
import Image27 from "../assets/iimages/animacao/image27.jpg";
import Image28 from "../assets/iimages/animacao/image28.jpg";
import Image29 from "../assets/iimages/animacao/image29.jpg";
import Image30 from "../assets/iimages/animacao/image30.jpg";
import Image31 from "../assets/iimages/animacao/image31.jpg";
import Image32 from "../assets/iimages/animacao/image32.jpg";
import Image33 from "../assets/iimages/animacao/image33.jpg";

const CapasListFilms = () => {
  const imagesFilmes = [
    { src: Image1, title: "Título 1" },
    { src: Image2, title: "Título 2" },
    { src: Image3, title: "Título 3" },
    { src: Image4, title: "Título 4" },
    { src: Image5, title: "Título 5" },
    { src: Image6, title: "Título 6" },
    { src: Image7, title: "Título 7" },
    { src: Image8, title: "Título 8" },
    { src: Image9, title: "Título 9" },
    { src: Image10, title: "Título 10" },
    { src: Image11, title: "Título 11" },
    { src: Image12, title: "Título 12" },
  ];
  const imageSeries = [
    { src: Image13, title: "Título 12" },
    { src: Image14, title: "Título 12" },
    { src: Image15, title: "Título 12" },
    { src: Image16, title: "Título 12" },
    { src: Image17, title: "Título 12" },
    { src: Image18, title: "Título 12" },
    { src: Image19, title: "Título 12" },
    { src: Image20, title: "Título 12" },
    { src: Image21, title: "Título 12" },
    { src: Image22, title: "Título 12" },
  ]
  const imageAnimacao =[
    { src: Image23, title: "Título 12" },
    { src: Image24, title: "Título 12" },
    { src: Image25, title: "Título 12" },
    { src: Image26, title: "Título 12" },
    { src: Image27, title: "Título 12" },
    { src: Image28, title: "Título 12" },
    { src: Image29, title: "Título 12" },
    { src: Image30, title: "Título 12" },
    { src: Image31, title: "Título 12" },
    { src: Image32, title: "Título 12" },
    { src: Image33, title: "Título 12" },
  ]
  
  const settings = {
    
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 8,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <h2>Filmes</h2>
      <Slider {...settings}>
        {imagesFilmes.map((image, index) => (
          <
            img
            key={index}
            src={image.src}
            alt={`Image ${index}`}
            className="carousel-image"
            title={image.title}
          />
        ))}
      </Slider>
      <h2>Séries</h2>
      <Slider {...settings}>
        {imageSeries.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Image ${index}`}
            className="carousel-image"
            title={image.title}
          />
        ))}
      </Slider>
      <h2>Animações</h2>
      <Slider {...settings}>
        {imageAnimacao.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`imageAnimacao ${index}`}
            className="carousel-image"
            title={image.title}
          />
        ))}
      </Slider>
    </div>
  );
};

export default CapasListFilms;
