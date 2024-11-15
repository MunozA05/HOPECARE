import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [state, setState] = useState('Sign Up')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [resetEmail, setResetEmail] = useState('')
  const [showResetPassword, setShowResetPassword] = useState(false)

  const navigate = useNavigate()
  const { backendUrl, token, setToken } = useContext(AppContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    if (state === 'Sign Up') {
      const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password })
      if (data.success) {
        localStorage.setItem('token', data.token)
        setToken(data.token)
      } else {
        toast.error(data.message)
      }
    } else {
      const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })
      if (data.success) {
        localStorage.setItem('token', data.token)
        setToken(data.token)
      } else {
        toast.error(data.message)
      }
    }
  }

  const handlePasswordReset = async () => {
    try {
      const { data } = await axios.post(backendUrl + '/api/user/reset-password', { email: resetEmail })
      if (data.success) {
        toast.success('Se ha enviado un correo con las instrucciones para restablecer tu contraseña.')
        setShowResetPassword(false)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error('Error al enviar la solicitud.')
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? 'Crea una Cuenta' : 'Iniciar sesión'}</p>
        <p>Por favor {state === 'Sign Up' ? ' ' : 'inicie sesión y'} regístrese para reservar cita</p>

        {state === 'Sign Up'
          ? <div className='w-full '>
            <p>Nombre completo</p>
            <input onChange={(e) => setName(e.target.value)} value={name} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="text" required />
          </div>
          : null
        }
        <div className='w-full '>
          <p>Email</p>
          <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" required />
        </div>
        <div className='w-full '>
          <p>Contraseña</p>
          <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" required />
        </div>
        <button className='bg-primary text-white w-full py-2 my-2 rounded-md text-base'>{state === 'Sign Up' ? 'Crear cuenta' : 'Inicie sesión'}</button>
        
        {state === 'Sign Up'
          ? <p>Ya tienes una cuenta? <span onClick={() => setState('Login')} className='text-primary underline cursor-pointer'>inicia sesion aqui</span></p>
          : <>
            <p>Desea crear una nueva cuenta? <span onClick={() => setState('Sign Up')} className='text-primary underline cursor-pointer'>Haga click aqui</span></p>
            <p>¿Olvidaste tu contraseña? <span onClick={() => setShowResetPassword(true)} className='text-primary underline cursor-pointer'>Recupérala aquí</span></p>
          </>
        }

        {showResetPassword && (
          <div className='w-full mt-4'>
            <p>Ingresa tu correo para recuperar tu contraseña:</p>
            <input
              type="email"
              className='border border-[#DADADA] rounded w-full p-2 mt-1'
              placeholder="Correo electrónico"
              onChange={(e) => setResetEmail(e.target.value)}
              value={resetEmail}
              required
            />
            <button
              type="button"
              className='bg-secondary text-white w-full py-2 mt-2 rounded-md text-base'
              onClick={handlePasswordReset}
            >
              Enviar solicitud
            </button>
            <button
              type="button"
              className='text-gray-600 mt-2 underline'
              onClick={() => setShowResetPassword(false)}
            >
              Cancelar
            </button>
          </div>
        )}
      </div>
    </form>
  )
}

export default Login
