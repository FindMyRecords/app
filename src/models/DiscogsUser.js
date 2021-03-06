export default class DiscogsUser {
    constructor({location, avatar_url, name, rating_avg, resource_url, username, wantlist_url, num_wantlist}) {
        this.location = location;
        this.avatarUrl = avatar_url;
        this.name = name;
        this.ratingAvg = rating_avg;
        this.resourceUrl = resource_url;
        this.username = username;
        this.wantlistUrl = wantlist_url;
        this.wantlistNb = num_wantlist;
    }

    avatarUrl;
    location;
    name;
    ratingAvg;
    resourceUrl;
    username;
    wantlistUrl;
    wantlistNb;
}