# CSC3916 – Assignment 2

**Author:** Younes Yassine  
**Date:** March 2, 2025

---

## Overview

This project is a Node.js-based web API that handles basic user registration, authentication (Basic and JWT), and provides endpoints for managing movies. The goal is to demonstrate familiarity with HTTP requests, environment variables, and authentication mechanisms.

---

## Features

1. **Environment Variable**  
   - Uses `UNIQUE_KEY` for JWT signing and to display in responses.

2. **Authentication**  
   - **Basic Auth** for `DELETE /movies`  
   - **JWT Auth** for `PUT /movies`

3. **Routes**  
   - `POST /signup` – Register a new user  
   - `POST /signin` – Log in and receive a JWT token  
   - `GET /movies` – Returns a JSON object (no auth required)  
   - `POST /movies` – Simulates saving a movie (no auth required)  
   - `PUT /movies` – Requires **JWT** (returns “movie updated”)  
   - `DELETE /movies` – Requires **Basic Auth** (returns “movie deleted”)  
   - All other methods on `/movies` return a 405 status (method not supported)

---

Render: https://csc3916-assignment2-40vi.onrender.com

[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://app.getpostman.com/run-collection/38973044-b5fec9a3-b819-48ed-bb0c-87225ebf30f3?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D38973044-b5fec9a3-b819-48ed-bb0c-87225ebf30f3%26entityType%3Dcollection%26workspaceId%3Db658d2e3-4b68-47a0-9ebe-b5fe94e0d60e#?env%5BAssignment2%5D=W3sia2V5IjoidG9rZW4iLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJhbnkiLCJzZXNzaW9uVmFsdWUiOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFlYUWlPakUzTkRJd09UVXpORFFzSW1WNGNDSTZNVGMwTWpBNU9EazBOSDAuUFk3ZlBKLTRxZW82OTNGZjdfX2VvSm5Wb09tY250RzdnNlpZbjVQVzFuVSIsImNvbXBsZXRlU2Vzc2lvblZhbHVlIjoiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBZWFFpT2pFM05ESXdPVFV6TkRRc0ltVjRjQ0k2TVRjME1qQTVPRGswTkgwLlBZN2ZQSi00cWVvNjkzRmY3X19lb0puVm9PbWNudEc3ZzZaWW41UFcxblUiLCJzZXNzaW9uSW5kZXgiOjB9XQ==)
