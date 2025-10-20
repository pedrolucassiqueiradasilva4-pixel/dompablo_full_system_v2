import React from 'react'
export default function Services(){
  const serv = [
    {name:'Corte Básico', price:'R$ 30'},
    {name:'Corte + Barba', price:'R$ 50'},
    {name:'Barba Tradicional', price:'R$ 25'},
    {name:'Combo Premium', price:'R$ 80'}
  ]
  return (
    <div className='card'>
      <h2>Serviços</h2>
      <ul>
        {serv.map(s=> <li key={s.name}><strong>{s.name}</strong> — {s.price}</li>)}
      </ul>
    </div>
  )
}
