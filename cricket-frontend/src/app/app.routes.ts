import { Routes } from '@angular/router';
import { PlayerListComponent } from './components/player-list/player-list';
import { PlayerDetailComponent } from './components/player-detail/player-detail';
import { LoginComponent } from './components/login/login';

export const routes: Routes = [
    { path: '', component: PlayerListComponent },
    { path: 'player/:id', component: PlayerDetailComponent },
    { path: 'login', component: LoginComponent }
];