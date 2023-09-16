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

@NgModule({
  declarations: [AppComponent, HomeComponent, CategoriesComponent, NavigationComponent, CategoryComponent, AssessmentComponent],
  imports: [BrowserModule, FontAwesomeModule, AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
