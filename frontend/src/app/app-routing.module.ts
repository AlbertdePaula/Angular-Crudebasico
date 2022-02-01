import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { OrdersComponent } from './views/orders/orders.component';
import { ScheduleComponent } from './views/schedule/schedule.component';
import { CodeListComponent } from './views/code-list/code-list.component';

const routes: Routes = [
  {
  path:"",
  component: HomeComponent
},{
  path:"products",
  component: ProductCrudComponent
},{
  path: "orders",
  component: OrdersComponent
},{
  path: "schedule",
  component: ScheduleComponent
},{
  path: "code-list",
  component: CodeListComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }