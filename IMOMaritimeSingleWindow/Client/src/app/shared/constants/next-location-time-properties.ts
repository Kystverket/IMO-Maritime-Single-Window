export class NextLocationTimeProperties {
    PROPERTIES = {
        LOCATION_NAME: { description: 'Location Name', data: null },
        LOCATION_CODE: { description: 'Location Code', data: null },
        ETA: { description: 'ETA', data: null },
    };

    public getProperties() {
        return this.PROPERTIES;
    }
}
