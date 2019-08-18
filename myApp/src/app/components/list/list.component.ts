import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ToDoService } from '../../services/to-do.service';
import { List } from '../../models/list-model';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

@Input() finished = true;

  constructor( public toDo :ToDoService, private router: Router) { }

  ngOnInit() {}

  selectedList(list : List){  
    if(this.finished){
      this.router.navigateByUrl(`tabs/tab2/add/${ list.id }`)
    } else {
      this.router.navigateByUrl(`tabs/tab1/add/${ list.id }`)
    }
   
  
  }

}
