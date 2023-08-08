import React, { useState } from 'react';
import { Nav } from './Nav';
import Logoplay from '../assets/iimages/PlayLogo.png';


const Header = () => {
    const [showTrailer, setShowTrailer] = useState(false); // Estado para controlar a exibição do vídeo

    const handleTrailerClick = () => {
        setShowTrailer(true); // Ativa a exibição do vídeo ao clicar no botão "Trailer"
    };

    return (
        <div className='header'>
            <div className='gradient'>
                <div className='moovie-present'>
                    <img width={64} height={64} src={Logoplay} alt="" />
                    <Nav />
                    <p>Filmes online - Duração: 1h 54min</p>
                    <h1>Marvel - Os Vingadores</h1>
                    <p>
                        <details>
                            <summary>Sinopse</summary>
                            Com uma escalação de astros que inclui Homem de Ferro,
                            Capitão América, Thor, Hulk, Gavião Arqueiro,
                            o recém-chegado e incrível Falcão e a Viúva Negra,
                            Os Vingadores Unidos, da Marvel, são verdadeiramente uma irmandade.
                            Eles salvam o mundo das maiores ameaças imagináveis - do tipo que um único super-herói não pode lidar.
                            Agora, eles precisam combater uma equipe formada pelos vilões mais perigosos do planeta, A Cabala,
                            um grupo que se reuniu sob a liderança do Caveira Vermelha! Liderados pelo Homem de Ferro,
                            os heróis treinam e vivem juntos em sua nova sede,
                            na Torre dos Vingadores. Não importa se eles estão impedindo o Dr. Destino de conquistar Asgard,
                            Attuma de levar o Exército da Atlântida até Nova York ou o Drácula de liberar hordas de vampiros,
                            os Vingadores devem trabalhar juntos para ter sucesso.
                        </details>
                    </p>
                    <div className='btn-cantainer'>
                        <button className='btn-play'>
                            Assistir Agora
                        </button>
                        <button className='trailler' onClick={handleTrailerClick}>
                            Trailler
                        </button>
                    </div>
                    {showTrailer && ( // Condição para exibir o vídeo somente quando showTrailer for true
                        <div className="video-container">
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/t_ULBP6V9bg"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
};

export default Header;
