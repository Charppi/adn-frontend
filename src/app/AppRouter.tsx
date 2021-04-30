import * as React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { NavigationHeader } from 'app/shared/components/NavigationHeader';
import { ProductoRouter } from 'app/feature/Producto/ProductoRouter';
import { InmuebleRouter } from 'app/feature/Inmuebles/InmuebleRouter';
import { UsuariosRouter } from 'app/feature/Usuarios/UsuariosRouter';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavigationHeader />
      <Switch>
        <Route path="/inmuebles" component={InmuebleRouter} />
        <Route path="/productos" component={ProductoRouter} />
        <Route path="/usuarios" component={UsuariosRouter} />
        <Route path="/**" render={() => <Redirect to="/inmuebles" />} />
      </Switch>
    </BrowserRouter>
  );
};
