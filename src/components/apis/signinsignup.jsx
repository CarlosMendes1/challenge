export const signUp = async (email, password) => {
    fetch("https://reqres.in/api/register", {
        method: "POST",
        body: JSON.stringify({
            email: email,
            password: password
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then((response) => { 
        if(response.status === 200 && response.token)
            return response.json()
        
        return false
    })
};

export const login = async (email, password) => {
    fetch("https://reqres.in/api/login", {
        method: "POST",
        body: JSON.stringify({
            email: email,
            password: password
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then((response) => { 
        if(response.status === 200 && response.token)
            return response.json()
        
        return false
    })
};