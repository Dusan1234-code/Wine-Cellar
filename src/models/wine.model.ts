export class Wine {
    _id:number;
    name:string;
    year: number;
    grapes: string;
    country: string;
    region: string;
    description: string;

    constructor(obj?:any) {
        this._id = obj && obj._id || null;
        this.name = obj && obj._name || 0;
        this.year = obj && obj._year || 0;
        this.grapes = obj && obj._grapes || null;
        this.country = obj && obj._country || null;
        this.region = obj && obj._region || null;
        this.description = obj && obj._description || null;
    }

}

