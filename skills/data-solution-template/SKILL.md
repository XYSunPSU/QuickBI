---
name: data-solution-template
description: Create Chinese business data solution documents using the company template learned from the Feishu document "0330 | 孕产单店模型数据方案". Use when the user asks to create, draft, refine, or structure a 数据方案, 数据模型方案, BI 看板方案, 单店模型方案, 数据口径方案, 数据链路方案, or any project document that needs background/objectives, requirements, core members, data map, metric definitions, data lineage, ODS/DWD/ADS modeling, and dashboard design.
---

# Data Solution Template

## Overview

Use this skill to draft structured Chinese data solution documents for business analytics, data modeling, and BI dashboard projects. The canonical style is concise, business-first, and implementation-ready: start from business goals, then define口径,链路,模型表,看板, and risks.

## Required Reference

Before drafting or revising a data solution, read `references/template.md`. It contains the reusable document structure, example table fields, checklist, and output style.

## Workflow

1. Clarify the business subject, analysis object, target output, time grain, data sources, and owner roles when they are not already available.
2. Draft the document in this fixed top-level structure:
   - 一、背景与目标
   - 二、需求文档
   - 三、核心成员与项目群组
   - 四、解决方案
3. Under `四、解决方案`, always include these five subsections:
   - `1、数据大图`
   - `2、数据口径`
   - `3、数据链路`
   - `4、数据建模`
   - `5、数据看板`
4. Keep data口径 as the center of the solution. Use a table with columns: `分类`, `费用项/指标项`, `当前口径/说明`, `主要数据来源`, `备注/风险`.
5. In data modeling, describe ODS, DWD, and ADS responsibilities separately. Include table names, Chinese names, fields, and each layer's purpose.
6. In dashboard design, specify dashboard name, filters, main views, metric hierarchy, and a monthly matrix or another view that matches the business context.

## Style Rules

- Write in Chinese unless the user asks otherwise.
- Prefer practical business wording over abstract technical description.
- Preserve unknowns as `待确认`, `需要业务确认`, `需要财务确认`, or `需要技术支持`; do not invent certainty.
- Use English table names and field names, with Chinese explanations.
- Make the output usable by business, finance, and technical stakeholders.
- If creating a Feishu document, keep the same section order and table shapes from the reference.

## Useful Triggers

- "帮我写一个数据方案"
- "生成某某业务的数据模型方案"
- "按孕产单店模型那种格式写"
- "做一个 BI 看板方案"
- "梳理指标口径/数据链路/ODS DWD ADS 建模"
