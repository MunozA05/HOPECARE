import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const handleDownload = (fileName) => {
    const link = document.createElement('a');
    link.href = `/${fileName}`; // Ruta relativa al archivo en la carpeta public
    link.download = fileName; // Nombre del archivo
    link.click();
  };

  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>En HopeCare, nuestra misión es brindar apoyo integral a pacientes con Glucogenosis y a sus familias, a través de una plataforma digital que facilite el acceso a información médica confiable, recursos educativos, herramientas de seguimiento de tratamientos y comunicación directa con especialistas. Nos comprometemos a mejorar la calidad de vida de estos pacientes, empoderándolos con soluciones tecnológicas accesibles, seguras y personalizadas.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPAÑIA</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
          <NavLink to='/' >
            <li className='cursor-pointer'>Home</li>
          </NavLink>
          <NavLink to='/about' >
            <li className='cursor-pointer'>Nosotros</li>
          </NavLink>
            <li 
              className='cursor-pointer' 
              onClick={() => handleDownload('terminos-y-condiciones.pdf')}
            >
              Términos y condiciones
            </li>
            <li 
              className='cursor-pointer' 
              onClick={() => handleDownload('politicas-y-privacidad.pdf')}
            >
              Políticas y privacidad
            </li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>CONTÁCTENOS</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+57 62-884-98-71</li>
            <li>hopecare@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024 @ hopecare.com - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer

