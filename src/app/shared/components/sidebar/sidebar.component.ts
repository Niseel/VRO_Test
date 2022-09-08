import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['../../../../assets/styles/share/_sidebar.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router) {}
  public subModules: any[] = [
    {
      title: 'Home',
      url: 'home',
      svg: 'home',
      sizeIcon: 'lg',
      isActive: true,
    },
    {
      title: 'Intervention',
      svg: 'intervention',
      url: 'intervention',
      sizeIcon: 'lg',
      isActive: false,
    },
    {
      title: 'iOneSheet',
      svg: 'ionesheet',
      url: 'ionesheet',
      sizeIcon: 'lg',
      isActive: false,
    },
    {
      title: 'Comms Protocol',
      svg: 'commsprotocol',
      url: 'commsprotocol',
      sizeIcon: 'lg',
      isActive: false,
    },
    {
      title: 'Data Routing',
      svg: 'datarouting',
      url: 'datarouting',
      sizeIcon: 'lg',
      isActive: false,
    },
    {
      title: 'Job Scheduler',
      svg: 'jobscheduler',
      url: 'jobscheduler',
      sizeIcon: 'lg',
      isActive: false,
    },
    {
      title: 'Crew Schedule',
      svg: 'crewschedule',
      url: 'crewschedule',
      sizeIcon: 'lg',
      isActive: false,
    },
    { title: 'Log', svg: 'log', url: 'log', sizeIcon: 'lg', isActive: false },
    {
      title: 'Log Out',
      svg: 'logout',
      url: 'logout',
      sizeIcon: 'lg',
      isActive: false,
    },
  ];
  ngOnInit(): void {}
  activateClass(subModule: any) {
    // console.log(this.router.url);
    const me = this;
    me.subModules = me.subModules.map((el) => {
      let rs = { ...el };
      rs.isActive = false;
      if (subModule.title === el.title) {
        rs.isActive = true;
      }
      return rs;
    });
    // console.log(me.subModules);
    // subModule.isActive = !subModule.isActive;
  }
  onTab(path: string, index?: number) {
    const me = this;
    // console.log('path: ', path);
    me.router.navigate([path]);
  }
}
