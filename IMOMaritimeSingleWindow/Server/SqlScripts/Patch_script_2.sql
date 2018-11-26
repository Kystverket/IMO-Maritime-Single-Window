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
