import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full', data: { title: false, animation: 'HomePage' } },
    { path: 'home', component: HomeComponent, data: { title: false, animation: 'HomePage'} },
    { path: 'stats', component: ResultComponent, data: { title: false, animation: 'StatsPage'} }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
