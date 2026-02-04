import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

interface registerprops {
    email: string
    password: string
}

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<registerprops>({
        mode: 'onChange', // validacion en tiempo real
    })

    const onSubmit = (data: registerprops) => {
        //Logeando al usuario
        console.log(data)
        reset()
    }

    // estado para mostrar contrasenia
    const [showPassword, setShowPassword] = useState(false)

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 flex flex-col gap-4 lg:gap-6 max-w-[500px] mx-auto"
        >
            <div>
                <input
                    {...register('email', {
                        required: 'El correo electronico es requerido',
                        pattern: {
                            value: /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9-]*\.)+[a-z]{2,}$/,
                            message: 'Correo electronico invalido',
                        },
                        minLength: {
                            value: 6,
                            message: 'Minimo 6 caracteres',
                        },
                        maxLength: {
                            value: 254,
                            message: 'Maxio 254 caracteres',
                        },
                    })}
                    autoComplete="email"
                    name="email"
                    type="email"
                    placeholder="Correo electronico"
                    className={`p-2 outline-2 rounded border focus:outline-primary w-full ${
                        errors.email
                            ? 'border-red-500 outline-red-500 focus:outline-red-500'
                            : ''
                    }`}
                />
                {errors.email && (
                    <p className="text-red-500 text-sm mt-2 ml-1">
                        {errors.email?.message}
                    </p>
                )}
            </div>
            <div className="relative">
                <input
                    {...register('password', {
                        required:
                            'La contrasenia es requerida [6 - 254 caracteres de longitud]',
                        minLength: {
                            value: 6,
                            message: 'Minimo 6 caracteres',
                        },
                        maxLength: {
                            value: 20,
                            message: 'Maximo 254 caracteres',
                        },
                    })}
                    autoComplete="current-password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="contraseña "
                    className={`p-2 outline-2 rounded border focus:outline-primary w-full ${
                        errors.password
                            ? 'border-red-500 outline-red-500 focus:outline-red-500'
                            : ''
                    }`}
                />
                <button
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={
                        showPassword
                            ? 'ocultar contrasenia'
                            : 'Mostrar contrania'
                    }
                    type="button"
                    className="cursor-pointer absolute right-4 top-[20px] transform -translate-y-1/2 text-gray-600"
                >
                    {showPassword ? (
                        <FaEyeSlash size={23} />
                    ) : (
                        <FaEye size={23} />
                    )}
                </button>
                {errors.password && (
                    <p className="text-red-500 text-sm mt-2 ml-1">
                        {errors.password?.message}
                    </p>
                )}
            </div>
            <button className="btn btn-primary" type="submit">
                Iniciar sesión
            </button>
        </form>
    )
}

export default LoginForm
