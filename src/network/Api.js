exports.RestApi = function () {

    this.getData = async (userName,password) => {
        var baseUrl = 'https://swapi.co/api/';
        try {
            let response = await fetch(
                baseUrl ,{
                method: 'GET',
            }
            );
            let responseJson = await response.json();
            console.error(responseJson);
            return responseJson;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    }
}