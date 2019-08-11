import { Injectable } from '@angular/core';

import { List } from '../models/list-model';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  list : List[] = [];

  constructor() {
    const list1 = new List('Campo');
    const list2 = new List('hello')
    this.list.push(list1, list2)
    
    console.log(this.list);
    
   }

}
