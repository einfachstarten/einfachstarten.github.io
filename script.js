document.getElementById("generateButton").addEventListener("click", async () => {
    const response = await fetch("https://replit.com/@marcusbraun/TopTenTest/generate_question", {
        method: "POST",
    });
    const data = await response.json();
    document.getElementById("question").innerText = data.question;
});
