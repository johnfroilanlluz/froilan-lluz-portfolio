import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { ProjectsService } from '../_services/projects.service';
import { Tag } from '../_models/Tag';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  projects = {} as Project[];
  isCollapsed = true;
  typescript = false;
  angular = false;
  python = false;
  javascript = false;
  flask = false;
  nodejs = false;
  electron = false;

  constructor(
    private titleService: Title,
    private projectService: ProjectsService
  ) {
    this.titleService.setTitle('John Froilan | Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }
  Filter() {
    let filterTags: Tag[] = [];

    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT);
    }
    if (this.angular) {
      filterTags.push(Tag.ANGULAR);
    }
    if (this.python) {
      filterTags.push(Tag.PYTHON);
    }
    if (this.javascript) {
      filterTags.push(Tag.JAVASCRIPT);
    }
    if (this.flask) {
      filterTags.push(Tag.FLASK);
    }
    if (this.nodejs) {
      filterTags.push(Tag.NODEJS);
    }
    if (this.electron) {
      filterTags.push(Tag.ELECTRON);
    }
    this.projects = this.projectService.GetProjectByFilter(filterTags);
  }
}
