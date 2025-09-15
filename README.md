Hugo + Stack 主题站点

本仓库已迁移为 Hugo 源码结构，使用 [hugo-theme-stack](https://github.com/CaiJimmy/hugo-theme-stack) 主题，并通过 GitHub Actions 自动构建与部署到 GitHub Pages。

本地开发：

1. 安装 Hugo Extended：`hugo version` 要显示 extended。
2. 启动预览：`hugo server -D`。
3. 新建文章：`hugo new posts/your-post.md`。

部署：

推送到 GitHub 后，Actions 会构建并发布到 Pages。首次需要在仓库 Settings -> Pages 中选择 "GitHub Actions" 作为来源。

备份：

之前站点静态文件已备份到仓库根目录下 `backup_pre_hugo_YYYYMMDD_HHMMSS/` 文件夹。

