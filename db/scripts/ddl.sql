-- DROP SCHEMA bms;

CREATE SCHEMA bms ;

-- bms.books definition

-- Drop table

-- DROP TABLE bms.books;

CREATE TABLE bms.books (
	id serial4 NOT NULL,
	title varchar(300) NOT NULL,
	description varchar(1000) NULL,
	author varchar(50) NOT NULL,
	publisher varchar(50) NOT NULL,
	pages int4 NULL,
	store_code varchar(5) NOT NULL,
	created_on timestamp NOT NULL,
	created_by varchar(100) NOT NULL,
	CONSTRAINT book_pkey PRIMARY KEY (id)
);

-- bms.stores definition

-- Drop table

-- DROP TABLE bms.stores;

CREATE TABLE bms.stores (
	id serial4 NOT NULL,
	"name" varchar(100) NOT NULL,
	code varchar(5) NOT NULL,
	created_on timestamp NOT NULL,
	created_by varchar(100) NOT NULL,
	CONSTRAINT store_pkey PRIMARY KEY (id)
);

ALTER TABLE bms.stores ADD address varchar(100) NULL;