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
    .then((response) => response.json())
    .then((json) => {
        console.log(json.token);
        return json.token;
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
    .then((response) => response.json())
    .then((json) => {
        console.log(json.token);
        return json.token;
    })
};