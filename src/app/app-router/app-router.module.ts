import {NgModule} from '@angular/core';
import {RouterModule, Routes, UrlSegment} from "@angular/router";
import {HomeComponent} from "../pages/home/home.component";
import {CategoriesComponent} from "../pages/categories/categories.component";
import {AssessmentComponent} from "../pages/assessment/assessment.component";
import {AccountComponent} from "../pages/account/account.component";
import {EditCategoriesComponent} from "../pages/edit-categories/edit-categories.component";
import {EditQuestionsComponent} from "../pages/edit-questions/edit-questions.component";
import {EditAssessmentsComponent} from "../pages/edit-assessments/edit-assessments.component";


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'chapter/:chapter', component: AssessmentComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'account', component: AccountComponent },
    { path: 'edit-categories/edit-assessments/:assessment', component: EditAssessmentsComponent },
    { path: 'edit-categories/edit-assessments/:assessment/edit-questions/:question', component: EditQuestionsComponent},
    { path: 'edit-categories', component: EditCategoriesComponent }
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
