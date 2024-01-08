export const getUsers = async (page) => {
    const baseUrl = "https://reqres.in/api/users"

    const url = page ? baseUrl + '?page=' + page : baseUrl;

    fetch(url, {
        method: "GET"
    })
    .then(async(response) => { 
        if(response.status === 200){
            const usersResponse = await response.json();
            
            return usersResponse;
        }
        
        return false;
    })
};