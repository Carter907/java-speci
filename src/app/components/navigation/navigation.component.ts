import { Component } from '@angular/core';
import {faCoffee, faHome, faQuestion} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

    protected readonly faQuestion = faQuestion;
    protected readonly faHome = faHome;
    protected readonly faCoffee = faCoffee;
}
