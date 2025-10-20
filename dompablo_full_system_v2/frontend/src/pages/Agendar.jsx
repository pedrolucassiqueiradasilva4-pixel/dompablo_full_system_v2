import React, { useState } from 'react'
import axios from 'axios'
export default function Agendar(){
  const [form, setForm] = useState({ client_name:'', client_phone:'', datetime:'', service:'Corte Básico' })
  const [loading, setLoading] = useState(false)
  const api = import.meta.env.VITE_API_URL || 'https://dompablo-barbearia.onrender.com'

  async function handleSubmit(e){
    e.preventDefault()
    setLoading(true)
    try{
      await axios.post(`${api}/api/bookings`, {
        barber_id: null,
        client_name: form.client_name,
        client_phone: form.client_phone,
        datetime: form.datetime
      })
      alert('Agendamento realizado! Enviaremos confirmação via WhatsApp (se configurado).')
      window.location.href = '/'
    }catch(err){
      alert('Erro ao agendar. Tente novamente.')
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className='card'>
      <h2>Agendar</h2>
      <form className='form' onSubmit={handleSubmit}>
        <label>Nome</label>
        <input required value={form.client_name} onChange={e=>setForm({...form, client_name:e.target.value})} />
        <label>Telefone (ex: +5511999999999)</label>
        <input required value={form.client_phone} onChange={e=>setForm({...form, client_phone:e.target.value})} />
        <label>Data e hora</label>
        <input required type='datetime-local' value={form.datetime} onChange={e=>setForm({...form, datetime:e.target.value})} />
        <label>Serviço</label>
        <select value={form.service} onChange={e=>setForm({...form, service:e.target.value})}>
          <option>Corte Básico</option>
          <option>Corte + Barba</option>
          <option>Barba Tradicional</option>
          <option>Combo Premium</option>
        </select>
        <div style={{marginTop:12}}>
          <button className='btn' type='submit' disabled={loading}>{loading ? 'Enviando...' : 'Confirmar'}</button>
          <a className='btn' style={{marginLeft:8}} href='https://wa.me/5531973139868' target='_blank' rel='noreferrer'>WhatsApp</a>
        </div>
      </form>
    </div>
  )
}
