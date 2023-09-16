import {Component, OnInit} from '@angular/core';
import {Category} from "../../model/category";
import {invoke} from "@tauri-apps/api/tauri";
import {faArrowLeft, faBackward} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];

  constructor() {

  }

  ngOnInit(): void {
    invoke<Category[]>("get_speci_categories").then(
        categories => {
          this.categories = categories;
        }
    )
  }

  protected readonly faBackward = faBackward;
  protected readonly faArrowLeft = faArrowLeft;
}
