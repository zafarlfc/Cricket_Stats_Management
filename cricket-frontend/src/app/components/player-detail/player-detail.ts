import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-player-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './player-detail.html'
})
export class PlayerDetailComponent implements OnInit {

  player: any;
  commentText = '';
  rating = 5;
  loading = true;
  error: string | null = null;

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loadPlayer(+id);
      }
    });
  }

  loadPlayer(id: number) {
    this.loading = true;
    this.error = null;
    this.api.getPlayer(id)
      .pipe(finalize(() => this.loading = false))
      .subscribe({
        next: (data: any) => {
          this.player = data;
          console.log("Loader: ", this.loading);
        },
        error: (err) => {
          this.error = 'Could not load player details. Please try again later.';
          console.error('Error fetching player detail:', err);
        }
      });
    console.log("Loader: ", this.loading);
  }

  submitComment() {
    const token = localStorage.getItem('token');

    this.api.addComment({
      player: this.player.id,
      text: this.commentText
    }, token!).subscribe(() => {
      alert('Comment added');
      this.commentText = "";
      this.loadPlayer(this.player.id);
    });
  }

  submitRating() {
    const token = localStorage.getItem('token');

    this.api.addRating({
      player: this.player.id,
      score: this.rating
    }, token!).subscribe(() => {
      alert('Rating submitted');
      this.loadPlayer(this.player.id);
    });
  }
}