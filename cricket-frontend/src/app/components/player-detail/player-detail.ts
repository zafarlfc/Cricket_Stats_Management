import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api';

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

  constructor(private api: ApiService, private route: ActivatedRoute, private cdr: ChangeDetectorRef) { }

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
    this.api.getPlayer(id).subscribe({
      next: (data: any) => {
        console.log('SUCCESS', data);
        this.player = data;
        this.loading = false;
        this.cdr.detectChanges();   // ✅ IMPORTANT
      },
      error: (err) => {
        console.error(err);
        this.error = 'Could not load player details.';
        this.loading = false;
        this.cdr.detectChanges();   // ✅ IMPORTANT
      }
    });
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