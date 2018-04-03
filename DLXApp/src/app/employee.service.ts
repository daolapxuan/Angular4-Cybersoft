import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

  private EmployeeList: Array<any> = [
    { id: '01', name: 'Employee One', birthday: '1993' },
    { id: '02', name: 'Employee Two', birthday: '1994' },
    { id: '03', name: 'Employee Three', birthday: '1995' },
    { id: '04', name: 'Employee Four', birthday: '1996' },
  ];

  // Method in Service 
  public GetEmployee():Array<any> {
    // Tại đây sau này sẽ là liên kết với API từ backend (server) lấy dự liệu
    return this.EmployeeList;
  }

  constructor() { }

}
