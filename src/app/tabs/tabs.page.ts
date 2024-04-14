import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private alertController: AlertController) {}

  //help widget details with help message
  async help() {
    const alert = await this.alertController.create({
      header: 'Help',
      message: 'If you have any system problems or questions, please do not hesitate to contact me. -email:su. If you have any system problems or questions, please feel free to contact me! -email : scu.gallery@gamil.com -phone: -012 345 678',
      buttons: ['OK']
    });
    await alert.present();
  }
  //delete widget details with message and cancle, delete 2 buttons
  async confirmDelete() {
    const alert = await this.alertController.create({
      header: 'Confirm Delete',
      message: 'Do you want to delete?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancelled');    
          }
        },
        {
          text: 'Delete',
          role: 'delete',
          handler: () => {
            console.log('Deleted successfully');    
          }
        }
      ]
    });
    await alert.present();
  }
}

