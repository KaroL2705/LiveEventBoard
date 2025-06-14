import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class EventHubService {
  private hubConnection!: signalR.HubConnection;
  apiUrl: any;

  startConnection(): void {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5220/hubs/events', {
        withCredentials: true
      })
      .withAutomaticReconnect()
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('SignalR connected'))
      .catch(err => console.error('SignalR error: ', err));
  }

  onEventAdded(callback: (event: any) => void): void {
    this.hubConnection.on('EventAdded', callback);
  }
}
