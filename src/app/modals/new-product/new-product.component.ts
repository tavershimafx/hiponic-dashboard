import { Component } from '@angular/core';
import { DialogService } from '@services/dialog-service';
import { roles } from '@store/faker';

@Component({
  selector: 'new-product',
  standalone: false,
  templateUrl: './new-product.component.html',
  styleUrl: '../modals.basic.css'
})
export class NewProductModal{
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
