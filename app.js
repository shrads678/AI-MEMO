const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning Boss...");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon Master...");
    } else {
        speak("Good Evening Mam...");
    }
}

window.addEventListener('load', () => {
    speak("Initializing Memo...");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});

function takeCommand(message) {
    if (message.includes('hey') || message.includes('hello')) {
        speak("Hello Mam, How May I Help You?");
    } else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    } else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...");
    } else if (message.includes("open facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...");
    } else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on the internet regarding " + message;
        speak(finalText);
    } else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
        const finalText = "This is what I found on Wikipedia regarding " + message;
        speak(finalText);
    } else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        const finalText = "The current time is " + time;
        speak(finalText);
    } else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        const finalText = "Today's date is " + date;
        speak(finalText);
    } else if (message.includes('calculator')) {
        window.open('Calculator:///');
        const finalText = "Opening Calculator";
        speak(finalText);
        } else if (message.includes('notepad')) {
        window.open('Notepad:///');
        const finalText = "Opening Notepad";
        speak(finalText);

        // Basic Command Handler for Tekk AI Robot Assistant

// Function to handle commands
function handleCommand(command) {
    command = command.toLowerCase();

    if (command.includes("file manager")) {
        openFileManager();
    } else if (command.includes("camera")) {
        openCamera();
    } else if (command.includes("compiler")) {
        openCompiler();
    } else {
        console.log("Command not recognized.");
    }
}

// Function to open the File Manager
function openFileManager() {
    window.open('file:///C:/', '_blank'); // This works only in specific environments
    console.log("Opening File Manager...");
}

// Function to open the Camera
function openCamera() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            const videoElement = document.createElement('video');
            videoElement.srcObject = stream;
            videoElement.autoplay = true;
            document.body.appendChild(videoElement);
            console.log("Camera opened.");
        })
        .catch(error => console.error("Error accessing camera:", error));
}

// Function to open an Online Compiler
function openCompiler() {
    window.open('https://www.programiz.com/javascript/online-compiler', '_blank');
    console.log("Opening Online Compiler...");
}

// Example usage
handleCommand("open file manager");
handleCommand("start camera");
handleCommand("launch compiler");
    } else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on Google";
        speak(finalText);
    }
}
