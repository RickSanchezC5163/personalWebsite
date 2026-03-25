# personalWebsite

一个可直接部署到 **GitHub Pages（github.io）** 的个人网站模板，目标是：

- 按标签整理学习资料；
- 发布论文阅读后的博客；
- 采用科技感视觉风格（深色、霓虹、网格背景）。

## 本地预览

```bash
python3 -m http.server 8000
```

然后打开 `http://localhost:8000`。

## 内容维护

主要在 `content.js` 中维护：

- `resources`：学习资料列表（标题、类型、标签、摘要、链接）
- `blogs`：论文阅读博客列表（标题、日期、标签、摘要）

## 部署到 github.io

> 假设仓库名是 `personalWebsite`，用户名是 `yourname`。

1. 将代码推送到 GitHub 仓库默认分支 `main`。
2. 在仓库 `Settings -> Pages` 中将 **Source** 设为 **GitHub Actions**。
3. 本仓库已包含 `.github/workflows/deploy.yml`，每次推送到 `main` 会自动部署。
4. 部署后访问：
   - `https://yourname.github.io/personalWebsite/`
   - 若是用户主页仓库（仓库名为 `yourname.github.io`），则访问 `https://yourname.github.io/`
