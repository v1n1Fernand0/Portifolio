import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component'
import {SobreComponent} from './components/sobre/sobre.component'
import {ApresentacaoComponent} from './components/apresentacao/apresentacao.component'

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"sobre",
    component:SobreComponent
  },
  {
    path:"apresentacao",
    component:ApresentacaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
