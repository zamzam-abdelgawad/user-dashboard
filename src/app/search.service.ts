import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
private searchQ = new BehaviorSubject<string>("")
current = this.searchQ.asObservable()

constructor() { }

updateQ(Q:string): void{
  this.searchQ.next(Q)
}

}
