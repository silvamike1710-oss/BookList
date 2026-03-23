import axios from "axios";
import type { Book } from "./types";

const API_URL = " https://crudcrud.com/api/82ce1c9c64414af386eb22f969ea4177/books";

export const getBooks = async (): Promise<Book[]> => {
    const res = await axios.get(API_URL);
    return res.data;
};

export const addBook = async (book: Omit<Book, "_id">): Promise<Book> => {
    const res = await axios.post(API_URL, book);
    return res.data;
};

export const deleteBook = async (id: string): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
};

export const updateBook = async (book: Book): Promise<void> => {
    const { _id, ...data } = book;
    await axios.put(`${API_URL}/${_id}`, data);
};