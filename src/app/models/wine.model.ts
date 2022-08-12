export class Wine {
    _id: number;
    name: string;
    year: number;
    grapes: string;
    country: string;
    region: string;
    description: string;
    picture: string;

    constructor(obj?:any) {
        this._id = obj || obj._id || 0;
        this.name = obj || obj.name || "";
        this.year = obj || obj.year || 0;
        this.grapes = obj || obj.grapes || "";
        this.country = obj || obj.country || "";
        this.region = obj || obj.region || "";
        this.description = obj || obj.description || "";
        this.picture = obj || obj.picture || "";
    }
}

export class WineSearchResults {
    count: number;
    results: Wine[];
    
    constructor(obj?:any) {
        this.count = obj || obj.count || 0;
        this.results = obj || obj.results || obj.results.map((elem: Wine)=> new Wine(elem)) || [];
    }
}