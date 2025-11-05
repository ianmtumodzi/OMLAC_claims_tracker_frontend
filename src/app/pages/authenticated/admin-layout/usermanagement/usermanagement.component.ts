import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ ADD THIS
import { CreateUsermanagementComponent } from '../../usermanagement/create-usermanagement/create-usermanagement.component';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  active: boolean;
}


@Component({
  selector: 'app-usermanagement',
  standalone: true,
  imports: [
    CommonModule,
    CreateUsermanagementComponent
  ],
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent {
  showCreateForm = false;

    users: User[] = [
    { firstName: 'Funny', lastName: 'Phiri', email: 'funny.phiri@oldmutual.co.mw', active: true },
    { firstName: 'John', lastName: 'Doe', email: 'john.doe@oldmutual.co.mw', active: false },
    { firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@oldmutual.co.mw', active: true },
    { firstName: 'Funny', lastName: 'Phiri', email: 'funny.phiri@oldmutual.co.mw', active: true },
    { firstName: 'John', lastName: 'Doe', email: 'john.doe@oldmutual.co.mw', active: false },
   
    // Add more users as needed
  ];

  toggleCreateForm() {

    this.showCreateForm = !this.showCreateForm;
  }

}
