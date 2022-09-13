import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DecryptionComponent } from './decryption/decryption.component';
import { EncryptionReactiveComponent } from './encryption-reactive/encryption-reactive.component';
import { AlgorithmsComponent } from './encryption-reactive/algorithms/algorithms.component';
import { DescriptionComponent } from './description/description.component';
import { EncryptionTemplateDrivenComponent } from './encryption-template-driven/encryption-template-driven.component';
import { ObservableInitialComponent } from './observable/observable.component';
import { ObservableFinalComponent } from './http/http.component';
import { AuthInterceptorService } from './http/auth-interceptor.service';
import { LoggingInterceptorService } from './http/logging-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    DecryptionComponent,
    EncryptionReactiveComponent,
    AlgorithmsComponent,
    DescriptionComponent,
    EncryptionTemplateDrivenComponent,
    ObservableInitialComponent,
    ObservableFinalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
