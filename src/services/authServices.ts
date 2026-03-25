import axios from 'axios'

import type { RegisterServiceProps } from '../types/auth.types'

const API_URL = import.meta.env.VITE_BACKEND_URL + '/auth'
// http://localhost:3001/api/auth/register

// Para incluir la cookies en las peticiones
axios.defaults.withCredentials = true

export const getProfileService = async () => {}
export const loginService = async () => {}

export const registerService = async ({
    data,
    reset,
    setRedirect,
    checkSession,
}: RegisterServiceProps) => {
    try {
        const response = await axios.post(`${API_URL}/register`, data, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        })

        console.log('RESPUESTA', response)

        if (response.status === 201 || response.status === 200) {
            alert('Registro exitoso del usuario')
            reset()
        }
    } catch (error) {
        alert('Error al registrarse')
        console.error(error)
    }
}

export const logoutrService = async () => {}
