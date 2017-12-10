export default class Result {
    constructor(result) {
        console.log(result)
        this.artists = result.data.artists;
        this.title = result.data.title;
        this.available = result.data.available;
        this.price = result.data.price;
        this.match = result.data.match;
        this.url = result.data.url;
        console.log(this);
    }

    artists;
    title;
    available;
    price;
    match;
    url;
}