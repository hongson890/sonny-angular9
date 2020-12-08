import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './components/third/third.component';

const routes: Routes = [{ 
  path: 'first',
  component: FirstComponent
}, { 
  path: 'second',
  component: SecondComponent,
  data: {
    title: 'Title of Second A Component',
    descrption: 'Description of Second A Component',
    robots: 'Robots of Second A Component',
    ogTitle: 'Title of Second A Component for social media',
    ogDescription: 'Description of Second A Component for social media',
  }
}, { 
  path: 'third',
  component: ThirdComponent
}, { 
  path: '**', redirectTo: '/' 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }