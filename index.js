const axios = require("axios");

class Rodina {
    constructor(options) {
        this.authToken = options.authToken;
        this.url = {
            account: "https://api.rodina-rp.com/api/account",
            servers: "https://api.arizona-five.com/launcher/servers",
            rating: "https://api.rodina-rp.com/api/rating",
            news: "https://api.rodina-rp.com/api/news/admin",
            songs: "https://api.rodina-rp.com/api/music/songs",
        };
        this.headers = {
            headers: {
                Authorization: this.authToken,
                Referer: "https://rodina-rp.com/",
            },
        };
    }

    async getAllInfo() {
        const response = await axios.get(this.url.account, this.headers);
        return response.data;
    }

    async getAllRating() {
        const response = await axios.get(this.url.rating, this.headers);
        return response.data;
    }

    async getAllNews() {
        const response = await axios.get(this.url.news, this.headers);
        return response.data;
    }

    async getAllSongs() {
        const response = await axios.get(this.url.songs, this.headers);
        return response.data;
    }

    async getAllServers() {
        const response = await axios.get(this.url.servers, this.headers);
        return response.data;
    }

    async getInventory() {
        const response = await axios.get(this.url.account, this.headers);
        return response.data.inventory;
    }

    async getTransport() {
        const response = await axios.get(this.url.account, this.headers);
        return response.data.transports;
    }

    async getSkills() {
        const response = await axios.get(this.url.account, this.headers);
        return response.data.skills;
    }

    async getRatingFirst() {
        const response = await axios.get(this.url.account, this.headers);
        return response.data.rating_first;
    }
}

module.exports = Rodina;
