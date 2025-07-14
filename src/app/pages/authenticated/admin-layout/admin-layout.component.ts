import { Component } from '@angular/core';
import { AdminSidebarComponent } from '../components/admin-sidebar/admin-sidebar.component';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [AdminSidebarComponent, RouterModule],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {

}
