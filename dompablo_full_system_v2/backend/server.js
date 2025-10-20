// frontend/src/pages/Services.jsx
import React from 'react'

export default function Services(){
  const services = [
    { id: 1, name: 'Corte Básico', desc: 'Corte rápido e preciso', price: 'R$ 30' },
    { id: 2, name: 'Corte + Barba', desc: 'Corte + modelagem de barba', price: 'R$ 50' },
    { id: 3, name: 'Barba Tradicional', desc: 'Barba com toalha e finalização', price: 'R$ 25' },
    { id: 4, name: 'Combo Premium', desc: 'Corte + barba + tratamento', price: 'R$ 80' }
  ]

  return (
    <div className='container'>
      <div className='card'>
        <h2>Serviços</h2>
        <p className='lead'>Selecione o serviço que prefere e agende online — tudo rápido e sem complicação.</p>

        <div style={{display:'grid', gap:12, marginTop:12}}>
          {services.map(s => (
            <div key={s.id} style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:12, borderRadius:8, background:'#070707'}}>
              <div>
                <div style={{fontWeight:700}}>{s.name}</div>
                <div style={{color:'#bdbdbd', fontSize:13}}>{s.desc}</div>
              </div>
              <div style={{textAlign:'right'}}>
                <div style={{fontWeight:800}}>{s.price}</div>
                <a className='btn primary' href='/agendar' style={{marginTop:8, display:'inline-block'}}>Agendar</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
