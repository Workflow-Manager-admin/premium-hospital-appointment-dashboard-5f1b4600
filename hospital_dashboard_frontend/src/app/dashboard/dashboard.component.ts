import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
// PUBLIC_INTERFACE
export class DashboardComponent {
  /** 
   * Demo analytics, appointments, placeholders. In real app, fetch from service! 
   */
  upcomingAppointments = [
    { patient: 'John Doe', date: '2024-07-07', time: '10:00', doctor: 'Dr. Adams', status: 'Confirmed' },
    { patient: 'Jane Smith', date: '2024-07-08', time: '12:30', doctor: 'Dr. Taylor', status: 'Pending' },
    { patient: 'Emma Lee', date: '2024-07-08', time: '15:00', doctor: 'Dr. Brown', status: 'Rescheduled' }
  ];

  // Returns a class string based on status, equivalent to | lowercase in the template
  getStatusClass(status: string): string {
    return 'status ' + (status ? status.toLowerCase() : '');
  }
}
