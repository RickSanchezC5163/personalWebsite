function uniqueTags(items) {
  return ['全部', ...new Set(items.flatMap((item) => item.tags))];
}

function formatCounter(count) {
  return String(count).padStart(2, '0');
}

function renderHeroStats() {
  const allTags = new Set([...resources, ...blogs].flatMap((item) => item.tags));

  document.getElementById('resource-count').textContent = formatCounter(resources.length);
  document.getElementById('blog-count').textContent = formatCounter(blogs.length);
  document.getElementById('tag-count').textContent = formatCounter(allTags.size);
}

function createTagButton(tag, activeTag, onClick) {
  const button = document.createElement('button');
  button.className = `tag ${tag === activeTag ? 'active' : ''}`;
  button.textContent = tag;
  button.addEventListener('click', () => onClick(tag));
  return button;
}

function renderProfile() {
  const container = document.getElementById('profile-card');
  const links = profile.links
    .map(
      (item) =>
        `<a class="pixel-link" href="${item.url}" target="_blank" rel="noopener noreferrer">${item.label}</a>`
    )
    .join('');

  container.innerHTML = `
    <div class="profile-main">
      <p class="profile-label">PLAYER PROFILE</p>
      <h3 class="player-handle">${profile.name}</h3>
      <p class="player-role">${profile.role}</p>
      <div class="profile-copy">
        <p>${profile.bio}</p>
        <p>${profile.mission}</p>
      </div>
      <div class="info-strip">
        <span class="info-pill">STATUS · ${profile.status}</span>
        <span class="info-pill">MODE · SOLO LEARNING</span>
      </div>
    </div>
    <div class="profile-side">
      <div class="pixel-subpanel">
        <p class="subheading">MAIN QUEST</p>
        <div class="chip-grid">
          ${profile.focus.map((item) => `<span class="pixel-chip">${item}</span>`).join('')}
        </div>
      </div>
      <div class="pixel-subpanel">
        <p class="subheading">NOW PLAYING</p>
        <ul class="pixel-list">
          ${profile.current.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </div>
      <div class="pixel-subpanel">
        <p class="subheading">PORTALS</p>
        <div class="link-row">${links}</div>
      </div>
    </div>
  `;
}

function renderTags(containerId, items, activeTag, onChange) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  uniqueTags(items).forEach((tag) => {
    container.appendChild(createTagButton(tag, activeTag, onChange));
  });
}

function filterItems(items, activeTag) {
  if (activeTag === '全部') {
    return items;
  }
  return items.filter((item) => item.tags.includes(activeTag));
}

function renderEmptyState(list, message) {
  list.innerHTML = `<div class="empty-state">${message}</div>`;
}

function renderResources(activeTag) {
  renderTags('resource-tags', resources, activeTag, (nextTag) => renderResources(nextTag));

  const list = document.getElementById('resource-list');
  list.innerHTML = '';

  const filteredResources = filterItems(resources, activeTag);
  if (!filteredResources.length) {
    renderEmptyState(list, '这一关还没有资料，先去解锁新的学习内容。');
    return;
  }

  filteredResources.forEach((item, index) => {
    const article = document.createElement('article');
    article.className = 'card';
    article.innerHTML = `
      <div class="card-top">
        <span class="capsule">${item.type}</span>
        <span class="card-id">FILE ${formatCounter(index + 1)}</span>
      </div>
      <h3>${item.title}</h3>
      <div class="card-tags">
        ${item.tags.map((tag) => `<span class="mini-chip">${tag}</span>`).join('')}
      </div>
      <p>${item.summary}</p>
      <a class="link" href="${item.link}" target="_blank" rel="noopener noreferrer">OPEN FILE</a>
    `;
    list.appendChild(article);
  });
}

function renderBlogs(activeTag) {
  renderTags('blog-tags', blogs, activeTag, (nextTag) => renderBlogs(nextTag));

  const list = document.getElementById('blog-list');
  list.innerHTML = '';

  const filteredBlogs = filterItems(blogs, activeTag);
  if (!filteredBlogs.length) {
    renderEmptyState(list, '这一关还没有博客记录，下一篇高分笔记等你上传。');
    return;
  }

  filteredBlogs.forEach((item, index) => {
    const article = document.createElement('article');
    article.className = 'card';
    article.innerHTML = `
      <div class="card-top">
        <span class="capsule">${item.date}</span>
        <span class="card-id">LOG ${formatCounter(index + 1)}</span>
      </div>
      <h3>${item.title}</h3>
      <div class="card-tags">
        ${item.tags.map((tag) => `<span class="mini-chip">${tag}</span>`).join('')}
      </div>
      <p>${item.summary}</p>
    `;
    list.appendChild(article);
  });
}

renderHeroStats();
renderProfile();
renderResources('全部');
renderBlogs('全部');
