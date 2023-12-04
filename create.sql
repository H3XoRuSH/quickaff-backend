DROP TABLE users;

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