import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FooterComponent} from "./core/footer/footer.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimations } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from "ngx-pagination";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
//import { NgxMaskModule, IConfig } from 'ngx-mask';
import {CoreModule} from "./core/core.module";

/*const maskConfig: Partial<IConfig> = {
  validation: true,
};*/

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    //NgxMaskModule.forRoot(maskConfig), // Configuración global
    CoreModule,
  ],
  providers: [provideAnimations(),provideHttpClient(),
  ],

  bootstrap: []
})
export class AppModule { }
