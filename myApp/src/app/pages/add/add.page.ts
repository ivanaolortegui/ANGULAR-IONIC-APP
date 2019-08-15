import { Component, OnInit } from "@angular/core";
import { ToDoService } from "../../services/to-do.service";
import { ActivatedRoute } from "@angular/router";
import { List } from "../../models/list-model";
import { ListItem } from "../../models/list-item.model";

@Component({
  selector: "app-add",
  templateUrl: "./add.page.html",
  styleUrls: ["./add.page.scss"]
})
export class AddPage implements OnInit {
  list: List;
  nameItem = "";

  constructor(private toDo: ToDoService, private route: ActivatedRoute) {
    const listId = this.route.snapshot.paramMap.get("listId");
    this.list = this.toDo.getList(listId);
  }

  ngOnInit() {}

  addItem() {
    if (this.nameItem.length === 0) {
      return;
    }
    const newItem = new ListItem(this.nameItem);
    this.list.items.push(newItem);
    this.nameItem = "";
    this.toDo.saveStorage();
  }
  itemChange(item: ListItem) {
    const pending = this.list.items.filter(itemData => !itemData.finished)
      .length;
    if (pending === 0) {
      this.list.finishedTime = new Date();
      this.list.finished = true;
    } else {
      this.list.finishedTime = null;
      this.list.finished = false;
    }
    this.toDo.saveStorage();
  }
  delete(i : number){
    this.list.items.splice(i,1);
    this.toDo.saveStorage();
  }
}
