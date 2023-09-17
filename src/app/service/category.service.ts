import {Injectable} from '@angular/core';
import {invoke} from "@tauri-apps/api/tauri";
import {Category} from "../model/category";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    constructor() {
    }

    get_all_categories(): Promise<Category[]> {

        return invoke<Category[]>("get_speci_categories")
    }
}
