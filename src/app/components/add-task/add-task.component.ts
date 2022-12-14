import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import {Task} from '../../Task'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html', 
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter(); 
  varText: string;
  varDay:string;
  varReminder: boolean = false;
  varShowAddTask: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(visible=>
      (this.varShowAddTask = visible))
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // validation
    if(!this.varText){
      alert('Please add a task')
      return;
    }
    
    const newTask :Task = {
      text: this.varText,
      day: this.varDay,
      reminder: this.varReminder
  }

    this.onAddTask.emit(newTask);

    this.varText = '';
    this.varDay = '';
    this.varReminder = false;
  }
}
