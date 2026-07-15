import { Component } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { EDUCATION_ENTRIES, EducationEntry } from './data/education';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faLinkedinIn = faLinkedinIn as IconProp;
  faGithubAlt = faGithubAlt as IconProp;

  highlights = [
    'Built & operated marketplaces and SaaS',
    'Direct access, no account managers',
    'Strategy + execution in one place',
  ];

  education: EducationEntry[] = EDUCATION_ENTRIES;
}
