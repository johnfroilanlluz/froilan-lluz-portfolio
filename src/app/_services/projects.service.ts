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
      name: 'B-ME! The Virtual Nutritionist',
      display: ['../../assets/python6.png'],
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
      name: 'Queuewise Teller',
      display: ['../../assets/7.png'],
      pictures: [
        '../../assets/1.png',
        '../../assets/2.png',
        '../../assets/4.png',
        '../../assets/5.png',
        '../../assets/7.png',
      ],
      projectLink: '//www.github.com',
      summary:
        'Teller App of Queuewise System used in Binan City Hall during Business One Stop Shop (BOSS) 2024 under the LGU Department of Binan City.',
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
      name: 'Queuewise Public View',
      display: ['../../assets/8.png'],
      pictures: [
        '../../assets/8.png',
        '../../assets/9.png',
        '../../assets/10.png',
      ],
      projectLink: '//www.github.com',
      summary: 'Public View App of Queuewise System',
      description:
        'An innovative queueing system revolutionizes the traditional waiting experience by leveraging cutting-edge technology to enhance efficiency and customer satisfaction. Integrating advanced software and digital interfaces, this system optimizes the queue management process, minimizing wait times and improving overall service delivery. Features may include mobile check-ins, real-time updates, and personalized notifications, allowing customers to remotely join queues, track their position, and receive timely alerts. Smart algorithms analyze data to dynamically adjust wait times and allocate resources efficiently. ',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.NODEJS, Tag.ELECTRON],
    },
    {
      id: 3,
      name: 'Queuewise Live View',
      display: ['../../assets/12.png'],
      pictures: ['../../assets/12.png', '../../assets/11.png'],
      projectLink: '//www.github.com',
      summary: 'Live View App of Queuewise System of Binan City Hall ',
      description:
        'An innovative queueing system revolutionizes the traditional waiting experience by leveraging cutting-edge technology to enhance efficiency and customer satisfaction. Integrating advanced software and digital interfaces, this system optimizes the queue management process, minimizing wait times and improving overall service delivery. Features may include mobile check-ins, real-time updates, and personalized notifications, allowing customers to remotely join queues, track their position, and receive timely alerts. Smart algorithms analyze data to dynamically adjust wait times and allocate resources efficiently. ',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.NODEJS, Tag.ELECTRON],
    },
    {
      id: 4,
      name: 'Queuewise Kiosk ',
      display: ['../../assets/23.png'],
      pictures: [
        // '../../assets/13.png',
        // '../../assets/15.png',
        // '../../assets/16.png',
        // '../../assets/17.png',
        '../../assets/20.png',
        '../../assets/21.png',
        '../../assets/22.png',
        '../../assets/23.png',
        '../../assets/24.png',
      ],
      projectLink: '//www.github.com',
      summary: 'Kiosk App of Queuewise System',
      description:
        'An innovative queueing system revolutionizes the traditional waiting experience by leveraging cutting-edge technology to enhance efficiency and customer satisfaction. Integrating advanced software and digital interfaces, this system optimizes the queue management process, minimizing wait times and improving overall service delivery. Features may include mobile check-ins, real-time updates, and personalized notifications, allowing customers to remotely join queues, track their position, and receive timely alerts. Smart algorithms analyze data to dynamically adjust wait times and allocate resources efficiently. ',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.NODEJS, Tag.ELECTRON],
    },
    {
      id: 5,
      name: 'VividTrim-Studios',
      display: ['../../assets/vivid1.png'],
      pictures: [
        '../../assets/vivid1.png',
        '../../assets/vivid2.png',
        '../../assets/vivid3.png',
        '../../assets/vivid4.png',
        '../../assets/vivid5.png',
      ],
      projectLink: '//www.github.com',
      summary:
        'A responsive website for a barbershop company advertising, Promo and Booking the services of the company with the full potential in the market.',
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
