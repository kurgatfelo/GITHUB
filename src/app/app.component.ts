import { Component } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 
})
export class AppComponent {
  title = 'github';
  myImage:string ="assests/images/git,jpg"
}
