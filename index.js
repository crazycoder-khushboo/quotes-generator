const btnEl = document.getElementById("btn");
const quotesE1 = document.getElementById("quotes");

const apiKey = "NtJx70Vj3OuHbf/gQbuP8Q==tigv9iyWy0rXpE47";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/quotes?category=happiness";

async function getQuotes() {
  try {
    quotesE1.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "Share me a quote";

    quotesE1.innerText = data[0].quote;
  } catch (error) {
    quotesE1.innerText = "An error happened, try again later";
    btnEl.disabled = false;
    btnEl.innerText = "Share me a quote";
    console.log(error);
  }
}

btnEl.addEventListener("click", getQuotes);