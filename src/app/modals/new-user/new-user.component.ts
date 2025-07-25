import { Component } from '@angular/core';
import { DialogService } from '@services/dialog-service';
import { roles } from '@store/faker';

@Component({
  selector: 'new-user',
  standalone: false,
  templateUrl: './new-user.component.html',
  styleUrl: '../modals.basic.css'
})
export class NewUserModal{
  /**
   *
   */
  constructor(private dialogService: DialogService) {
   
  }

  
  roles = roles.map((r) => { return { key: r.id, value: r.name}})

  closeDialog(){
    this.dialogService.showDialog(null)
  }
}
