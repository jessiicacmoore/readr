import type { Book } from '@/features/books/types';

export function BooksList({ books }: { books: Book[] }) {
  return (
    <ul className="space-y-3" aria-label="Books">
      {books.map((book) => (
        <li key={book.id}>{book.title}</li>
      ))}
    </ul>
  );
}
