import React, { useState } from 'react';
import { Nav } from './Nav';



const Header = () => {
    const [showTrailer, setShowTrailer] = useState(false); // Estado para controlar a exibição do vídeo

    const handleTrailerClick = () => {
        setShowTrailer(true); // Ativa a exibição do vídeo ao clicar no botão "Trailer"
    };

    return (
        <div className='header'>
            <div className='gradient'>
                <div className='moovie-present'>
                    <Nav />
                    <p>Filmes online - Duração: 1h 54min</p>
                    <h1>Supernatural</h1>
                    <p>
                        <details>
                            <summary>Sinopse</summary>
                            A série segue os irmãos Sam Winchester e Dean Winchester que viajam por toda a América em um Chevrolet Impala 1967 preto investigando e combatendo eventos paranormais e outras ocorrências inexplicáveis,
                             muitas delas baseadas em lendas urbanas americanas e folclore, assim como diferentes criaturas sobrenaturais.
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
