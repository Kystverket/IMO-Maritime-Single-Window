-- Enum for Person On Board Type

ALTER TABLE public.person_on_board_type
	ADD COLUMN "EnumValue" varchar(50);

UPDATE public.person_on_board_type
    SET "EnumValue"='PAX'
    WHERE name = 'Passenger';

UPDATE public.person_on_board_type
    SET"EnumValue"='CREW'
    WHERE name = 'Crew';

	
Update public.organization_type
    SET "name" ='Agent Company'
    WHERE "name" ='Company';

-- Enum for Organization Type
ALTER TABLE public.organization_type
    ADD COLUMN "EnumValue"  varchar(50);

UPDATE public.organization_type
    SET "EnumValue"='AUTHORITY'
    WHERE "name"='Authority';

UPDATE public.organization_type
    SET "EnumValue"='RSO'
    WHERE "name"='Recognized Security Organization (RSO)';


UPDATE public.organization_type
    SET "EnumValue"='AGENT_COMPANY'
    WHERE "name"='Agent Company';

-- Enum for Location Source
ALTER TABLE public.location_source
	ADD COLUMN "EnumValue" varchar(50);

INSERT INTO public.location_source(
	name, description, "EnumValue")
	VALUES ('IMO Internal', 'Information origin is IMO, Internal', 'IMO_INTERNAL');
	
INSERT INTO public.location_source(
	name, description, "EnumValue")
	VALUES ('IMO External', 'Information origin is IMO, External', 'IMO_EXTERNAL');

-- Enum for Ship Source
ALTER TABLE public.ship_source
    ADD COLUMN "EnumValue"  varchar(50);

INSERT INTO public.ship_source(
	name, description, "EnumValue")
	VALUES ('IMO Internal', 'Information origin is IMO, Internal', 'IMO_INTERNAL');

-- Enum for Ship Status
ALTER TABLE public.ship_status
	ADD COLUMN "EnumValue" varchar(50);

UPDATE public.ship_status
    SET "EnumValue"='INACTIVE'
    WHERE name = 'Inactive';

UPDATE public.ship_status
    SET"EnumValue"='TO_BE_PROCESSED'
    WHERE name = 'To be processed';
	
UPDATE public.ship_status
    SET"EnumValue"='ACTIVE'
    WHERE name = 'Active';


CREATE INDEX ifk_fk_pob_port_call
   ON public.person_on_board USING btree
   (port_call_id ASC NULLS LAST)
   TABLESPACE pg_default;


-- Prep script for deletion of company
SELECT * 
FROM Organization o
WHERE NOT EXISTS --Get all org where there are no users connected to it
(
	SELECT * 
	FROM "user" u
	where u.organization_id = o.organization_id
)
AND 
NOT EXISTS -- Get all org where there are no ships connected to it
(
	SELECT * 
	FROM ship s
	where s.organization_id = o.organization_id
)
AND
o.organization_type_id = 2
