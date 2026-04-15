import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api';
import { RouterModule } from '@angular/router';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-player-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './player-list.html'
})
export class PlayerListComponent implements OnInit {

  players: any[] = [];
  loading = true;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.loadPlayers();
  }

  loadPlayers() {
    this.api.getPlayers()
      .pipe(finalize(() => this.loading = false))
      .subscribe({
        next: (data: any) => {
          this.players = data.results || data;
        },
        error: (err) => {
          console.error('Error fetching players:', err);
        }
      });
  }
}