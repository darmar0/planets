import {Component, OnInit} from '@angular/core';
import {LoadingService} from './loading/loading/loading.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoadingService]
})
export class AppComponent implements OnInit {

  constructor() {
  }
  ngOnInit() {
  }
}
