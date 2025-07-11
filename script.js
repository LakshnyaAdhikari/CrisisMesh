// Import required Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBITSHmCb_Nu0D2lqGEp-qj-Qay8-OKRM4",
    authDomain: "crisismesh.firebaseapp.com",
    projectId: "crisismesh",
    storageBucket: "crisismesh.firebasestorage.app",
    messagingSenderId: "663143993924",
    appId: "1:663143993924:web:856281292c1ee4ab386211",
    measurementId: "G-HHQE1GQLMN"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Form submission logic
document.getElementById("needForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const city = document.getElementById("city").value;
    const helpType = document.getElementById("helpType").value;
    const urgency = document.getElementById("urgency").value; // Added new urgency select
    const description = document.getElementById("description").value;

    // Basic validation to ensure select fields are not on their disabled selected option
    if (helpType === "" || urgency === "") {
        alert("Please select a valid 'Type of Help Needed' and 'Urgency Level'.");
        return; // Stop submission if validation fails
    }

    try {
        await addDoc(collection(db, "help_requests"), {
            city,
            helpType,
            urgency, // Include urgency in data
            description,
            timestamp: new Date()
        });
        alert("✅ Help request submitted successfully! We will connect you soon.");
        document.getElementById("needForm").reset();
        // Optionally reset select elements to their default "Select a category" state
        document.getElementById("helpType").value = "";
        document.getElementById("urgency").value = "";
    } catch (e) {
        console.error("❌ Error submitting request: ", e);
        alert("Error submitting request. Please try again.");
    }
});