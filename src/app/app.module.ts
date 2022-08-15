import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component'
import { ShoplistComponent } from './pages/shoplist/shoplist.component'
import { HeaderComponent } from './components/header/header.component'
import { CategoriesComponent } from './pages/categories/categories.component'
import { FormsModule } from '@angular/forms'

@NgModule({
	declarations: [AppComponent, ShoplistComponent, HeaderComponent, CategoriesComponent],
	imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
