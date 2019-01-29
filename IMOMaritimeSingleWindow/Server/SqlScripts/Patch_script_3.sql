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


ALTER TABLE public.identity_document_type
	ADD COLUMN "EnumValue" varchar(50);

UPDATE public.identity_document_type
    SET "EnumValue"='MUSTERBOOK'
    WHERE description = 'Musterbook';

UPDATE public.identity_document_type
    SET "EnumValue"='PASSPORT'
    WHERE description = 'Passport';

UPDATE public.identity_document_type
    SET "EnumValue"='RESIDENTIAL_PERMIT'
    WHERE description = 'Residential Permit';
	
UPDATE public.identity_document_type
    SET "EnumValue"='PICTURE_ID'
    WHERE description = 'Picture Id';
	
UPDATE public.identity_document_type
    SET "EnumValue"='OTHER'
    WHERE description = 'Other';
