import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EncryptionReactiveComponent } from './encryption-reactive/encryption-reactive.component';
import { DecryptionComponent } from './decryption/decryption.component';
import { DescriptionComponent } from './description/description.component';
import { EncryptionTemplateDrivenComponent } from './encryption-template-driven/encryption-template-driven.component';
import { AlgorithmsComponent } from './encryption-reactive/algorithms/algorithms.component';
import { ObservableInitialComponent } from './observable/observable.component';
import { ObservableFinalComponent } from './http/http.component';

const routes: Routes = [
  { path: "encryption-reactive", component: EncryptionReactiveComponent },
  { path: "encryption-template-driven", component: EncryptionTemplateDrivenComponent },
  { path: "decryption", component: DecryptionComponent },
  { path: "", component: DescriptionComponent },
  { path: "algorithms", component: AlgorithmsComponent },
  { path: "observable", component: ObservableInitialComponent },
  { path: "http", component: ObservableFinalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
