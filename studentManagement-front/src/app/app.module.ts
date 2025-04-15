// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 导入 FormsModule

import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component'; // 导入 StudentListComponent

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent // 将 StudentListComponent 添加到 declarations 数组中
  ],
  imports: [
    BrowserModule,
    FormsModule // 添加 FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }