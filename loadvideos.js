function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

const videos = [
    { src: "Videos/FnafComms.mp4", name: "Project 1(NEW!!)" },
    { src: "Videos/2026-03-25 02-27-10.mp4", name: "Project 2(NEW!!)" },
    { src: "Videos/2024-09-23 03-07-51 (online-video-cutter.com).mp4", name: "Project 3(old video)" },
    { src: "Videos/2024-09-23 03-08-19 (online-video-cutter.com).mp4", name: "Project 4(old video)" },
    { src: "Videos/2024-09-23 03-08-48 (online-video-cutter.com).mp4", name: "Project 5(old video)" },
    { src: "Videos/2025-01-06 02-22-59.mp4", name: "Project 6(old video)" },
    { src: "Videos/2025-09-06_16-04-41.mp4", name: "Project 7" },
    { src: "Videos/2025-01-07 04-24-43.mp4", name: "Project 8(old video)" },
    { src: "Videos/2025-01-14 02-57-11.mp4", name: "Project 9(old video)" },
    { src: "Videos/2025-10-03 16-17-44.mp4", name: "Project 10" },
    { src: "Videos/Linterna.mp4", name: "Project 11" },
    { src: "Videos/VIDEO TEST 2 (online-video-cutter.com).mp4", name: "Project 12" },
    { src: "Videos/Vídeo sin título ‐ Hecho con Clipchamp (1).mp4", name: "Project 13(old video)" },
    { src: "Videos/Vídeo sin título ‐ Hecho con Clipchamp.mp4", name: "Project 14(old video)" },
    { src: "Videos/Kreicocomms.mp4", name: "Project 15" }
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
