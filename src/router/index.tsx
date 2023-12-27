import { lazy, Suspense } from 'react'
import { Routes, Route, Outlet, Navigate, useLocation } from 'react-router-dom'

import { useAppSelector } from '@hooks/useAppSelector'
import { selectPassword, selectUsername } from '@store/slices/auth'

const MainLayout = lazy(() => import('@layouts/main-layout'))
const AuthLayout = lazy(() => import('@layouts/auth-layout'))
const Home = lazy(() => import('@pages/home'))
const Settings = lazy(() => import('@pages/settings'))
const Conversation = lazy(() => import('@pages/conversation'))
const Login = lazy(() => import('@pages/login'))

function ProtectedRoute() {
    const username = useAppSelector(selectUsername)
    const password = useAppSelector(selectPassword)
    const location = useLocation()

    if (username !== 'admin' && password !== '111') {
        return <Navigate to="auth/login" state={{ path: location.pathname }} />
    }

    return <Outlet />
}

export const AppRoutes = () => {
    return (
        <Suspense>
            <Routes>
                <Route element={<ProtectedRoute />}>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Home />} />
                        <Route path="settings" element={<Settings />} />
                        <Route path="conversation" element={<Conversation />} />
                    </Route>
                </Route>
                <Route path="/auth" element={<AuthLayout />}>
                    <Route path="login" element={<Login />} />
                </Route>
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </Suspense>
    )
}
