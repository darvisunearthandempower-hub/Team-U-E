function welcomePlayer() {
    const playerName = document.getElementById("player-name").value;

    const message = document.getElementById("welcome-message");

    if (playerName === "") {
        message.textContent = "Please enter your player name.";
    } else {
        message.textContent = `Welcome to the team, ${playerName}!`;
    }
}
