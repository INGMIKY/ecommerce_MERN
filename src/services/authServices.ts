import axios from 'axios'

import type { RegisterServiceProps } from '../types/auth.types'

const API_URL = import.meta.env.VITE_BACKEND_URL + '/auth'
// http://localhost:3001/api/auth/register

// Para incluir la cookies en las peticiones
axios.defaults.withCredentials = true

export const getProfileService = async () => {
    // obtener el usuario desde el backen dara saber si esta autenticado
    try {
        const response = await axios.get(`${API_URL}/profile`)
        console.log('Response a /profile', response)
        return response.data
    } catch (error) {
        console.log(error)
        throw new Error('Error al obtener el perfil')
    }
}
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
            // alert('Registro exitoso del usuario')
            // Verificar la sesion real del servidor despues del registro
            await checkSession()
            reset()
            setRedirect(true)

            return {
                message: true,
            }
        }
    } catch (error) {
        console.error('Hubo un probela al resitrarse', error)
        return {
            message: false,
        }
    }
}

export const logoutrService = async () => {}
