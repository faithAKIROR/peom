function displayPoem(response) {
    console.log("poem generated");
    new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
});
}
function generatePoem(event) {
    event.preventDefault();
        
        let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "90796ab239dfftd1f27ee5coe1d1e41b";
    let context = "You are a romantic Poem expert and love to write short poems. Your mission is to write four line poem in basic HTML and seperate each line with a <br/> dont include the word html at the begining. Make sure to follow the user instructions bellow.Sign the poem with 'SheCodes AI' inside a <strong> tag at the end of the poem.";
    let prompt = `User instructions: Generate a poem about ${instructionsInput.value} in French`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    console.log("Generating poem...");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);
    

    axios.get(apiURL).then(displayPoem);

    new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
});
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

