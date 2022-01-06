import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InitGuard } from './guards/init.guard';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    canActivate: [InitGuard]
  },
  { path: '**', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
