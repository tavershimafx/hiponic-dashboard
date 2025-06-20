import { Component } from '@angular/core';
import { DialogService } from '@services/dialog-service';
import { roles } from '@store/faker';

@Component({
  selector: 'new-user',
  standalone: false,
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserModal{
  /**
   *
   */
  constructor(private dialogService: DialogService) {
   
  }

  
  roles = roles.map((r) => { return { value: r.id, name: r.name}})

  closeDialog(){
    this.dialogService.showDialog(null)
  }
}
