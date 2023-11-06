import { AfterViewInit, Component } from '@angular/core';
import { initCarousels } from 'flowbite';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit(){
    initCarousels();
  }

}
