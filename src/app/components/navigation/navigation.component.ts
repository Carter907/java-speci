import { Component } from '@angular/core';
import {faCoffee, faEdit, faHome, faPerson, faQuestion, faUser} from "@fortawesome/free-solid-svg-icons";
import {faAccusoft} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

    protected readonly faQuestion = faQuestion;
    protected readonly faCoffee = faCoffee;
    protected readonly faUser = faUser;
    protected readonly faEdit = faEdit;
}
