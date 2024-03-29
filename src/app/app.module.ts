import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./app.component";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HomeComponent} from './pages/home/home.component';
import {CategoriesComponent} from './pages/categories/categories.component';
import {AppRouterModule} from "./app-router/app-router.module";
import {NavigationComponent} from './components/navigation/navigation.component';
import {CategoryComponent} from './components/category/category.component';
import {AssessmentComponent} from './pages/assessment/assessment.component';
import {QuestionComponent} from './components/question/question.component';
import {CodePanelComponent} from './components/code-panel/code-panel.component';
import {AddQuestionFormComponent} from './components/add-question-form/add-question-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SortQuestionsByDateAddedPipe } from './pipes/sort-questions-by-date-added.pipe';
import { EditAssessmentsComponent } from './pages/edit-assessments/edit-assessments.component';
import {EditQuestionsComponent} from "./pages/edit-questions/edit-questions.component";
import {EditCategoriesComponent} from "./pages/edit-categories/edit-categories.component";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CategoriesComponent,
        NavigationComponent,
        CategoryComponent,
        AssessmentComponent,
        QuestionComponent,
        CodePanelComponent,
        AddQuestionFormComponent,
        SortQuestionsByDateAddedPipe,
        EditAssessmentsComponent,
        EditQuestionsComponent,
        EditCategoriesComponent
    ],
    imports: [
        BrowserModule,
        FontAwesomeModule,
        AppRouterModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ],
    exports: [
        AddQuestionFormComponent
    ]
})
export class AppModule {}
