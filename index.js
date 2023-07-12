document.getElementById("button").onclick = function () {
    axios
        .get("http://localhost:4000/api/users")
        .then(function (response) {
            const data = response.data;
            document.getElementById("people").innerHTML = data
                .map(function (person) {
                    return '<li class="row">' + person;
                })
                .join("");
        })
        .catch(function (err) {
            document.getElementById("people").innerHTML =
                '<li class="text-danger">' + err.message + "</li>";
        });
};


//build an input on page with button


const input = document.querySelector('input');

document.querySelector('#friendsBtn').addEventListener('click', () => {
    axios.get(`http://localhost:4000/api/friends?friend=${input.value}`)
        .then((resp) => {
            const data = resp.data;
            document.querySelector('#friends').innerHTML = ''
            data.forEach(element => {
                const friendName = document.createElement("li");
                document.querySelector('#friends').appendChild(friendName);
                friendName.textContent = element;
            });
        
        })
        .catch(error =>
            console.log(error))

})


