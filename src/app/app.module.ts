import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { AppComponent } from './app.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentrecordService } from './studentrecord.service';
@NgModule({
  declarations: [
    AppComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    OrderModule
  ],
  providers: [StudentrecordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
