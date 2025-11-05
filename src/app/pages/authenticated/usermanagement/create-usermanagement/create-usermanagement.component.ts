import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-create-usermanagement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-usermanagement.component.html',
  styleUrl: './create-usermanagement.component.css'
})
export class CreateUsermanagementComponent {

      @Output() closeForm = new EventEmitter<void>();

  onClose() {
    this.closeForm.emit();
  }
}
