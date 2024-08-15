import { LoaderService } from './../loader.service';
import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-loader',
  standalone: true,
  imports : [AsyncPipe],
  template : `<div
  class="loader-container"
  [class.loading]="LoaderService.loading | async"
>
  <div class="loader-overlay">
    <div class="spinner"></div>
  </div>
  <div class="content">
    <ng-content></ng-content>
  </div>
</div>`,

  styles: [
    `
      .loader-container {
        width: 100%;
        height: 100%;
      }
      .loader-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s, visibility 0.3s;
      }
      .loading .loader-overlay {
        opacity: 1;
        visibility: visible;
      }
      .spinner {
        width: 50px;
        height: 50px;
        border: 6px solid #ffffff;
        border-top: 6px solid #007bff;
        border-radius: 50%;
        animation: spin .6s linear infinite;
      }
      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      .content {
        transition: opacity 0.3s;
      }
      .loading .content {
        opacity: 0;
    }
  `,
],
})


export class LoaderComponent implements OnInit {

  constructor(public LoaderService:LoaderService) { }

  ngOnInit() {
  }

}
