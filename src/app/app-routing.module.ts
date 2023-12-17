import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { SubcategoryPageComponent } from './subcategory-page/subcategory-page.component';
const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'subcategory/:name', component: SubcategoryPageComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }, // Default redirection to 'home'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
