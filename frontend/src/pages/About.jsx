import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>SOBRE <span className='text-gray-700 font-semibold'>NOSOTROS</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>HopeCare es un equipo multidisciplinario de profesionales de la salud, desarrolladores tecnológicos, diseñadores y expertos en enfermedades huérfanas, comprometidos con el bienestar de los pacientes y sus familias. Fundada con el objetivo de ofrecer un recurso accesible y centralizado, HopeCare busca ser un puente entre la comunidad médica y aquellos que enfrentan el reto de convivir con enfermedades huérfanas.</p>
          <p>Nos impulsa la pasión por la innovación en salud y el deseo de proporcionar herramientas que faciliten el manejo de estas condiciones raras, mejorando tanto el diagnóstico como el tratamiento, mediante soluciones tecnológicas avanzadas y seguras.</p>
          <b className='text-gray-800'>Nuestra Vision</b>
          <p>Ser la referencia global en apoyo digital para enfermedades raras, promoviendo la concienciación y mejorando la calidad de vida de los pacientes.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>PORQUE  <span className='text-gray-700 font-semibold'>ESCOGERNOS</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EMPATIA:</b>
          <p>Poniéndose en el lugar de los pacientes y sus familias, comprendiendo sus desafíos y necesidades.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>INNOVACIÓN: </b>
          <p>Usando tecnología avanzada para ofrecer soluciones que mejoren la calidad de vida.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CUIDADO:</b>
          <p >Mostrando un compromiso genuino con la salud y el bienestar de los pacientes.</p>
        </div>
      </div>

    </div>
  )
}

export default About
