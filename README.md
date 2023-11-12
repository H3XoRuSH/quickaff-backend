This is the backend server of [QuickAff](https://github.com/riru12/QuickAff/). This is a Express JS loaded application.



## Preliminaries

### Dependencies

Install the required dependencies by running `npm install`. Also, this application uses PostgreSQL (you can install it from [here](https://www.postgresql.org/)).



### Database Configuration

1. `db.js`: Modify this file according to your Postgres configuration.

2. In the database, create these tables if not present:

   1. `users` table

      ```sql
      CREATE TABLE public.users
      (
          id serial NOT NULL,
          name text,
          PRIMARY KEY (id)
      );
      ```

      

### Scripts

There are two available scripts:

* `start`: This will run the application normally.
* `devStart`: This will run the application in development (dev) mode. In dev mode, you can edit the code and run it without restarting the application.

You can run these scripts via `npm run {your_script}`.



### Testing

While running, you can access the application on `localhost` on port `3000`.