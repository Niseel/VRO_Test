import { Component, OnInit } from '@angular/core';

interface rig {
  image: string;
  well: string;
  wellBore: string;
  holeSection: string;
  run: string;
  runPurpose: string;
  scopeOfWork: string;
  startDate: string;
}

interface Project {
  project: string;
  operator: string;
  country: string;
  region: string;
  rig: rig[];
}

@Component({
  selector: 'app-home-project-list',
  templateUrl: './home-project-list.component.html',
  styleUrls: ['./home-project-list.component.scss'],
})
export class HomeProjectListComponent implements OnInit {
  public projects: Project[] = [
    {
      project: 'Project 01',
      operator: 'Operator',
      country: 'Country',
      region: 'Region',
      rig: [
        {
          image: 'Example',
          well: 'Example 01',
          wellBore: 'Example',
          holeSection: 'Example',
          run: 'Example',
          runPurpose: 'Example',
          scopeOfWork: 'Example',
          startDate: 'Example',
        },
      ],
    },
    {
      project: 'Project 02',
      operator: 'Operator',
      country: 'Country',
      region: 'Region',
      rig: [
        {
          image: 'Example',
          well: 'Example 02',
          wellBore: 'Example',
          holeSection: 'Example',
          run: 'Example',
          runPurpose: 'Example',
          scopeOfWork: 'Example',
          startDate: 'Example',
        },
        {
          image: 'Example',
          well: 'Example 03',
          wellBore: 'Example',
          holeSection: 'Example',
          run: 'Example',
          runPurpose: 'Example',
          scopeOfWork: 'Example',
          startDate: 'Example',
        },
      ],
    },
    {
      project: 'Project 03',
      operator: 'Operator',
      country: 'Country',
      region: 'Region',
      rig: [
        {
          image: 'Example',
          well: 'Example 04',
          wellBore: 'Example',
          holeSection: 'Example',
          run: 'Example',
          runPurpose: 'Example',
          scopeOfWork: 'Example',
          startDate: 'Example',
        },
      ],
    },
  ];

  constructor() {}
  ngOnInit() {}
}
