import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-code-panel',
  templateUrl: './code-panel.component.html',
  styleUrls: ['./code-panel.component.css']
})
export class CodePanelComponent {
  @Input() code: String[] = []
}
