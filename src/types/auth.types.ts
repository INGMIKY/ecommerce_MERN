export interface RegisterData {
    username: string
    email: string
    password: string
}

export interface RegisterServiceProps {
    data: RegisterData
    reset: () => void
    setRedirect: (value: boolean) => void
    checkSession: () => void
}
