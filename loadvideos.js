function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

const videos = [
    { src: "Videos/AdvancedSystem.mp4", name: "Project 1" },
    { src: "Videos/Fnaf.mp4", name: "Project 2" },
    { src: "Videos/Knife.mp4", name: "Project 3" },
    { src: "Videos/Fight1.mp4", name: "Project 4" },
];

function loadVideos() {
    const container = document.getElementById("videosContainer");
    if (!container) return;

    videos.forEach(video => {
        const card = document.createElement("div");
        card.className = "video-card";

        card.innerHTML = `
            <div class="video-container">
                <video width="100%" height="auto" controls>
                    <source src="${video.src}" type="video/mp4">
                </video>
            </div>
            <div class="video-info">
                <p>${video.name}</p>
            </div>
        `;

        container.appendChild(card);
    });
}

window.addEventListener("load", loadVideos);
