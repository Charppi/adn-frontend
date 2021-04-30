import React from "react"
import { Layout } from '../../../shared/components/Layout';

const MainPage: React.FC = () => {
    return <Layout title="Usuarios" description="Gestión de usuarios">
        <h2>Hola desde usuarios</h2>
    </Layout>
}
MainPage.displayName = 'UsuarioMainPage';

export default MainPage