import clubs from "./clubs.js";

class DataSource {

    static async searchClub(keyword) {
        try {
            const response = await fetch
                (`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${keyword}`);

            const responseJson = await response.json();

            if (!responseJson.teams) return Promise.reject(`${keyword} is not found`)

            return Promise.resolve(responseJson.teams)

        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    };

}

export default DataSource;