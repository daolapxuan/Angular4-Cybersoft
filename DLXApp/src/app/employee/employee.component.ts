import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  // Mảng lấy dữ liệu từ server
  EmployeeList:Array<any>;

  constructor(employeeService: EmployeeService) { 
    // Gọi service để lấy dữ liệu danh sách nhân viên hiển thị ra component
    this.EmployeeList = employeeService.GetEmployee();
  }

  ngOnInit() {
  }

}
