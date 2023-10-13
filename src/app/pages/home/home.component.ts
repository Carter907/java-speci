import {Component, OnInit} from '@angular/core';
import {faCoffee} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    protected readonly faCoffee = faCoffee;


    openJavaSpecs() {
        window.open('https://docs.oracle.com/javase/specs/index.html', '_blank')
    }


    ngOnInit() {
        // this.httpClient.get(`/assets/markdown/home.md`,
        //     {
        //         responseType: 'text'
        //     }).subscribe ( text => {
        //         this.markdownRaw = text;
        // });
        //
        // this.markdown=this.mdService.parse(this.markdownRaw);
    }

}
