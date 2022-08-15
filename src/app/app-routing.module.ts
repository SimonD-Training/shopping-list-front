import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ShoplistComponent } from './pages/shoplist/shoplist.component';

const routes: Routes = [
  {path: "list", component: ShoplistComponent},
  {path: "cat", component: CategoriesComponent},
  {path: "**", redirectTo: "list"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
