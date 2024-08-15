import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true
})
export class CardComponent {
  @Input() name!: string;
  @Input() avatar!: string;
  @Input() id!: number; 

  constructor(private router: Router) {}

  ShowUserDetils(userId: number): void {
    console.log(userId);
    this.router.navigate(['/user-details', userId]);
  }
}
