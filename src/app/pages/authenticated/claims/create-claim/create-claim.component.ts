import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-create-claim',
  standalone: true,
  imports: [CommonModule],  // ✅ if you use ngIf/ngFor/etc. inside it
  templateUrl: './create-claim.component.html',
  styleUrls: ['./create-claim.component.css']
})
export class CreateClaimComponent {
    @Output() closeForm = new EventEmitter<void>();

  onClose() {
    this.closeForm.emit();
  }
}
