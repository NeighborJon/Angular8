import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductGetComponent, ProductEditComponent, ProductAddComponent } from './components';


const routes: Routes = [
  {
    path: 'product/:id',
    component: ProductEditComponent
  },
  {
    path: 'product',
    component: ProductAddComponent
  },
  {
    path: 'products',
    component: ProductGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
