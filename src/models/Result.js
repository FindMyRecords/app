export default class Result {
    constructor(result) {
        this.artists = result.data.artists;
        this.title = result.data.title;
        this.available = result.data.available;
        this.price = result.data.price;
        this.match = result.data.match;
        this.url = result.data.url;
    }

    artists;
    title;
    available;
    price;
    match;
    url;
}