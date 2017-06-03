import { Component,OnInit,ViewChild,ViewEncapsulation } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs'
import 'rxjs'
import { TreenodeComponent } from "app/shared";
@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SidebarComponent {
    constructor(private http: Http) { }
    isActive = false;
    showMenu = '';
    menudata:Observable<any>;
    dashboard='dashboard'
  block1: TreenodeComponent;
    ngOnInit() {
      this.menudata=  this.http.get('http://localhost:3000/data')
            .map(res => res.json()[0])
    }
    eventCalled() {
        this.isActive = !this.isActive;
    }
    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
}
