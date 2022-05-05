const FORM = document.querySelector("#form");

FORM.addEventListener("submit", (e) => {
    const EMAIL = document.querySelector("#email");
    const PASSWORD = document.querySelector("#password");

    e.preventDefault();

    fetch("http://localhost:5500/api/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: EMAIL.value,
            password: PASSWORD.value
        })
    }).then(res => res.json())
        .then(data => {
            console.log(data);
        });

    EMAIL.value = "";
    PASSWORD.value = "";
});