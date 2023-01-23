import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { LeftSideNavComponent } from './core/components/left-side-nav/left-side-nav.component';
import { RequestResponseInterceptor } from './core/interceptors/request-response.interceptor';
import { AppService } from './app.service';
import { StoreModule } from '@ngrx/store';
import { AppReducer } from './app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftSideNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({app: AppReducer}, {})
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: RequestResponseInterceptor, multi: true
    },
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
