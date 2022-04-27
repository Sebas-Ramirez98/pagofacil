
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PrestamoComponent } from './components/prestamo/prestamo.component';
import { RedpagosComponent } from './components/redpagos/redpagos.component';
import { TarjetacreditoComponent } from './components/tarjetacredito/tarjetacredito.component';
import { TokoiteComponent } from './components/tokoite/tokoite.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'prestamo', component: PrestamoComponent },
  { path: 'redpagos', component: RedpagosComponent },
  { path: 'tarjetacredito', component: TarjetacreditoComponent },
  { path: 'tokoite', component: TokoiteComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
