import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { Error404Component } from './pages/error404/error404.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ProductosDetallesComponent } from './components/productos-detalles/productos-detalles.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'nosotros', component: NosotrosComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'productos-detalles/:idProductos', component: ProductosDetallesComponent },
    {path: 'login', component: LoginComponent },


    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component: Error404Component}
];
    