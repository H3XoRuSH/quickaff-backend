This is the backend server of [QuickAff](https://github.com/riru12/QuickAff/). This is a Express JS loaded application.

## Preliminaries

### Dependencies

Install the required dependencies by running `npm install`. Also, this application uses PostgreSQL (you can install it from [here](https://www.postgresql.org/)).

### Database Configuration

1. `db.js`: Modify this file according to your Postgres configuration.

2. In the database, create these tables if not present:

   edit `create.sql` for table
   run `psql -U postgres -d postgres -f create.sql` to edit/update the user table

   1. `users` table

      ```sql
      CREATE TYPE public.mem_status AS ENUM ('active', 'inactive', 'alumni');
      CREATE TYPE public.renewal_payment_status AS ENUM ('paid', 'not paid');
      CREATE TABLE public.users
         (
               student_id INTEGER NOT NULL,
               last_name text,
               first_name text,
               middle_name text,
               nickname text,
               course text,
               up_mail text,
               app_batch text,
               mem_status public.mem_status,
               renewal_payment_status public.renewal_payment_status,
               committee text,
               PRIMARY KEY (student_id)
         );
      ```

## Testing

### Scripts

There are two available scripts:

- `start`: This will run the application normally.
- `devStart`: This will run the application in development (dev) mode. In dev mode, you can edit the code and run it without restarting the application.

You can run these scripts via `npm run {your_script}`.

### Documentation

You can find the API documentation [here](https://gab-samonte.notion.site/QuickAff-API-Documentation-6655bf380ca4481ebe2de5a735e7b5c0?pvs=4) (actual link: https://tinyurl.com/QuickAffAPIDocu).

### Running

While running, you can access the application on `localhost` on port `3000`.

> Suggestion: Use [Postman](https://www.postman.com/) to consume the application's APIs and [Mockoon](https://mockoon.com/) to test and create mock APIs.
