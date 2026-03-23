import { useEffect, useState } from "react";
import type { Book } from "./types";
import { getBooks, addBook, deleteBook, updateBook } from "./api";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

export default function App() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const data = await getBooks();
    setBooks(data);
  };

  const handleAdd = async (book: Omit<Book, "_id">) => {
    await addBook(book);
    loadBooks();
  };

  const handleDelete = async (id: string) => {
    await deleteBook(id);
    setBooks((prev) => prev.filter((b) => b._id !== id));
  };

  const handleToggleStatus = async (book: Book) => {
    const updated: Book = {
      ...book,
      status: book.status === "lido" ? "não lido" : "lido",
    };

    await updateBook(updated);
    loadBooks();
  };
  
  return (
    <div>
      <h1>Lista de Livros</h1>
      <BookForm onAdd={handleAdd} />
      <BookList
        books={books}
        onDelete={handleDelete}
        onToggleStatus={handleToggleStatus}
      />
    </div>
  );

}