import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ ADD THIS
import { CreateUsermanagementComponent } from '../../usermanagement/create-usermanagement/create-usermanagement.component';



@Component({
  selector: 'app-usermanagement',
  standalone: true,
  templateUrl: './usermanagement.component.html',
  imports: [CommonModule,CreateUsermanagementComponent],
})
export class UsermanagementComponent {
  showCreateUserForm = false;

  users = [
    { id: 1, firstName: 'Emmanule ', lastName: 'Golombe', email: 'egolombe@example.com', role: 'Admin', active: true },
    { id: 2, firstName: 'Jacob', lastName: 'Kawonga', email: 'jkawong@example.com', role: 'User', active: false },
    { id: 3, firstName: 'Calorin', lastName: 'Tembo', email: 'ctembo@example.com', role: 'Manager', active: true },
    { id: 4, firstName: 'Aaron', lastName: 'Mangungu', email: 'amangungu@example.com', role: 'Admin', active: true },
    { id: 5, firstName: 'ireen', lastName: 'Kawonga', email: 'ikawonga@example.com', role: 'User', active: false },
    { id: 6, firstName: 'Milcah', lastName: 'Kwizombe', email: 'kwizombe@example.com', role: 'Manager', active: true },
    { id: 7, firstName: 'Tamandani', lastName: 'kukhala', email: 'tamandani@example.com', role: 'User', active: false },

  ];
  toggleCreateUserForm() {
    this.showCreateUserForm = !this.showCreateUserForm;
  }
}

