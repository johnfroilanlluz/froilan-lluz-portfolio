import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  GetFeaturedProjectById(arg0: number): Project {
    throw new Error('Method not implemented.');
  }
  projects: Project[] = [
    {
      id: 0,
      name: '1 Python Project',
      pictures: [
        '../../assets/python1.png',
        '../../assets/python2.png',
        '../../assets/python3.png',
        '../../assets/python4.png',
        '../../assets/python5.png',
        '../../assets/python6.png',
        '../../assets/python7.png',
        '../../assets/python8.png',
        '../../assets/python9.png',
      ],
      projectLink: '//www.github.com',
      summary:
        'Integrating a Virtual Nutritionist Program to Enhance the Automated Body Mass Index Machine',
      description:
        '•	The B-me! prototype, as an automated measurement method, achieved an impressive accuracy rate of 99.07% in height measurement. This rate was compared to the manual method utilized in this study, which was considered the true value and represented a 100% accuracy rate. In addition, the prototype also demonstrated an impressive accuracy rate of 98.38% in weight measurement. This level of accuracy can be considered quite favorable when compared to traditional mechanical weighing scales, where obtaining an exact value can often be challenging.',
      tags: [Tag.PYTHON, Tag.FLASK],
    },
    {
      id: 1,
      name: '4 Angular App',
      pictures: [
        '../../assets/1.png',
        '../../assets/2.png',
        '../../assets/4.png',
        '../../assets/5.png',
        '../../assets/7.png',
        '../../assets/8.png',
        '../../assets/9.png',
        '../../assets/10.png',
        '../../assets/12.png',
        '../../assets/14.png',
        '../../assets/13.png',
        '../../assets/15.png',
        '../../assets/16.png',
        '../../assets/17.png',
      ],
      projectLink: '//www.github.com',
      summary: 'Fullstack web app developed using Angular and Node.JS',
      description:
        'An innovative queueing system revolutionizes the traditional waiting experience by leveraging cutting-edge technology to enhance efficiency and customer satisfaction. Integrating advanced software and digital interfaces, this system optimizes the queue management process, minimizing wait times and improving overall service delivery. Features may include mobile check-ins, real-time updates, and personalized notifications, allowing customers to remotely join queues, track their position, and receive timely alerts. Smart algorithms analyze data to dynamically adjust wait times and allocate resources efficiently. ',
      tags: [
        Tag.ANGULAR,
        Tag.TYPESCRIPT,
        Tag.NODEJS,
        Tag.JAVASCRIPT,
        Tag.ELECTRON,
      ],
    },
    {
      id: 2,
      name: '3 Angular Website',
      pictures: [
        '../../assets/Picture1.png',
        '../../assets/Picture2.png',
        '../../assets/Picture3.png',
      ],
      projectLink: '//www.github.com',
      summary: 'Frontend Website developed using Angular',
      description:
        'A frontend website developed with Angular JavaScript represents a sophisticated and dynamic user interface, showcasing the capabilities of this powerful front-end framework. Angular, maintained by Google, facilitates the creation of robust, single-page web applications with a modular and component-based architecture. ',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.NODEJS, Tag.JAVASCRIPT],
    },
  ];

  GetProjects() {
    return this.projects;
  }
  GetProjectById(id: number): Project {
    let project = this.projects.find((project) => project.id === id);

    if (project === undefined) {
      throw new TypeError('There is no project that matches the id: ' + id);
    }

    return project;
  }
  GetProjectByFilter(filterTags: Tag[]) {
    let filterProjects: Project[] = [];

    this.projects.forEach(function (project) {
      let foundAll = true;

      filterTags.forEach(function (filterTag) {
        if (!project.tags.includes(filterTag)) {
          foundAll = false;
        }
      });

      if (foundAll) {
        filterProjects.push(project);
      }
    });
    return filterProjects;
  }
}
