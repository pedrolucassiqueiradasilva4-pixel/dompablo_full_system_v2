import React from 'react';

export default function Gallery() {
  const imgs = [
    'https://via.placeholder.com/800x500?text=Corte+1',
    'https://via.placeholder.com/800x500?text=Corte+2',
    'https://via.placeholder.com/800x500?text=Corte+3',
    'https://via.placeholder.com/800x500?text=Corte+4'
  ];
  return (
    <div className='container'>
      <h2>Galeria</h2>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:12}}>
        {imgs.map((src,i) => (
          <img key={i} src={src} alt={'Corte ' + (i+1)} style={{width:'100%', borderRadius:8}} />
        ))}
      </div>
    </div>
  );
}
