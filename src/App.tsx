import { Route, Routes } from 'react-router'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import { UserContextProvider } from './context/UserProvider'

function App() {
    return (
        <UserContextProvider>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="login" element={<Login />}></Route>
                </Route>
            </Routes>
        </UserContextProvider>
    )
}

export default App
