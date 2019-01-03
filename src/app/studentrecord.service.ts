import { Injectable } from '@angular/core';
import { Student } from './student'
import { Students } from './StudentMockData'
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';


@Injectable()
export class StudentrecordService {

  getStudentRecord(): Observable<Student[]>  {
    return of(Students);
   
  }

}
