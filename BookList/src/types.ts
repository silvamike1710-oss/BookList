export type BookStatus = "lido" | "não lido";

export interface Book {
    _id?: string;
    title: string;
    author: string;
    status: BookStatus;
}

export interface BookFormProps {
    onAdd: (book: Omit<Book, "_id">) => void;
}

export interface BookItemProps {
    book: Book;
    onDelete: (id: string) => void;
    onToggleStatus?: (book: Book) => void;
}
