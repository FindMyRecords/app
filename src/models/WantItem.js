export default class WantItem {
    constructor({basic_information}) {
        console.log(basic_information);
        this.title = basic_information.title;
        this.id = basic_information.id;
        this.artists = basic_information.artists;
    }
    
    id;
    title;
    artists;

    price;
    available;
}