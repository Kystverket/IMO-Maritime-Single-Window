export class PrevLocationTimeProperties {
    PROPERTIES = {
        LOCATION_NAME: { description: 'Location Name', data: null },
        LOCATION_CODE: { description: 'Location Code', data: null },
        ETD: { description: 'ETD', data: null },
    };

    public getProperties() {
        return this.PROPERTIES;
    }
}
