import { useState, useEffect } from 'react'
import { UserContext } from './UserContext'
import type { User } from '../types/user.types'

interface Props {
    children: React.ReactNode
}

export const UserContextProvider = ({ children }: Props) => {
    const [userInfo, setUserInfo] = useState<User | null>(null) // tener la informacion del usuario una vez registrado
    const [loading, setLoading] = useState(true)

    // Funcion para verificar la sesion del usuario
    const checkSession = async () => {
        try {
            setLoading(true)
            // const userData = await getprofileService() funcion para hacer peticion para verificar el usuario
            // setUserInfo(userData)
        } catch (error) {
            console.log('No hay sesion activga:', error)
            setUserInfo(null)
        } finally {
            setLoading(false)
        }
    }

    // Funciona para obtener el id del usuario autenticado
    const getUserId = () => {
        return userInfo?.id || null
    }

    // Verificar si el usuario esta autenticado o no
    const isAuthenticated = () => {
        return !!userInfo?.id
    }

    useEffect(() => {
        checkSession()
    }, [])

    return (
        <UserContext.Provider
            value={{
                userInfo,
                setUserInfo,
                loading,
                checkSession,
                getUserId,
                isAuthenticated,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}
