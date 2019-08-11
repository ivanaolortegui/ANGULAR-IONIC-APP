import { Component } from '@angular/core';


import { ToDoService } from '../../services/to-do.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public toDo : ToDoService , private router: Router ) {
    
  }

  addList(){
    this.router.navigateByUrl('/add')
  }
}
