# Skills Catalog

这个目录用于保存可复用、可版本化、可迁移到不同 agent 的 skills。

本仓库里的 `skills/` 是 GitHub 源目录；本机运行时可把需要的 skill 复制或安装到对应 agent 的 skills 目录，例如 `~/.codex/skills`。

## 使用约定

- 每个 skill 一个独立目录，目录名和 `SKILL.md` frontmatter 里的 `name` 保持一致。
- 每个 skill 必须包含 `SKILL.md`。
- 复杂细节放到 `references/`，大文件或模板放到 `assets/`，确定性脚本放到 `scripts/`。
- 新增或修改 skill 时，同步更新本目录。
- 通用化规则见 [CONVENTIONS.md](CONVENTIONS.md)。

## 自定义通用 Skills

| Skill | 用途 | 典型触发场景 | 依赖 | 可迁移性 |
| --- | --- | --- | --- | --- |
| `data-solution-template` | 按「0330 \| 孕产单店模型数据方案」沉淀的结构，生成中文业务数据方案、模型方案和 BI 看板方案。 | “帮我写一个数据方案”、“按孕产单店模型那种格式写”、“梳理数据口径/数据链路/ODS DWD ADS 建模”、“生成 BI 看板方案”。 | 无强制外部依赖；如需读取/创建飞书文档，可配合飞书类工具。 | 通用，可放到任何支持 `SKILL.md` 的 agent 中使用。 |

## 本机工具集成 Skills

下面这些 skills 当前主要来自本机工具集成，依赖特定 CLI、账号授权或内部 API。它们可以登记在目录里，但不默认视为“完全通用”。如果要推到 GitHub 复用，需要同时写清安装、认证和权限要求。

| Skill | 用途 | 典型触发场景 | 依赖/限制 |
| --- | --- | --- | --- |
| `guancli` | 只读分析观远 BI / Guandata 的 ETL、数据集、页面、卡片、血缘、SQL、资源树、表单填报等。 | “看一下这个 page”、“贴一下这个 ETL 的 SQL”、“搜某个数据集”、“这个页面卡片用了哪些 ds”。 | 依赖 Guandata HTTP API、账号和环境配置。 |
| `lark-approval` | 飞书审批实例和审批任务管理。 | 查询审批实例、审批任务。 | 依赖 `lark-cli` 和飞书授权。 |
| `lark-attendance` | 查询自己的飞书考勤打卡记录。 | 查看考勤、打卡记录。 | 依赖 `lark-cli` 和飞书授权。 |
| `lark-base` | 操作飞书多维表格 Base，包括搜索、表结构、字段、记录、视图、工作流等。 | 建表、读写记录、字段设计、公式字段、跨表计算、Base 数据分析。 | 依赖 `lark-cli` 和飞书授权。 |
| `lark-calendar` | 管理飞书日历和会议日程。 | 查看日程、创建会议、查忙闲、预约会议室、回复邀请。 | 依赖 `lark-cli` 和飞书授权。 |
| `lark-contact` | 飞书通讯录姓名、邮箱和 open_id 解析。 | 给某人发消息、加群、排日程前解析身份；把 open_id 展示为姓名。 | 依赖 `lark-cli`、通讯录可见范围和飞书授权。 |
| `lark-doc` | 创建、读取和编辑飞书云文档。 | 搜索/读取文档、创建文档、局部更新文档、插入图片或文件。 | 依赖 `lark-cli` 和飞书授权。 |
| `lark-drive` | 管理飞书云空间文件、文件夹、评论、权限和导入导出。 | 上传/下载文件、整理云空间、导入 Word/Markdown/Excel/CSV。 | 依赖 `lark-cli` 和飞书授权。 |
| `lark-event` | 监听和消费飞书实时事件。 | IM 消息接收、reaction、群成员变化、长运行 webhook/stream 处理。 | 依赖 `lark-cli` 和事件订阅配置。 |
| `lark-im` | 飞书即时通讯收发消息、搜聊天记录、管群、传文件、表情回复。 | 发消息、查聊天记录、下载群文件、管理群成员。 | 依赖 `lark-cli` 和飞书授权。 |
| `lark-mail` | 飞书邮箱读写、草稿、发送、回复、转发、搜索和规则管理。 | 起草邮件、发邮件、查收件箱、回复/转发、下载附件。 | 依赖 `lark-cli` 和飞书邮箱授权。 |
| `lark-markdown` | 查看、创建、上传和编辑飞书 Markdown 文件。 | 创建或修改飞书 Markdown 文件。 | 依赖 `lark-cli` 和飞书授权。 |
| `lark-minutes` | 飞书妙记查询、下载、总结、待办、章节、上传音视频生成纪要。 | 获取会议纪要、逐字稿、妙记总结，或上传音视频生成妙记。 | 依赖 `lark-cli` 和飞书授权。 |
| `lark-okr` | 管理飞书 OKR。 | 查看/创建 OKR、管理目标和 KR、查看对齐关系。 | 依赖 `lark-cli` 和飞书授权。 |
| `lark-openapi-explorer` | 探索未被 CLI 封装的飞书原生 OpenAPI。 | 现有 lark skills 或 CLI 命令无法覆盖某个飞书需求。 | 依赖飞书 OpenAPI 文档、`lark-cli` 和权限配置。 |
| `lark-shared` | 飞书 CLI 共享基础：配置、认证、身份切换、权限、安全规则。 | 首次配置、登录授权、权限不足、切换 user/bot。 | 依赖 `lark-cli`。 |
| `lark-sheets` | 创建和操作飞书电子表格。 | 建表、读写单元格、追加行、查找内容、导出表格。 | 依赖 `lark-cli` 和飞书授权。 |
| `lark-skill-maker` | 创建 lark-cli 自定义 skill。 | 把飞书 API 操作封装成可复用 skill。 | 依赖 `lark-cli` 技能生态。 |
| `lark-slides` | 创建和编辑飞书幻灯片。 | 创建演示文稿、读取或替换幻灯片页面。 | 依赖 `lark-cli` 和飞书授权。 |
| `lark-task` | 管理飞书任务、清单和任务智能体。 | 创建待办、查看任务、拆子任务、分配成员、上传附件。 | 依赖 `lark-cli` 和飞书授权。 |
| `lark-vc` | 查询已结束飞书会议、纪要、逐字稿和参会人快照。 | 搜历史会议、整理会议纪要、查参会名单。 | 依赖 `lark-cli` 和飞书授权。 |
| `lark-vc-agent` | 让机器人加入/离开正在进行的飞书会议并读取实时事件。 | 代为入会、会中查看谁加入/离开/发言/共享屏幕。 | 依赖 `lark-cli`、机器人入会能力和会议权限。 |
| `lark-whiteboard` | 查询、导出和编辑飞书画板，也可用于结构化可视化表达。 | 导出画板、编辑画板、生成架构图/流程图/组织关系图。 | 依赖 `lark-cli` 和飞书授权。 |
| `lark-wiki` | 管理飞书知识库空间、成员和文档节点。 | 查找/创建知识库文档、浏览空间结构、移动或复制节点。 | 依赖 `lark-cli` 和飞书授权。 |
| `lark-workflow-meeting-summary` | 汇总指定时间范围的会议纪要并生成结构化报告。 | 整理会议纪要、生成会议周报、回顾一段时间会议内容。 | 依赖飞书会议/妙记/日历相关授权。 |
| `lark-workflow-standup-report` | 汇总日程和未完成任务，生成站会/日程待办摘要。 | 查看今天、明天、本周安排和待办。 | 依赖飞书日历和任务授权。 |

## 从 GitHub 使用

推荐把本目录作为仓库的一部分提交到 GitHub。新机器或新 agent 上使用时：

```bash
git clone <your-skills-repo>
mkdir -p ~/.codex/skills
cp -R <your-skills-repo>/skills/<skill-name> ~/.codex/skills/
```

如果目标 agent 的 skills 目录不同，只需要把 `<skill-name>` 文件夹复制到对应目录。不要依赖仓库外的绝对路径。
