import {Component, Input} from '@angular/core';
import {Category} from "../../model/category";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  @Input() category: Partial<Category> = { title: "none", description: "none"};

}
