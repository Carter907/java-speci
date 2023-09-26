import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import {AppRouterModule} from "./app-router/app-router.module";
import { NavigationComponent } from './components/navigation/navigation.component';
import { CategoryComponent } from './components/category/category.component';
import { AssessmentComponent } from './pages/assessment/assessment.component';
import { QuestionComponent } from './components/question/question.component';
import { CodePanelComponent } from './components/code-panel/code-panel.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, CategoriesComponent,
    NavigationComponent, CategoryComponent, AssessmentComponent, QuestionComponent, CodePanelComponent],
  imports: [BrowserModule, FontAwesomeModule, AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
