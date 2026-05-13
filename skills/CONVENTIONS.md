# Universal Skill Conventions

这些约定用于保证以后生成的 skills 能在不同 agent、不同机器和 GitHub 仓库之间迁移。

## 目录规范

每个 skill 必须是一个自包含目录：

```text
skill-name/
├── SKILL.md
├── agents/openai.yaml        # 可选
├── references/               # 可选，按需读取的详细说明
├── scripts/                  # 可选，可执行脚本
└── assets/                   # 可选，模板、图片、样例文件等
```

规则：

- `skill-name` 只使用小写字母、数字和连字符。
- `SKILL.md` frontmatter 只放 `name` 和 `description`。
- `name` 必须等于目录名。
- `description` 必须写清用途和触发场景，因为这是 agent 判断是否使用 skill 的主要依据。

## 通用化要求

以后生成 skill 时默认遵守：

- 不写死 `/home/peter/...`、当前仓库路径、个人用户名或机器特定路径。
- 不假设某个 agent 一定有某个插件、MCP、CLI 或环境变量。
- 需要外部工具时，在 `SKILL.md` 或 reference 中写清依赖、认证和失败时的 fallback。
- 引用资源时使用相对路径，例如 `references/template.md`。
- 不把密钥、token、cookie、个人账号信息写入 skill。
- 将业务模板、字段规则、工作流说明写成通用知识；将本机命令和授权流程写成可替换依赖。
- 大块细节放进 `references/`，让 agent 按需读取，避免每次触发都加载过多上下文。

## GitHub 管理方式

仓库中保留源版本：

```text
skills/
├── README.md
├── CONVENTIONS.md
└── <skill-name>/
```

本机 agent 中保留安装版本：

```text
~/.codex/skills/<skill-name>/
```

同步建议：

```bash
# 从仓库安装到 Codex
mkdir -p ~/.codex/skills
cp -R skills/<skill-name> ~/.codex/skills/

# 从 Codex 回写到仓库
cp -R ~/.codex/skills/<skill-name> skills/
```

如果将来有专门的 skill installer，可以替换为 installer 命令；目录结构仍保持不变。

## 新增 Skill 时的检查清单

- 是否有 `SKILL.md`。
- `name` 是否等于目录名。
- `description` 是否包含明确触发词和适用场景。
- 是否移除了本机绝对路径和个人私密信息。
- 是否把详细模板或长规则放到 `references/`。
- 是否更新了 `skills/README.md` 目录表。
- 是否在目标 agent 中验证过至少一次。

## 分类建议

- `custom`: 纯知识、模板、流程类 skills，优先做成完全通用。
- `tool-integrated`: 依赖 CLI/API/账号授权的 skills，必须说明依赖和权限。
- `company-specific`: 依赖公司内部系统或业务语境的 skills，可以开源目录结构，但谨慎公开内容。
