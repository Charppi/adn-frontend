import * as React from 'react';
import { Layout } from '../../../shared/components/Layout';
import { ProveedorGestionInmuebles } from '../hoc/ProveedorGestionInmuebles'
import { RouteComponentProps } from 'react-router-dom';

const MainPage: React.FC<RouteComponentProps> = () => {
    return (
        <Layout title="Inmuebles" description="Gestión de inmuebles">
            <ProveedorGestionInmuebles />
        </Layout>
    )
};

MainPage.displayName = 'MainPage';

export default MainPage;
