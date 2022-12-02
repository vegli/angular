import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title : string = 'Task tracker';

  constructor() { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  toggleAddTask(){
    console.log("Toggled")
  }

}
