import { Component } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faLinkedinIn = faLinkedinIn as IconProp;
  faGithubAlt = faGithubAlt as IconProp;
}
