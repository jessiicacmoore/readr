export type BookStatus = "want" | "reading" | "complete";

export type Book = {
  id: string;
  title: string;
  author: string;
  status: BookStatus;
  coverUrl?: string;
  updatedAt?: string;
};