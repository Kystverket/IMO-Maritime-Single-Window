ALTER TABLE public.location_type
	ADD COLUMN "EnumValue" varchar(50);

UPDATE public.location_type
    SET "EnumValue"='HARBOUR'
    WHERE name = 'Harbour';
