import { Component, OnInit } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  searchTerm?: string
  @Output() searchProf = new EventEmitter<any>();

  searchUser() {
    this.searchProf.emit(this.searchTerm)
  }
  constructor() { }

  ngOnInit(): void {
  }

}

