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

[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://www.postman.com/yyassine24/workspace/webapi-younesyassine/collection/38973044-b5fec9a3-b819-48ed-bb0c-87225ebf30f3?action=share&creator=38973044&active-environment=38973044-ceb6e74b-f2c8-4318-9ecd-8487d0df4204)

