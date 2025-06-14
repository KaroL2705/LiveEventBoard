import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {CommentModel, EventModel} from '../models/event.model';


@Injectable({ providedIn: 'root' })
export class EventsService {
  private apiUrl = 'http://localhost:5220/api/Events';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<EventModel[]> {
    return this.http.get<EventModel[]>(this.apiUrl);
  }

  addEvent(event: EventModel): Observable<EventModel> {
    return this.http.post<EventModel>(this.apiUrl, event);
  }

  addComment(comment: CommentModel): Observable<CommentModel> {
    return this.http.post<CommentModel>(`${this.apiUrl}/comments`, comment);
  }
}
