import React from 'react'
import Lancamentos from "../assets/iimages/lancamento.png"
import Recente from "../assets/iimages/recentes.png"
import Recomendacao from "../assets/iimages/recomendar.png"
import Visualizados from "../assets/iimages/view.png"
import CapasListFilms from './CapasListFilms'




const ListingHome = () => {
  return (
    <div className='listing-home'>
        <div className="options">
            <ul>
                <li><img width={42} src={Lancamentos} alt="" />Lançamentos</li>
                <li><img width={42} src={Recente} alt="" />Recentes</li>
                <li><img width={42} src={Recomendacao} alt="" />Recomendados</li>
                <li><img width={42} src={Visualizados} alt="" />Mais Assistidos</li>
            </ul>
        </div>
        <CapasListFilms/>     
    </div>
  )
}

export  {ListingHome}
