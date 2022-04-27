import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Rutas
import { APP_ROUTING } from './app.routes';
//Servicios

//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { PrestamoComponent } from './components/prestamo/prestamo.component';
import { RedpagosComponent } from './components/redpagos/redpagos.component';
import { TarjetacreditoComponent } from './components/tarjetacredito/tarjetacredito.component';
import { TokoiteComponent } from './components/tokoite/tokoite.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactoComponent,
    NosotrosComponent,
    PrestamoComponent,
    RedpagosComponent,
    TarjetacreditoComponent,
    TokoiteComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    BodyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
