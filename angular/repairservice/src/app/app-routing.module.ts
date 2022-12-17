import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { ItemsComponent } from './component/items/items.component';
import { OrdersComponent } from './component/orders/orders.component';
import { AdminComponent } from './component/admin/admin.component';
const routes: Routes = [
    {path: '', redirectTo:'welcome',pathMatch:'full'},
    {path: 'welcome', component: WelcomeComponent},
    {path: 'items', component: ItemsComponent},
    {path: 'orders', component: OrdersComponent},
    {path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
