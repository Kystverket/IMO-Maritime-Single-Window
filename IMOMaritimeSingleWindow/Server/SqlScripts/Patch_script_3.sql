ALTER TABLE public.location_type
	ADD COLUMN "EnumValue" varchar(50);

UPDATE public.location_type
    SET "EnumValue"='HARBOUR'
    WHERE name = 'Harbour';

ALTER TABLE public.gender
	ADD COLUMN "EnumValue" varchar(50);

UPDATE public.gender
    SET "EnumValue"='MALE'
    WHERE description = 'Male';

UPDATE public.gender
    SET "EnumValue"='FEMALE'
    WHERE description = 'Female';

UPDATE public.gender
    SET "EnumValue"='OTHER'
    WHERE description = 'Other';
