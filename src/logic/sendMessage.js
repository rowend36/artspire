export default function sendMessage(message) {
  fetch("https://buddy.reelest.workers.dev/johnson", {
    body: JSON.stringify(message),
    method: "POST",
  });
}
