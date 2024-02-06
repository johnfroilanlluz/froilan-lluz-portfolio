import { Component, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  featuredProject = {} as Project;

  constructor(
    private titleService: Title,
    private projectService: ProjectsService,
    private renderer: Renderer2
  ) {
    this.titleService.setTitle('John Froilan | Home');
  }
  ngOnInit(): void {
    this.featuredProject = this.projectService.GetProjectById(1);
  }
  DownloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/Resume.pdf');
    link.setAttribute('download', 'John Froilan Lluz CV.pdf');
    link.click();
    link.remove();
  }
}
