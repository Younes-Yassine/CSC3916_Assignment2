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




[<img src="[https://run.pstmn.io/button.svg](https://www.postman.com/yyassine24/workspace/webapi-younesyassine/collection/38973044-b5fec9a3-b819-48ed-bb0c-87225ebf30f3?action=share&creator=38973044&active-environment=38973044-ceb6e74b-f2c8-4318-9ecd-8487d0df4204)" alt="Run In Postman" style="width: 128px; height: 32px;">](https://app.getpostman.com/run-collection/35315-d9a3fcba-354e-4cbe-9d2f-ea93c15a1673?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D35315-d9a3fcba-354e-4cbe-9d2f-ea93c15a1673%26entityType%3Dcollection%26workspaceId%3D9537543c-3737-4557-a3ce-8c5ed9249378#?env%5Bmccarthy-hw2%5D=W3sia2V5IjoiSldUIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiYW55Iiwic2Vzc2lvblZhbHVlIjoiSldULi4uIiwiY29tcGxldGVTZXNzaW9uVmFsdWUiOiJKV1QgZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBaQ0k2SWpRME1qZzRNVFJpTWprME5tUTNaR1JsWm1VeU1qazVaV1F3TkRsaFlqYzRObUU1TnpNd09XWWlMQ0oxYzJWeWJtRnRaU0k2SW1KaGRHMWhiaUlzSW1saGRDSTZNVGN6TmpFeE16TTFNSDAuQUdQOUlNd2JZR29EWUZSem5BcWRhZW43YkFTTG1RUTVzbnBHR3o4Z0NnRSIsInNlc3Npb25JbmRleCI6MH1d)
