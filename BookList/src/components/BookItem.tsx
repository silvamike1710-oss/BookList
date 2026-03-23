import type { BookItemProps } from "../types";

export default function BookItem({ book, onDelete, onToggleStatus }: BookItemProps) {
    return (
        <div style={{marginBottom: "10px"}}>
            <strong>{book.title}</strong> - {book.author} ({book.status})

            <button onClick={() => book._id && onDelete(book._id)}>
                Remover
            </button>

            {onToggleStatus && (
                <button onClick={() => onToggleStatus(book)}>
                    Alternar Status
                </button>
            )}
        </div>
    );
}
