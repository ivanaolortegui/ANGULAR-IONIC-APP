import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../models/list-model';
import { ListItem } from '../models/list-item.model';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(lists: List[], finished: boolean= true): List[] {
    return lists.filter(list => list.finished === finished);
  }

}
