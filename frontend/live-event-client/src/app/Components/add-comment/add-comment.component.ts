import { Component, Input, Output, EventEmitter } from '@angular/core';
import {EventsService} from '../../events/events.service';
import { CommentModel } from '../../models/event.model';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  standalone: true,
  imports: [FormsModule]
})
export class AddCommentComponent {
  @Input() eventId!: number; // 👈 TO BYŁO POTRZEBNE
  @Output() commentAdded = new EventEmitter<CommentModel>(); // 👈 TO TEŻ

  author: string = '';
  message: string = '';

  constructor(private eventService: EventsService) {}

  addComment(): void {
    const newComment: CommentModel = {
      author: this.author,
      message: this.message,
      eventId: this.eventId
    };

    this.eventService.addComment(newComment).subscribe({
      next: (c) => {
        this.commentAdded.emit(c); // emitujemy do parenta
        this.author = '';
        this.message = '';
      },
      error: () => alert('Błąd przy dodawaniu komentarza')
    });
  }
}
