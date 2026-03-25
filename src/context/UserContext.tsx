import { createContext } from 'react'
import type { User } from '../types/user.types'

export interface UserContextType {
    userInfo: User | null
    setUserInfo: React.Dispatch<React.SetStateAction<User | null>>
    loading: boolean
    checkSession: () => Promise<void>
    getUserId: () => string | null
    isAuthenticated: () => boolean
}

export const UserContext = createContext<UserContextType | null>(null)
