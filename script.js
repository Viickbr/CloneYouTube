


const relatedVideos = [
  {
    title: "How 1999 Quake 3 Teaches Elite Software Engineering",
    channel: "Tariq10x",
    verified: true,
    views: "245 mil visualizações",
    time: "há 10 meses",
    duration: "59:48",
    isNew: false,
    thumbnail: "https://img.youtube.com/vi/NeLkxuzCssA/mqdefault.jpg"
  },
  {
    title: "I Fixed YouTube !",
    channel: "PewDiePie",
    verified: true,
    views: "2,5 mi de visualizações",
    time: "há 6 dias",
    duration: "17:38",
    isNew: true,
    thumbnail: "https://img.youtube.com/vi/5nL-Eq1lpDU/mqdefault.jpg"
  },
  {
    title: "Eu era um DEV nota 10. Agora sou inútil.",
    channel: "Lucas Montano",
    verified: true,
    views: "73 mil visualizações",
    time: "há 2 semanas",
    duration: "17:59",
    isNew: false,
    thumbnail: "https://img.youtube.com/vi/Qp1YaWd_1AA/mqdefault.jpg"
  },
  {
    title: "Can it get any worse?",
    channel: "The PrimeTime",
    verified: true,
    views: "306 mil visualizações",
    time: "há 3 dias",
    duration: "10:15",
    isNew: true,
    thumbnail: "https://img.youtube.com/vi/tPlIHBcpGt8/mqdefault.jpg"
  },
  {
    title: "NEM ELA SABIA SUA REAL IDENTIDADE | Caso Susan ...",
    channel: "Jaqueline Guerrero",
    verified: true,
    views: "515 mil visualizações",
    time: "há 6 meses",
    duration: "54:14",
    isNew: false,
    thumbnail: "https://img.youtube.com/vi/xV1kBuXYZl8/mqdefault.jpg"
  },
  {
    title: "cybersecurity is about to get weird",
    channel: "Low Level",
    verified: true,
    views: "586 mil visualizações",
    time: "há 11 dias",
    duration: "13:25",
    isNew: false,
    thumbnail: "https://img.youtube.com/vi/-ndTTdOW_i4/mqdefault.jpg"
  },
  {
    title: "Se sentindo incapaz? Veja este video.",
    channel: "Eslen Delanogare",
    verified: true,
    views: "66 mil visualizações",
    time: "há 4 dias",
    duration: "15:52",
    isNew: false,
    thumbnail: "https://img.youtube.com/vi/MSfzGbgvwFM/mqdefault.jpg"
  },
  {
    title: "we're so back",
    channel: "The PrimeTime",
    verified: true,
    views: "504 mil visualizações",
    time: "há 4 dias",
    duration: "12:34",
    isNew: true,
    thumbnail: "https://img.youtube.com/vi/5DP0az1q_8M/mqdefault.jpg"
  }
];


const mainVideo = {
  id: "HuDIPKKMCnk",
  thumbnail: "images/capa-principal.png"
};


function renderRelatedVideos() {
  const container = document.getElementById("relatedVideos");
  if (!container) return;

  container.innerHTML = relatedVideos.map(video => `
    <div class="related-card">
      <div class="thumb-wrap">
        <img
          src="${video.thumbnail}"
          alt="${video.title}"
          style="width:100%; height:100%; object-fit:cover; border-radius:8px;"
          onerror="this.style.display='none'"
        />
        <div class="duration-badge">${video.duration}</div>
        ${video.isNew ? '<div class="new-badge">Novo</div>' : ""}
      </div>
      <div class="related-info">
        <div class="related-title">${video.title}</div>
        <div class="related-channel">
          ${video.channel} ${video.verified ? "✓" : ""}
        </div>
        <div class="related-stats">${video.views} · ${video.time}</div>
      </div>
    </div>
  `).join("");
}




function renderMainThumbnail() {
  const placeholder = document.querySelector(".video-placeholder");
  if (!placeholder) return;

  const img = document.createElement("img");
  img.src = mainVideo.thumbnail;
  img.alt = "Embracing Failing";
  img.style.cssText = "position:absolute; inset:0; width:100%; height:100%; object-fit:cover; z-index:1;";

  img.onerror = () => img.remove();

  placeholder.appendChild(img);

}



let isPlaying = true;

function setupPlayButton() {
  const playBtn = document.getElementById("playBtn");
  if (!playBtn) return;

  playBtn.addEventListener("click", () => {
    isPlaying = !isPlaying;
    playBtn.textContent = isPlaying ? "⏸" : "▶️";
  });
}




let isMuted = false;

function setupMuteButton() {
  const muteBtn = document.getElementById("muteBtn");
  if (!muteBtn) return;

  muteBtn.addEventListener("click", () => {
    isMuted = !isMuted;
    muteBtn.textContent = isMuted ? "🔇" : "🔊";
  });
}




function setupProgressBar() {
  const bar = document.getElementById("progressBar");
  const fill = document.getElementById("progressFill");
  if (!bar || !fill) return;

  bar.addEventListener("click", (e) => {
    const rect = bar.getBoundingClientRect();
    const percent = ((e.clientX - rect.left) / rect.width) * 100;
    fill.style.width = percent + "%";
  });
}




let isSubscribed = false;

function setupSubscribeButton() {
  const subBtn = document.getElementById("subBtn");
  if (!subBtn) return;

  subBtn.addEventListener("click", () => {
    isSubscribed = !isSubscribed;
    subBtn.textContent = isSubscribed ? "✓ Inscrito" : "Inscrever-se";
    subBtn.classList.toggle("subscribed", isSubscribed);
  });
}




let isLiked = false;

function setupLikeButton() {
  const likeBtn = document.getElementById("likeBtn");
  const likeCount = document.getElementById("likeCount");
  if (!likeBtn || !likeCount) return;

  likeBtn.addEventListener("click", () => {
    isLiked = !isLiked;
    likeBtn.classList.toggle("liked", isLiked);
    likeCount.textContent = isLiked ? "10.001" : "10 mil";
  });
}




function setupShowMore() {
  const btn = document.getElementById("showMoreBtn");
  const descBox = document.querySelector(".description-box p");
  if (!btn || !descBox) return;

  const shortText = descBox.textContent;
  const longText = shortText + " Neste episódio exploramos como errar faz parte do crescimento profissional. Discussões sobre Linux, linha de comando, e a mentalidade correta para evoluir como desenvolvedor.";

  let expanded = false;

  btn.addEventListener("click", () => {
    expanded = !expanded;
    descBox.textContent = expanded ? longText : shortText;
    btn.textContent = expanded ? "mostrar menos" : "mostrar mais";
  });
}




function setupSearch() {
  const searchBtn = document.getElementById("searchBtn");
  const searchInput = document.getElementById("searchInput");
  if (!searchBtn || !searchInput) return;

  searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) {
      alert(`Buscando por: "${query}"\n(Funcionalidade de busca real não implementada neste clone)`);
    }
  });

  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") searchBtn.click();
  });
}




function setupSidebar() {
  const items = document.querySelectorAll(".sidebar-item");
  items.forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      items.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
    });
  });
}




function setupFullscreen() {
  const btn = document.getElementById("fullscreenBtn");
  const player = document.querySelector(".video-player");
  if (!btn || !player) return;

  btn.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      player.requestFullscreen().catch(() => {});
      btn.textContent = "⊠";
    } else {
      document.exitFullscreen();
      btn.textContent = "⛶";
    }
  });
}




document.addEventListener("DOMContentLoaded", () => {
  renderMainThumbnail();
  renderRelatedVideos();
  setupPlayButton();
  setupMuteButton();
  setupProgressBar();
  setupSubscribeButton();
  setupLikeButton();
  setupShowMore();
  setupSearch();
  setupSidebar();
  setupFullscreen();

  console.log("✅ YouTube Clone iniciado com sucesso!");
});