the website: https://silvamike1710-oss.github.io/BookList/

Book List App

A simple React + TypeScript application that performs CRUD operations on a book list using the crudcrud.com API.

Features
List books from an external API
Add new books (title, author, status)
Delete books
Toggle book status (Lido / Não lido)
Fully typed with TypeScript

Project Structure
src/
│
├── components/
│ ├── BookForm.tsx
│ ├── BookItem.tsx
│ └── BookList.tsx
│
├── api.ts
├── types.ts
├── App.tsx
└── main.tsx

lighthouse -
fixed the no "main" wrapping on html to fix the html
no other issues found on lighthouse

Technologies Used
React
TypeScript
Axios
Vite

Setup Instructions

1. Clone the repository
   git clone https://github.com/your-username/book-list-app.git
   cd book-list-app
2. Install dependencies
   npm install
3. Configure API

Go to:

https://crudcrud.com

Generate your unique API URL and replace it in api.ts:

const API_URL = "https://crudcrud.com/api/YOUR_API_KEY/books";

4. Run the project
   npm run dev

API Operations
Method Description
GET Fetch all books
POST Add a new book
DELETE Remove a book
PUT Update book status

Data Model
type BookStatus = "Lido" | "Não lido";

interface Book {
\_id?: string;
title: string;
author: string;
status: BookStatus;
}

# BookList

**Site publicado:** [https://silvamike1710-oss.github.io/BookList/](https://silvamike1710-oss.github.io/BookList/)

[![CI/CD Pipeline](https://github.com/silvamike1710-oss/BookList/actions/workflows/main.yml/badge.svg)](https://github.com/silvamike1710-oss/BookList/actions/workflows/main.yml)
