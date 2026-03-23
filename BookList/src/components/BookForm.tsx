import { useState } from "react";
import type { BookFormProps, BookStatus } from "../types";

export default function BookForm ({ onAdd }: BookFormProps) {
    const [title, setTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [status, setStatus] = useState<BookStatus>("não lido");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!title || !author) return;
        
        onAdd({ title, author, status});

        setTitle("");
        setAuthor("");
        setStatus("não lido");

    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                placeholder="Autor"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
            <select value={status} onChange={(e) => setStatus(e.target.value as BookStatus)}>
                <option value="Não lido">Não lido</option>
                <option value="Lido">Lido</option>
            </select>
            <button type="submit">Adicionar</button>
        </form>
    );
}