import { AppLayout } from '@/components/layout/AppLayout/AppLayout';
import { BooksList } from '@/features/books/components/BooksList';
import { mockBooks } from '../../mock';
import { Heading } from '@/components/ui/Heading';

export function BooksPage() {
  return (
    <AppLayout>
      <Heading level={1}>Books</Heading>
      <BooksList books={mockBooks} />
    </AppLayout>
  );
}
