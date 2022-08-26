import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import IProject from '../models/project.model';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit, OnDestroy{
  @Input() categoryID: string = '';
  @Input() limit: number = 3;
  @Input() scrollable: boolean = false;

  allowRefresh: boolean = true;

  faGithubAlt = faGithubAlt as IconProp;
  constructor(public projectService: ProjectService) {
    
  }

  ngOnInit(): void {
    this.projectService.getProjects(this.categoryID, this.limit);
    if (this.scrollable) {
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  
  ngOnDestroy(): void {
    if (this.scrollable) {
      window.removeEventListener('scroll', this.handleScroll);
    }

    this.projectService.unRegister(this.categoryID);
  }
  handleScroll = async() => {
    const { scrollTop, offsetHeight } = document.documentElement;
    const { innerHeight } = window;
    const length = this.projectService.getProjectById(this.categoryID)?.length ?? 0
    const bottomOfWindow = Math.round(scrollTop) + innerHeight === offsetHeight;
    if (bottomOfWindow && this.allowRefresh) {
      await this.projectService.getProjects(this.categoryID, 3);
      if(length === this.projectService.getProjectById(this.categoryID)?.length ?? 0) {
        this.allowRefresh = false;
      }
    }
  };
}
