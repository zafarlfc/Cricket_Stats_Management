import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-player-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './player-list.html'
})
export class PlayerListComponent {

  players: any[] = [];
  loading = true;

  constructor(private api: ApiService) {
    this.loadPlayers();
  }

  loadPlayers() {
    this.api.getPlayers().subscribe({
      next: (data: any) => {
        this.players = data.results || data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
}