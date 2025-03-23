async function getRandomUser() {
    try {
        let response = await fetch("https://randomuser.me/api/");
        let data = await response.json();
        let user = data.results[0];

        document.getElementById("avatar").src = user.picture.large;
        document.getElementById("name").textContent = `${user.name.first} ${user.name.last}`;
        document.getElementById("email").textContent = `📧 Email: ${user.email}`;
        document.getElementById("nomer").textContent = `📞 nomer: ${user.phone}`
    } catch (error) {
        console.error("Xatolik:", error);
    }
}

getRandomUser();