import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { DynamicFieldDirective, ZLoaderComponent, ZNavbarComponent,
   ZRequestInterceptor, ZResponseInterceptor, ZSimpleButtonComponent, ZInputMaskComponent, ZViewPortObserverDirective } from '@zumlo/ui'; //Library
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { BaseComponent } from './base/base.component';
import { FooterComponent } from './base/components/footer/footer.component';
import { HeaderComponent } from './base/components/header/header.component';
import { HomeComponent } from './base/components/home.component';
import { MainLayoutComponent } from './base/components/main-layout/main-layout.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ToastrModule } from 'ngx-toastr';

// components-container
const components = [
  AppComponent,
  MainLayoutComponent,
  HeaderComponent,
  BaseComponent,
  HomeComponent,
  FooterComponent,
];

@NgModule({
  declarations: [components],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    CommonModule,
    DynamicFieldDirective,
    ReactiveFormsModule,
    ZSimpleButtonComponent,
    ZNavbarComponent,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    NgScrollbarModule,
    HttpClientModule,
    ZLoaderComponent,
    ZInputMaskComponent,
    ToastrModule.forRoot(),
    ZViewPortObserverDirective,
  ],
  providers: [provideClientHydration(),
  { provide: HTTP_INTERCEPTORS, useClass: ZResponseInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ZRequestInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
