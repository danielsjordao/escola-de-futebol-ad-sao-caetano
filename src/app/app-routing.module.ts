import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//Pages Components
import { HomeComponent } from './core/pages/components/home/home.component';
import { SobreComponent } from './core/pages/components/sobre/sobre.component';
import { ContatoComponent } from './core/pages/components/contato/contato.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'sobre',
    component: SobreComponent
  },
  {
    path:'contato',
    component: ContatoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
