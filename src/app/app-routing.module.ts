import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductGetComponent, ProductEditComponent, ProductAddComponent } from './components';


const routes: Routes = [
  {
    path: 'edit/:id',
    component: ProductEditComponent
  },
  {
    path: 'product/create',
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
