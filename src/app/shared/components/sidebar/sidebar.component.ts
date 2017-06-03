import { Component,OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs'
import 'rxjs'
@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    constructor(private http: Http) { }
    isActive = false;
    showMenu = '';
    menudata:Observable<any>;
    dashboard:string='dashboard'
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
      this.menudata=  this.http.get('http://localhost:3000/data')
            .map(res => res.json()[0])
           // .subscribe(r => { this.menudata = r })
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
