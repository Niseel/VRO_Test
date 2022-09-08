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

@Component({
  selector: 'app-home-rig-item',
  templateUrl: './home-rig-item.component.html',
  styleUrls: ['./home-rig-item.component.scss'],
})
export class HomeRigItemComponent implements OnInit {
  @Input() rig!: rig;

  constructor() {}
  ngOnInit() {}
}
