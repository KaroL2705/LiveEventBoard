export interface CommentModel {
  id?: number;
  message: string;
  author: string;
  eventId?: number;
}

export interface EventModel {
  id?: number;
  title: string;
  description: string;
  date: string;
  comments: CommentModel[]; // dodane pole
}
