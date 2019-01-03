import { Component, OnInit } from '@angular/core';
import { StudentrecordService } from './studentrecord.service'
import { Student } from './student'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  constructor(private studentRecordService: StudentrecordService) { }
  students: Student[];

  getStudentRecord(): void {
    this.studentRecordService.getStudentRecord().subscribe(studentdata => this.students = studentdata.sort(function (a, b) {
      return a.Marks - b.Marks;
    }).reverse());
  }
  getToppersRecord() {
    return this.students.slice(0, 5);
  }
  trapValueChanged(value: Student) {
    this.students.find(x => x.RollNo == value.RollNo).Marks = value.Marks;
    this.getStudentRecord();
  } 
  getMediocoreRecord() {
    return this.students.slice(5, 10);
  }
  getLowerRecord() {
    return this.students.slice(10);
  }
  ngOnInit() {
   this.getStudentRecord();
  }
}
