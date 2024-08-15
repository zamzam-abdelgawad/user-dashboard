import { SearchService } from './../search.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { UserService } from '../user.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { HoverHighlightDirective } from '../hover-highlight.directive';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { HeaderComponent } from "../header/header.component";

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
}

@Component({
  selector: 'app-cards-container',
  standalone: true,
  imports: [CommonModule, CardComponent, HttpClientModule, HoverHighlightDirective, HeaderComponent],
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [animate('1s ease-in')])
    ])
  ]
})

export class CardsContainerComponent implements OnInit {
  users: User[] = [];
  filterdUser: User[] = []
  isLoading: boolean = false

  constructor(private userService: UserService , private router:Router,
    private SearchService: SearchService
  ) {}

  ngOnInit(): void {
    this.fetchUsers(1);
    this.SearchService.current.subscribe(q => {
      if(q){
        this.filterdUser = this.users.filter(item => item.id.toString()===q)
      }else{
        this.filterdUser = this.users
      }
    })
  }

  fetchUsers(page: number): void {
    this.isLoading = true
    this.userService.getUsers(page).subscribe(response => {
      console.log(response.data);
      this.users = response.data;
      this.filterdUser = this.users;
      this.isLoading = false
    });
  }

  ShowUserDetils(userId:Number):void{
    console.log(userId);
    this.router.navigate(['/user-details', userId]);
  }
}
