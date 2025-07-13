
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBITSHmCb_Nu0D2lqGEp-qj-Qay8-OKRM4",
    authDomain: "crisismesh.firebaseapp.com",
    projectId: "crisismesh",
    storageBucket: "crisismesh.firebasestorage.app",
    messagingSenderId: "663143993924",
    appId: "1:663143993924:web:856281292c1ee4ab386211",
    measurementId: "G-HHQE1GQLMN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("needForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const city = document.getElementById("city").value;
    const helpType = document.getElementById("helpType").value;
    const urgency = document.getElementById("urgency").value; 
    const description = document.getElementById("description").value;

    if (helpType === "" || urgency === "") {
        alert("Please select a valid 'Type of Help Needed' and 'Urgency Level'.");
        return; 
    }

    try {
        await addDoc(collection(db, "help_requests"), {
            city,
            helpType,
            urgency, 
            description,
            timestamp: new Date()
        });
        alert("✅ Help request submitted successfully! We will connect you soon.");
        document.getElementById("needForm").reset();
        document.getElementById("helpType").value = "";
        document.getElementById("urgency").value = "";
    } catch (e) {
        console.error("❌ Error submitting request: ", e);
        alert("Error submitting request. Please try again.");
    }
});
