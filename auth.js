import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyD1XRjbweJKfkJZvl83bWLxOE-46V112Fs",
    authDomain: "abel-16903.firebaseapp.com",
    projectId: "abel-16903",
    appId: "Y1:672303558470:web:beba2772f0b8682ed4ff47"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// DOM elements
const form = document.getElementById('auth-form');
const formTitle = document.getElementById('form-title');
const formDesc = document.getElementById('form-desc');
const toggleLink = document.getElementById('switch-to-login');
const resetLink = document.getElementById('reset-link');
const signupNames = document.getElementById('signup-names');
const submitBtn = document.getElementById('submit-btn');

let isLogin = false;

toggleLink.addEventListener('click', () => {
    isLogin = !isLogin;
    formTitle.textContent = isLogin ? 'LOG IN' : 'SIGN UP';
    formDesc.textContent = isLogin
        ? ''
        : 'Welcome. To create an account, please complete the form below, then follow the prompts.';
    toggleLink.textContent = isLogin ? 'SIGN UP' : 'SIGN IN';
    signupNames.style.display = isLogin ? 'none' : 'flex';
    submitBtn.textContent = isLogin ? 'LOGIN' : 'CREATE ACCOUNT';
    resetLink.classList.toggle('hide', !isLogin);
});

resetLink.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    if (!email) return alert("Enter your email to reset password");
    sendPasswordResetEmail(auth, email)
        .then(() => alert('Reset link sent.'))
        .catch((err) => alert(err.message));
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        if (isLogin) {
            await signInWithEmailAndPassword(auth, email, password);
            alert('Login successful');
            window.location.href = '/index.html';
        } else {
            await createUserWithEmailAndPassword(auth, email, password);
            alert('Account created');
            window.location.href = '/index.html';
        }
    } catch (err) {
        alert(err.message);
    }
});
