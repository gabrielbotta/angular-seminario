import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ComponentsComponent } from './pages/components/components.component';
import { BindingComponent } from './pages/binding/binding.component';
import { FluxoComponent } from './pages/fluxo/fluxo.component';
import { ComunicacaoComponent } from './pages/comunicacao/comunicacao.component';
import { SignalsComponent } from './pages/signals/signals.component';
import { ApiComponent } from './pages/api/api.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'components', component: ComponentsComponent },
  { path: 'binding', component: BindingComponent },
  { path: 'fluxo', component: FluxoComponent },
  { path: 'comunicacao', component: ComunicacaoComponent },
  { path: 'signals', component: SignalsComponent },
  { path: 'api', component: ApiComponent },
  { path: '**', redirectTo: 'inicio' },
];
