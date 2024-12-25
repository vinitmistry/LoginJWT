import { Component, OnInit } from '@angular/core';
import { JwtsrvcService } from '../jwtsrvc.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent{

  constructor(private JwtsrvcService:JwtsrvcService) { }
  sendData() {
    const dataToSend = { message: 'Hello, server!', userId: 123 };

    this.JwtsrvcService.sendData(dataToSend).subscribe({
      next: (response) => {
        console.log('Server Response:', response);
        alert('Data sent successfully!');
      },
      error: (error) => {
        console.error('Error:', error);
        alert('Error sending data.');
      }
    });
  }
 
}
