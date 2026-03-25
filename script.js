function uniqueTags(items) {
  return ['全部', ...new Set(items.flatMap((item) => item.tags))];
}

function createTagButton(tag, activeTag, onClick) {
  const button = document.createElement('button');
  button.className = `tag ${tag === activeTag ? 'active' : ''}`;
  button.textContent = tag;
  button.addEventListener('click', () => onClick(tag));
  return button;
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

function renderResources(activeTag) {
  renderTags('resource-tags', resources, activeTag, (nextTag) => renderResources(nextTag));

  const list = document.getElementById('resource-list');
  list.innerHTML = '';

  filterItems(resources, activeTag).forEach((item) => {
    const article = document.createElement('article');
    article.className = 'card';
    article.innerHTML = `
      <h3>${item.title}</h3>
      <div class="meta">${item.type} · ${item.tags.join(' / ')}</div>
      <p>${item.summary}</p>
      <a class="link" href="${item.link}" target="_blank" rel="noopener noreferrer">打开资料</a>
    `;
    list.appendChild(article);
  });
}

function renderBlogs(activeTag) {
  renderTags('blog-tags', blogs, activeTag, (nextTag) => renderBlogs(nextTag));

  const list = document.getElementById('blog-list');
  list.innerHTML = '';

  filterItems(blogs, activeTag).forEach((item) => {
    const article = document.createElement('article');
    article.className = 'card';
    article.innerHTML = `
      <h3>${item.title}</h3>
      <div class="meta">${item.date} · ${item.tags.join(' / ')}</div>
      <p>${item.summary}</p>
    `;
    list.appendChild(article);
  });
}

renderResources('全部');
renderBlogs('全部');
