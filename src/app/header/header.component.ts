import { SearchService } from './../search.service';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true
})
export class HeaderComponent {
  searchControl = new FormControl('');

  constructor(private userService: UserService, private router: Router,
    private SearchService: SearchService) {}

  ngOnInit(): void {
  }

  filter(event: Event): void{
    const searchValue = (event.target as HTMLInputElement).value;
    this.SearchService.updateQ(searchValue)
  }

}
