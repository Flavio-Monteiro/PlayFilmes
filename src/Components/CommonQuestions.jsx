import React, { useState } from 'react';


const CommonQuestions = () => {
    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (itemIndex) => {
        if (activeItem === itemIndex) {
            setActiveItem(null);
        } else {
            setActiveItem(itemIndex);
        }
    };

    return (           
        <div className="faq-container">
            <h1>Perguntas Frequentes</h1>
            
            <div className={`faq-item ${activeItem === 1 ? 'active' : ''}`} onClick={() => handleItemClick(1)}>
                <div className="faq-question">O que é a PlaayTV?</div>
                {activeItem === 1 && (
                    <div className="faq-answer">
                        A PlayTV é um serviço de streaming que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet.
                        Você pode assistir a quantos filmes e séries quiser, quando e onde quiser – tudo por um preço mensal acessível.
                        Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes.
                    </div>
                )}
            </div>

            <div className={`faq-item ${activeItem === 2 ? 'active' : ''}`} onClick={() => handleItemClick(2)}>
                <div className="faq-question">Quanto custa a PlayTV?</div>
                {activeItem === 2 && (
                    <div className="faq-answer">
                        Assista à PlayTV no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única.
                        Os planos variam de R$18,90 a R$55,90 por mês. Sem contrato nem taxas extras.
                    </div>
                )}
            </div>

            {/* Repita o mesmo padrão para as outras perguntas */}
            
            <div className={`faq-item ${activeItem === 3 ? 'active' : ''}`} onClick={() => handleItemClick(3)}>
                <div className="faq-question">Onde posso assistir?</div>
                {activeItem === 3 && (
                    <div className="faq-answer">
                        Assista onde quiser, quando quiser.
                         Faça login com sua conta PlayTV em playtv.com para começar a assistir no computador 
                         ou em qualquer aparelho conectado à Internet compatível com o aplicativo PlayTV, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames.
                        Você também pode baixar a sua série favorita com o aplicativo PlayTV para iOS,
                         Android ou Windows 10. Use downloads para levar a PlayTV para onde quiser sem precisar de conexão com a Internet.
                          Leve o PlayTV com você para qualquer lugar.
                    </div>
                )}
            </div>

            <div className={`faq-item ${activeItem === 4 ? 'active' : ''}`} onClick={() => handleItemClick(4)}>
                <div className="faq-question">Como faço para cancelar?</div>
                {activeItem === 4 && (
                    <div className="faq-answer">
                        A PlayTV é flexível. Não há contratos nem compromissos.
                        Você pode cancelar a sua conta na internet com apenas dois cliques.
                        Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento.
                    </div>
                )}
            </div>

            <div className={`faq-item ${activeItem === 5 ? 'active' : ''}`} onClick={() => handleItemClick(5)}>
                <div className="faq-question">O que eu posso assistir na PlayTV?</div>
                {activeItem === 5 && (
                    <div className="faq-answer">
                        A PlayTV tem um grande catálogo de filmes, documentários, séries, originais PlayTV premiados e muito mais. Assista o quanto quiser, quando quiser.
                    </div>
                )}
            </div>
        </div>
    )
}

export { CommonQuestions }
