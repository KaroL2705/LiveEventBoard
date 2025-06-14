import {Component, OnInit} from "@angular/core";
import { EventsService } from "../../events/events.service";
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CommentModel, EventModel } from '../../models/event.model';
import {EventHubService} from '../../Services/event-hub.service';
import {AddEventComponent} from '../addEvent/add-event.component';
import {AddCommentComponent} from '../add-comment/add-comment.component';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, FormsModule,AddEventComponent, AddCommentComponent],
  templateUrl: './event-list.component.html'
})
export class EventListComponent implements OnInit {
  events: EventModel[] = [];


  constructor(
    private eventService: EventsService,
    private eventHub: EventHubService
  ) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(data => this.events = data.map(event => ({

      id: event.id,
      title: event.title,
      description: event.description,
      date: event.date,
      comments: event.comments ?? []
    })));

    this.eventHub.startConnection();
    this.eventHub.onEventAdded((newEvent: EventModel) => {
      this.events.push(newEvent);
    });
  }

  onEventAdded(event: EventModel): void {
    this.events.push(event);
  }


  onCommentAdded(eventId: number, comment: CommentModel): void {
    const target = this.events.find(e => e.id === eventId);
    if (target && target.comments) {
      target.comments.push(comment);
    }
  }

}
