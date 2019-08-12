import { Injectable } from '@angular/core';

import { List } from '../models/list-model';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  list : List[] = [];

  constructor() {
    const list1 = new List('Ir a Laboratoria');
    const list2 = new List('Ir al BCP')
    this.list.push(list1, list2)
    
    console.log(this.list);
    
   }

}
