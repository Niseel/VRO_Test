import { Component, Input, OnInit } from '@angular/core';

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
  rig?: rig[];
}

@Component({
  selector: 'app-home-rig-list',
  templateUrl: './home-rig-list.component.html',
  styleUrls: ['./home-rig-list.component.scss'],
})
export class HomeRigListComponent implements OnInit {
  @Input() rigs: rig[] | undefined;

  constructor() {}

  ngOnInit() {}
}
