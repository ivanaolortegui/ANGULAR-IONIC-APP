import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

import { ToDoService } from '../../services/to-do.service';
import { List } from '../../models/list-model';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @ViewChild(IonList) list: IonList;

  @Input() finished = true;

  constructor(public toDo: ToDoService, private router: Router, private alertController: AlertController ) { }

  ngOnInit() { }

  selectedList(list: List) {
    if (this.finished) {
      this.router.navigateByUrl(`tabs/tab2/add/${list.id}`);
    } else {
      this.router.navigateByUrl(`tabs/tab1/add/${list.id}`);
    }
  }
  deleteList(list: List) {
    this.toDo.deleteList(list);

  }

  async editeList(list: List) {
    const alert = await this.alertController.create({
      header: 'Nueva lista',
      inputs: [{
        name: 'title',
        type: 'text',
        value: list.title,
        placeholder: 'Nombre de la lista'
      }],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.list.closeSlidingItems();
          }
        },
        {
          text: 'Actualizar',
          handler: (data) => {
            if (data.title.length === 0) {
              return;
            }
            list.title = data.title;
            this.toDo.saveStorage();
            this.list.closeSlidingItems();
          }
        }
      ]
    });
    alert.present();
  }

}
