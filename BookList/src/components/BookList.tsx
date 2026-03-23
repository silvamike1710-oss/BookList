import type { Book } from "../types";
import BookItem from "./BookItem";

interface Props {
    books: Book[];
    onDelete: (id: string) => void;
    onToggleStatus: (book: Book) => void;
}

export default function BookList({ books, onDelete, onToggleStatus }: Props) {
    return (
        <div>
            {books.map((book) => (
                <BookItem
                key={book._id}
                book={book}
                onDelete={onDelete}
                onToggleStatus={onToggleStatus}
                />
            ))}
        </div>
    );
}