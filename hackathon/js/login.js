function handleGoogleLogin() {
  alert("🔐 Google Sign-In will be implemented here using OAuth2 or Firebase.");
}

const loginUser = async (email, password) => {
  const res = await fetch("https://your-api.com/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  if (res.ok) {
    localStorage.setItem("token", data.token);
    window.location.href = "profile.html";
  } else {
    alert(data.message || "Login failed");
  }
};
