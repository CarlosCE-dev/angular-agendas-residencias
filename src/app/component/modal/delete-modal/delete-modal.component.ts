import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent {

  confirmar:boolean = false;
  
  constructor(
    public dialogRef: MatDialogRef<DeleteModalComponent>,
  ) {}

  cancelar(){
    this.dialogRef.close({ ok: this.confirmar });
  }

  eliminar(): void {
    this.confirmar = true;
    this.dialogRef.close({ ok: this.confirmar });
  }

}
