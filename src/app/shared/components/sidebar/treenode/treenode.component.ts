import { Component, OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs'
import 'rxjs'
@Component({
  selector: 'app-treenode',
  templateUrl: './treenode.component.html',
  styleUrls: ['./treenode.component.scss']
})
export class TreenodeComponent  {

  constructor() { }
    @Input() childlist:any;
   //childlist:Observable<any>
  ngOnInit() {

console.log(this.childlist)
  }


}
