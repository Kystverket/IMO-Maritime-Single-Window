ALTER TABLE public.person_on_board
ADD COLUMN IsMaster boolean;


ALTER TABLE public.identity_document_type
	ADD COLUMN "ShortName" varchar(5);

UPDATE public.identity_document_type
	SET "ShortName" = 'P'
	WHERE "EnumValue"= 'PASSPORT';

UPDATE public.identity_document_type
	SET "ShortName" = 'M'
	WHERE "EnumValue"= 'MUSTERBOOK';

UPDATE public.identity_document_type
	SET "ShortName" = 'RP'
	WHERE "EnumValue"= 'RESIDENTIAL_PERMIT';

UPDATE public.identity_document_type
	SET "ShortName" = 'PI'
	WHERE "EnumValue"= 'PICTURE_ID';
	
UPDATE public.identity_document_type
	SET "ShortName" = 'O'
	WHERE "EnumValue"= 'OTHER';
