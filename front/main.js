const FORM = document.querySelector("#form");

FORM.addEventListener("submit", (e) => {
    const EMAIL = document.querySelector("#email").value;
    const PASSWORD = document.querySelector("#password").value;

    e.preventDefault();

    fetch("http://localhost:5500/api/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: EMAIL,
            password: PASSWORD
        })
    }).then(res => res.json())
        .then(data => {
            console.log(data);
        });
});