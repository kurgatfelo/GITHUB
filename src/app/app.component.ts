import { Component } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';


@Component({
 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github';
  myImage:string ="assests/images/git,jpg"
}
