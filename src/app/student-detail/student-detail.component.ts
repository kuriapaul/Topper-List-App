import { Component, OnInit, Input , Output, EventEmitter } from '@angular/core';
import { Student } from '../student'
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent {
  @Input() studentsData: Student[];
  @Output() MarksValueChnaged = new EventEmitter();
  counter = 0;
  valueChnaged(newData: Student) {
    this.MarksValueChnaged.emit(newData);
  }
}
