import React, { useState } from 'react';
import { assets } from '../assets/assets';
import emailjs from 'emailjs-com';

const Contact = () => {
  // Estado para formulario PQRS
  const [formDataPQRS, setFormDataPQRS] = useState({
    name: '',
    email: '',
    type: 'Pregunta',
    message: '',
  });

  // Estado para formulario de contacto
  const [formDataContact, setFormDataContact] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChangePQRS = (e) => {
    const { name, value } = e.target;
    setFormDataPQRS({ ...formDataPQRS, [name]: value });
  };

  const handleChangeContact = (e) => {
    const { name, value } = e.target;
    setFormDataContact({ ...formDataContact, [name]: value });
  };

  // Función para enviar formulario PQRS
  const handleSubmitPQRS = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_sy3v5wn', // Service ID de emailjs
      'template_y5mt693', // Template ID de emailjs
      {
        name: formDataPQRS.name,
        email: formDataPQRS.email,
        type: formDataPQRS.type,
        message: formDataPQRS.message,
      },
      'FjmLtRmJwE7dKzmww' // Reemplaza con tu Public Key o User ID
    )
    .then((response) => {
      alert('Correo enviado exitosamente!');
      setFormDataPQRS({ name: '', email: '', type: 'Pregunta', message: '' });
    })
    .catch((error) => {
      console.error('Error al enviar el correo:', error);
      alert('Hubo un error al enviar el correo.');
    });
  };

  // Función para enviar formulario de contacto
  const handleSubmitContact = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_sy3v5wn', // Service ID de emailjs
      'template_3godu5a', // Template ID de emailjs 
      {
        name: formDataContact.name,
        email: formDataContact.email,
        message: formDataContact.message,
      },
      'FjmLtRmJwE7dKzmww' // Reemplaza con tu Public Key o User ID
    )
    .then((response) => {
      alert('Correo de contacto enviado exitosamente!');
      setFormDataContact({ name: '', email: '', message: '' });
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

      <div className="flex flex-col md:flex-row gap-10">
        {/* Formulario PQRS */}
        <div className="md:w-1/2">
          <div className='text-center text-xl font-semibold text-gray-600 mb-8'>Formulario PQRS</div>
          <form className='max-w-xl mx-auto px-4 py-6 border rounded shadow-md' onSubmit={handleSubmitPQRS}>
            <div className='mb-4'>
              <label className='block text-gray-700'>Nombre</label>
              <input
                type='text'
                name='name'
                value={formDataPQRS.name}
                onChange={handleChangePQRS}
                className='w-full px-3 py-2 border rounded'
                required
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700'>Correo Electrónico</label>
              <input
                type='email'
                name='email'
                value={formDataPQRS.email}
                onChange={handleChangePQRS}
                className='w-full px-3 py-2 border rounded'
                required
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700'>Tipo de Solicitud</label>
              <select
                name='type'
                value={formDataPQRS.type}
                onChange={handleChangePQRS}
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
                value={formDataPQRS.message}
                onChange={handleChangePQRS}
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

        {/* Formulario Contáctenos */}
        <div className="md:w-1/2">
          <div className='text-center text-xl font-semibold text-gray-600 mb-8'>Formulario Contáctenos</div>
          <form className='max-w-xl mx-auto px-4 py-6 border rounded shadow-md' onSubmit={handleSubmitContact}>
            <div className='mb-4'>
              <label className='block text-gray-700'>Nombre</label>
              <input
                type='text'
                name='name'
                value={formDataContact.name}
                onChange={handleChangeContact}
                className='w-full px-3 py-2 border rounded'
                required
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700'>Correo Electrónico</label>
              <input
                type='email'
                name='email'
                value={formDataContact.email}
                onChange={handleChangeContact}
                className='w-full px-3 py-2 border rounded'
                required
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700'>Mensaje</label>
              <textarea
                name='message'
                value={formDataContact.message}
                onChange={handleChangeContact}
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
      </div>
    </div>
  );
};

export default Contact;
