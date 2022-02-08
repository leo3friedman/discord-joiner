const backButton = document.getElementById("back-button");
const joinButton = document.getElementById("join-button");
const inviteInput = document.getElementById("invite-input");

backButton.onclick = () => {
    window.close();
}

joinButton.onclick = () => {
    const linkPre = inviteInput.value.indexOf("https://discord.gg/") === -1 ? "https://discord.gg/" : "";
    chrome.tabs.create({
        url: linkPre + inviteInput.value
    });
}