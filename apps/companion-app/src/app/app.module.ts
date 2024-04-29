import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { ZConfigInterceptor, ZLoaderComponent, ZRequestInterceptor, ZResponseInterceptor, ZToastrService } from '@zumlo/ui';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { UiModule } from 'libs/ui/src/modules/ui/ui.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    UiModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ZLoaderComponent,
    ToastrModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ZConfigInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ZRequestInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ZResponseInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
