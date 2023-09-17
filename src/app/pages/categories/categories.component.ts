import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Category} from "../../model/category";
import {invoke} from "@tauri-apps/api/tauri";
import {faArrowLeft, faBackward} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";
import {CategoryService} from "../../service/category.service";

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
    categories: Category[] = [];

    constructor(private router: Router, private service: CategoryService) {
        service.get_all_categories().then(categories => {
            this.categories = categories;
        })
    }

    ngOnInit(): void {

    }

    protected readonly faBackward = faBackward;
    protected readonly faArrowLeft = faArrowLeft;

    onClick() {

    }
}
