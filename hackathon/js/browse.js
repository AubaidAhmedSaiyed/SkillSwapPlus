const dummyUsers = [
  { name: "Aarav Mehta", offered: "Web Development, React, JavaScript", wanted: "UI/UX Design, Figma", availability: "Evenings" },
  { name: "Priya Shah", offered: "Photoshop, Digital Art, Illustration", wanted: "JavaScript, Frontend Basics", availability: "Weekends" },
  { name: "Ravi Patel", offered: "Excel, Data Analysis, PowerPoint", wanted: "Web Design, HTML/CSS", availability: "Flexible" },
  { name: "Sneha Kaur", offered: "Content Writing, Blogging, SEO", wanted: "Canva, Branding", availability: "Evenings" },
  { name: "Vikram Nair", offered: "Python, Data Science, Pandas", wanted: "Public Speaking, Video Editing", availability: "Weekends" }
];

function renderUsers(users) {
  const container = document.getElementById("userCards");
  container.innerHTML = "";
  users.forEach(user => {
    const card = document.createElement("div");
    card.className = "user-card";
    card.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>Offers:</strong> ${user.offered}</p>
      <p><strong>Wants:</strong> ${user.wanted}</p>
      <p><strong>Availability:</strong> ${user.availability}</p>
      <button class="btn-primary">Request Swap</button>
    `;
    container.appendChild(card);
  });
}

document.getElementById("searchInput").addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = dummyUsers.filter(user =>
    user.offered.toLowerCase().includes(query) ||
    user.wanted.toLowerCase().includes(query)
  );
  renderUsers(filtered);
});

renderUsers(dummyUsers);
