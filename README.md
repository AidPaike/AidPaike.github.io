# Zhenye Fan — Academic Homepage

范振业的个人学术主页，展示研究方向、教育经历、论文与获奖信息。网站使用 Jekyll 构建，并由 GitHub Pages 自动发布。

## 在线访问

- 中文主页：<https://aidpaike.github.io/>
- English homepage: <https://aidpaike.github.io/en/>

## 主要内容

- 编译器模糊测试与软件测试
- 智能体安全
- 人工智能赋能软件工程
- 教育经历、代表论文与获奖情况

## 内容维护

| 文件 | 用途 |
| --- | --- |
| `_data/home.yml` | 中英文个人信息、研究方向、经历与奖项 |
| `_data/publications.yml` | 论文信息与论文链接 |
| `_layouts/home.html` | 中英文页面共用布局 |
| `_pages/about.md` | 中文主页入口 |
| `_pages/home-en.md` | 英文主页入口 |
| `assets/css/home.css` | 页面视觉与响应式样式 |
| `assets/js/home.js` | 导航与页面交互 |
| `images/zhenye-fan.jpg` | 个人照片 |

## 本地预览

需要 Ruby 与 Bundler：

```bash
bundle install
bundle exec jekyll serve
```

然后访问 <http://127.0.0.1:4000/>。英文页面位于 <http://127.0.0.1:4000/en/>。

## 发布

推送到 `master` 分支后，GitHub Pages 会自动构建并发布网站。
