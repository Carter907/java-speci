import {NgModule} from '@angular/core';
import {RouterModule, Routes, UrlSegment} from "@angular/router";
import {HomeComponent} from "../pages/home/home.component";
import {CategoriesComponent} from "../pages/categories/categories.component";
import {AssessmentComponent} from "../pages/assessment/assessment.component";


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'chapter/:chapter', component: AssessmentComponent },
    { path: 'categories', component: CategoriesComponent },
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRouterModule {
}
