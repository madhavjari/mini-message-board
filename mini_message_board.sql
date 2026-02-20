--
-- PostgreSQL database dump
--

\restrict xE1WdgFu7Vkn9hyl7QMRb8doEwqERjCFwzX41jJXN5U6je4By3r64kRre1BEJ9J

-- Dumped from database version 16.11 (Ubuntu 16.11-0ubuntu0.24.04.1)
-- Dumped by pg_dump version 16.11 (Ubuntu 16.11-0ubuntu0.24.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: message_board; Type: TABLE; Schema: public; Owner: madhav-jariwala
--

CREATE TABLE public.message_board (
    id integer NOT NULL,
    name character varying(30),
    message character varying(255),
    "time" character varying(255)
);


ALTER TABLE public.message_board OWNER TO "madhav-jariwala";

--
-- Name: message_board_id_seq; Type: SEQUENCE; Schema: public; Owner: madhav-jariwala
--

ALTER TABLE public.message_board ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.message_board_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: message_board; Type: TABLE DATA; Schema: public; Owner: madhav-jariwala
--

COPY public.message_board (id, name, message, "time") FROM stdin;
1	Bryan	Hello World	17/02/2026 19:16 IST
2	Odin	Hello Asgard	17/02/2026 19:17 IST
3	Thor	Hello Earth	17/02/2026 19:18 IST
4	erfdsv	vfd  	2026-02-20T17:44:29.257+05:30
5	4wefd	efv 	2026-02-20T17:46:00.925+05:30
\.


--
-- Name: message_board_id_seq; Type: SEQUENCE SET; Schema: public; Owner: madhav-jariwala
--

SELECT pg_catalog.setval('public.message_board_id_seq', 5, true);


--
-- Name: message_board message_board_pkey; Type: CONSTRAINT; Schema: public; Owner: madhav-jariwala
--

ALTER TABLE ONLY public.message_board
    ADD CONSTRAINT message_board_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

\unrestrict xE1WdgFu7Vkn9hyl7QMRb8doEwqERjCFwzX41jJXN5U6je4By3r64kRre1BEJ9J

