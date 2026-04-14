import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-player-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './player-detail.html'
})
export class PlayerDetailComponent {

  player: any;
  commentText = '';
  rating = 5;

  constructor(private api: ApiService, private route: ActivatedRoute) {
    const id = this.route.snapshot.params['id'];

    this.api.getPlayer(id).subscribe((data: any) => {
      this.player = data;
    });
  }

  submitComment() {
    const token = localStorage.getItem('token');

    this.api.addComment({
      player: this.player.id,
      text: this.commentText
    }, token!).subscribe(() => {
      alert('Comment added');
    });
  }

  submitRating() {
    const token = localStorage.getItem('token');

    this.api.addRating({
      player: this.player.id,
      score: this.rating
    }, token!).subscribe(() => {
      alert('Rating submitted');
    });
  }
}