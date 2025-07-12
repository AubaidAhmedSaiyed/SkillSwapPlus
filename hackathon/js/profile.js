window.onload = () => {
  document.getElementById("nextBtn").addEventListener("click", () => {
    document.querySelector(".step-1").classList.add("hidden");
    document.querySelector(".step-2").classList.remove("hidden");
  });

  document.getElementById("backBtn").addEventListener("click", () => {
    document.querySelector(".step-2").classList.add("hidden");
    document.querySelector(".step-1").classList.remove("hidden");
  });

  document.getElementById("profile-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const profileData = {
      name: document.getElementById("name").value,
      location: document.getElementById("location").value,
      skillsOffered: document.getElementById("skills-offered").value,
      skillsWanted: document.getElementById("skills-wanted").value,
      availability: document.getElementById("availability").value,
      visibility: document.querySelector('input[name="visibility"]:checked').value
    };
    console.log("Form Submitted:", profileData);
    alert("Profile saved successfully!");
  });
};
