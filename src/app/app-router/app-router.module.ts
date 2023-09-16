import {NgModule} from '@angular/core';
import {RouterModule, Routes, UrlSegment} from "@angular/router";
import {HomeComponent} from "../pages/home/home.component";
import {CategoriesComponent} from "../pages/categories/categories.component";
import {AssessmentComponent} from "../pages/assessment/assessment.component";


const routes: Routes = [
    {path: '', component: HomeComponent},
    {
        matcher: (url) => {
            let path = url[0].path;
            if (url.length === 1 && path.match(/^assessment-\d-\d+$/gm)) {
                return {
                    consumed: url,
                    posParams: {
                        chapter: new UrlSegment(
                            path.slice(
                                path.indexOf("-") + 1,
                                path.indexOf("-") + 2),
                            {}
                        ),
                        assessmentId: new UrlSegment(
                            path.slice(path.lastIndexOf("-") + 1), {}
                        )

                    }
                }
            }
            return null;
        },
        component: AssessmentComponent
    },

    {path: 'categories', component: CategoriesComponent},
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
