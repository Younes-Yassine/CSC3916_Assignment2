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



