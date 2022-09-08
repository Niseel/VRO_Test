import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './pages/home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { NgModule } from '@angular/core';
import { ShareModule } from './shared/shared.module';

const declarations = [AppComponent, LayoutComponent];
const imports = [
  BrowserModule,
  AppRoutingModule,
  HomeModule,
  ShareModule,
  HttpClientModule,
];

@NgModule({
  declarations: [...declarations],
  imports: [...imports],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
