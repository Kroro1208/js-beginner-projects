const containerEl = document.querySelector('.container');
const careers = ['YouTuber', 'WebDeveloper', 'Freelancer', 'Instructor'];
let careerIndex = 0;
let characterIndex = 0;

randomText();
function randomText() {
    characterIndex++
    containerEl.innerHTML = `<h1>I am ${careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"}
    ${careers[careerIndex].slice(0, characterIndex)}</h1>`;
    if (characterIndex === careers[careerIndex].length) {
        careerIndex++
        characterIndex = 0;
    }
    // これは全ての職業名が表示された確認
    if (careerIndex === careers.length) {
        careerIndex = 0;
    }
    setTimeout(randomText, 400)
}