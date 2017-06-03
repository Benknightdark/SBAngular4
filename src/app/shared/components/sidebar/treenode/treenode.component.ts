import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-treenode',
  templateUrl: './treenode.component.html',
  styleUrls: ['../sidebar.component.scss']
})
export class TreenodeComponent implements OnInit {

  constructor() { }
    @Input() childlist:any;

  ngOnInit() {
      console.log(this.childlist);
  }


}
