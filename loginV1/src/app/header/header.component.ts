import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() isLoggedIn:boolean;
  @Output() onLogout:EventEmitter<any>= new EventEmitter();
  constructor(private router:Router) { }
  ngOnInit() {
  }
  logout(){
    console.log('___: ', this.isLoggedIn);
    this.onLogout.emit();
  }
}
