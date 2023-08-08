import React from 'react'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-ul-container'>
                <ul>
                    <li>Perguntas frequentes</li>
                    <li>Central de Ajuda</li>
                    <li>Conta</li>
                    <li>Media Center</li>
                    <li>Relações com investidores</li>
                    <li>Carreiras</li>
                </ul>
                <ul>
                    <li>Resgatar cartão pré-pago</li>
                    <li>Comprar cartão pré-pago</li>
                    <li>Formas de assistir</li>
                    <li> Termos de Uso</li>
                    <li>Privacidade</li>
                </ul>
                <ul>
                    <li>Preferências de cookies</li>
                    <li>Informações corporativas</li>
                    <li>Entre em contato</li>
                    <li>Teste de velocidade</li>

                </ul>
            </div>
            <div className='copyright-txt'>
                <p>&copy;Desenvolvido por Flávio Monteiro</p>
            </div>
        </div>
    )
}

export { Footer }
