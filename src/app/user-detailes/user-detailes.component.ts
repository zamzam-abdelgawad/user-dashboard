import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-detailes',
  templateUrl: './user-detailes.component.html',
  styleUrls: ['./user-detailes.component.css']
})
export class UserDetailesComponent implements OnInit {
  user: any;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.fetchUserDetails(userId);
    }
  }

  fetchUserDetails(id: string): void {
    this.userService.getUser(id).subscribe(response => {
      console.log(response.data);
      this.user = response.data;
      console.log(this.user , "done");
    });
  }

  goBack(): void{
    this.location.back();
  }
}
