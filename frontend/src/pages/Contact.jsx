import React, { useState } from 'react';
import { assets } from '../assets/assets';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'Pregunta',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_sy3v5wn', // Service ID de emailjs
      'template_y5mt693', //  Template ID de emailjs
      {
        name: formData.name,
        email: formData.email,
        type: formData.type,
        message: formData.message,
      },
      'FjmLtRmJwE7dKzmww' // Reemplaza con tu Public Key o User ID
    )
    .then((response) => {
      alert('Correo enviado exitosamente!');
      setFormData({ name: '', email: '', type: 'Pregunta', message: '' });
    })
    .catch((error) => {
      console.error('Error al enviar el correo:', error);
      alert('Hubo un error al enviar el correo.');
    });
  };

  return (
    <div>
      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>CONTACTA <span className='text-gray-700 font-semibold'>CON NOSOTROS</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="Contact" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>NUESTRAS OFICINAS</p>
          <p className='text-gray-500'>CLINICA VALLE DEL LILI <br /> Cra. 98 #18-49, Comuna 17, Cali, Valle del Cauca</p>
          <p className='text-gray-500'>Tel: (415) 555-0132 <br /> Email: hopecare@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600'>CARRERAS EN HOPECARE</p>
          <p className='text-gray-500'>Obtenga más información sobre nuestros equipos.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explorar Trabajos</button>
        </div>
      </div>

      <div className='text-center text-xl font-semibold text-gray-600 mb-8'>Formulario PQRS</div>
      <form className='max-w-xl mx-auto px-4 py-6 border rounded shadow-md' onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block text-gray-700'>Nombre</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Correo Electrónico</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Tipo de Solicitud</label>
          <select
            name='type'
            value={formData.type}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
          >
            <option value='Pregunta'>Pregunta</option>
            <option value='Queja'>Queja</option>
            <option value='Reclamo'>Reclamo</option>
            <option value='Sugerencia'>Sugerencia</option>
          </select>
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Mensaje</label>
          <textarea
            name='message'
            value={formData.message}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
            rows='4'
            required
          ></textarea>
        </div>
        <button
          type='submit'
          className='w-full bg-primary text-white py-2 rounded'
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;
