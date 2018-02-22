import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AnswersComponent } from './answers/answers.component';
import { AnotherComponent } from './another/another.component';

const routes: Routes = [
  { path: 'another', component: AnotherComponent },
  { path: 'home', component: AnswersComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
