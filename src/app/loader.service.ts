import { Injectable } from '@angular/core';
import { time } from 'console';
import { BehaviorSubject, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
private loadingSub = new BehaviorSubject <boolean> (false)
loading = this.loadingSub.asObservable()
private loaderTime = 500

constructor() { }

show(): void{
  this.loadingSub.next(true)
  console.log("ON")
}

hide(): void{
  setTimeout(() => {
    this.loadingSub.next(false)
  },
  this.loaderTime)
  console.log("OFF")
  }
}


