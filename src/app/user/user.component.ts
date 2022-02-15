import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service/user.service';
import { RepoService } from '../repo-service/repo.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user!:User;
  userRepo : any;

  constructor(private userService: UserService, private repoService : RepoService,private http:HttpClient) {
    this.user = new User('', '', '', '', 0, 0, 0, 0,);
  }
  // fetching user 
  performSearch(searchTerm:any) {
    this.userService.userRequest(searchTerm).then((success)=>{
      this.user = this.userService.user
    })
    // fetching repos
    this.repoService.displayRepo(searchTerm).then((success) => {
      this.userRepo = this.repoService.repo
      console.log("rrrrrrrrrrrrrrrrrrrrrrr")
      console.log(this.userRepo)
    },
    (error) => {
      console.log(error)
    }
  ) 
}
ngOnInit(): void {
  this.performSearch('kurgatfelo')
}
}
