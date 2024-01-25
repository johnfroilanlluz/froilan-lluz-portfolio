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
export class PortfolioComponent implements OnInit{

  projects = {} as Project[];
  isCollapsed = true;
  typescript = false;




  constructor(private titleService: Title,private projectService: ProjectsService ) {
    this.titleService.setTitle('John Froilan | Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }
  Filter(){
    let filterTags:Tag[] = [];

    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT);
    }

    this.projects = this.projectService.GetProjectByFilter(filterTags);
  }
  
}
