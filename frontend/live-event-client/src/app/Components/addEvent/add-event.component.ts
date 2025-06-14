import { Component, Output, EventEmitter } from '@angular/core';
import {EventsService} from '../../events/events.service';
import { EventModel } from '../../models/event.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  imports: [FormsModule],
  templateUrl: './add-event.component.html',
  standalone: true
})
export class AddEventComponent {
  title = '';
  description = '';

  @Output() eventAdded = new EventEmitter<EventModel>();

  constructor(private eventService: EventsService) {}

  addEvent(): void {
    const newEvent: EventModel = {
      title: this.title,
      description: this.description,
      date: new Date().toISOString(),
      comments: []
    };

    this.eventService.addEvent(newEvent).subscribe({
      next: (event: EventModel) => {
        this.eventAdded.emit(event);
        this.title = '';
        this.description = '';
      },
      error: () => alert('Błąd podczas dodawania eventu')
    });
  }
}
