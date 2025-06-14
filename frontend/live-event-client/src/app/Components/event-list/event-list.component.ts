import {Component, OnInit} from "@angular/core";
import { EventsService } from "../../events/events.service";
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {EventModel } from '../../models/event.model';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './event-list.component.html'
})
export class EventListComponent implements OnInit {
  events: EventModel[] = [];


  constructor(private eventService: EventsService) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(data => this.events = data);
  }
}
