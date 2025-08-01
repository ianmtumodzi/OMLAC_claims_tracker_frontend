import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ ADD THIS
import { CreateClaimComponent } from '../../claims/create-claim/create-claim.component'; // ✅ Make sure path is correct

@Component({
  selector: 'app-claims',
  standalone: true,
  imports: [
    CommonModule,           // ✅ ADD THIS TO MAKE ngIf AND OTHERS WORK
    CreateClaimComponent    // ✅ IF you're using this component inside the template
  ],
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.css']
})
export class ClaimsComponent {
  showCreateForm = false;

  toggleCreateForm() {
    this.showCreateForm = !this.showCreateForm;
  }
}
