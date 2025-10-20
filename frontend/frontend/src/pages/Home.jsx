import React from 'react'
export default function Home(){
  return (
    <div className='card hero'>
      <h1>Barbearia Dom Pablo</h1>
      <p>Bem-vindo à Barbearia Dom Pablo — cortes precisos e atendimento com estilo.</p>
      <div style={{display:'flex',gap:8}}>
        <a className='btn' href='/agendar'>Agendar Agora</a>
        <a className='btn' href='https://wa.me/5531973139868' target='_blank' rel='noreferrer'>WhatsApp</a>
      </div>
    </div>
  )
}
