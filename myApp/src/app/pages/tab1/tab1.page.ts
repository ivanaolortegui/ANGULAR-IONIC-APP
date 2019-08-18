import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


import { ToDoService } from '../../services/to-do.service';
import { Router } from '@angular/router';
import { ListItem } from '../../models/list-item.model';
import { List } from '../../models/list-model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public toDo: ToDoService , private router: Router, private alertController: AlertController ) {
  }

  async addList() {

    const alert = await this.alertController.create({
      header: 'Nueva lista',
      inputs: [{
        name: 'title',
        type: 'text',
        placeholder: 'Nombre de la lista'
      }],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Crear',
          handler: (data) => {
            console.log(data);
            if (data.title.length === 0) {
              return;
            }
            const listId = this.toDo.createList(data.title);
            this.router.navigateByUrl(`tabs/tab1/add/${ listId }`);
          }
        }
      ]
    });
    alert.present();
  }
}
