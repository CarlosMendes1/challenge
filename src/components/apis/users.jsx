export const getUsers = async (page) => {
    const baseUrl = "https://reqres.in/api/users"

    const url = page ? baseUrl + '?page=' + page : baseUrl;

    fetch(url, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then((response) => { 
        if(response.status === 200){
            console.log(response);
            return response.json();
        }
        
        
        return false;
    })
};