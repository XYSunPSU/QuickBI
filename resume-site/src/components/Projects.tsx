"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const projects = [
  {
    title: "零售经营分析",
    period: "2024.11 - 2025.01",
    color: "border-l-primary",
    highlights: [
      {
        label: "业务诊断",
        desc: "围绕五大经营板块，通过分析营收、利润、费用等核心经营数据，构建系统化经营分析矩阵，提升管理层决策效率",
      },
      {
        label: "绩效拆解",
        desc: "多维度量化各部门经营目标，可视化展现各部门绩效达标率、对各部门和员工的绩效进行评估和排名，降本增效",
      },
      {
        label: "用户分析",
        desc: "通过多维度数据分析用户新增、留存、复购、流失与召回的转化链路，T+1 监控活跃度变化，为优化策略提供依据",
      },
      {
        label: "渠道分析",
        desc: "运用杜邦分析法自上而下拆解利润达成路径，将利润相关指标分解至各业务单元，精准识别关键增长点与优化空间",
      },
    ],
  },
  {
    title: "零售年度目标测算",
    period: "2024.09 - 2024.12",
    color: "border-l-accent",
    highlights: [
      {
        label: "目标拆解",
        desc: "梳理并搭建零售目标拆解模型，将公司25年销售总目标细化分解到各核心业务单元，结合业绩指标实现业务全流程覆盖",
      },
      {
        label: "数据测算",
        desc: "基于24年实际业务数据和历史指标表现，制定科学的业绩测算公式和多维度分析体系，确保目标分配的合理性和前瞻性",
      },
      {
        label: "动态追踪",
        desc: "搭建目标动态追踪与定期回顾机制，持续优化目标拆解策略，保证各业务单元目标分配的科学性和业务响应的敏捷性",
      },
      {
        label: "科学管理",
        desc: "设计并实现目标自动分配与动态计算流程，结合在线文档与BI看板，支持各业务单元业绩目标的高效分发与自动更新",
      },
    ],
  },
  {
    title: "零售客户池模型",
    period: "2025.04 - 2025.07",
    color: "border-l-accent-green",
    metrics: [
      { label: "老客销售", value: "+38%", color: "text-accent-green" },
      { label: "流失率下降", value: "15%", color: "text-primary" },
    ],
    highlights: [
      {
        label: "问题诊断",
        desc: "业务起步期用户积累有限，客户粘性低，新客流失率高，活跃率偏低，亟需精准识别高潜力客户群体并提升客户复购",
      },
      {
        label: "用户分层",
        desc: "基于结余与购买行为数据，将老客划分为二回、续订和流失人群，评估生命周期各阶段复购潜力，驱动精细化运营策略",
      },
      {
        label: "商业智能",
        desc: "将客户池模型落地至 BI 看板，实现重点用户的高效追踪与 T+1 销售监控，驱动业务快速优化重点人群运营策略",
      },
    ],
  },
  {
    title: "零售数据治理",
    period: "2023.06 - 2023.09",
    color: "border-l-accent-amber",
    metrics: [
      { label: "准确率提升", value: "90%", color: "text-accent-amber" },
    ],
    highlights: [
      {
        label: "数据采集",
        desc: "对接 POS 系统，系统化获取订单标签，定时定点接入数仓ODS层，实现零售订单数据系统化管理",
      },
      {
        label: "数据建模",
        desc: "梳理现有订单表结构，理清数据血缘关系，同时进行业务部门调研，结合订单标签建立多维度零售订单表",
      },
      {
        label: "数仓开发",
        desc: "搭建零售域数据仓库，基于 SQL 脚本实现公共层至应用层的全链路开发，支持全量与增量数据的定时更新与稳定运行",
      },
      {
        label: "数据质量",
        desc: "搭建数据质量监控体系，涵盖数据验证与任务运行监控机制，保障数据的准确性与稳定性，提升数仓运行可靠性",
      },
    ],
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects" title="项目经历">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className={`bg-card-bg border border-card-border rounded-xl p-6 border-l-4 ${project.color} hover:shadow-lg hover:shadow-black/10 transition-all`}
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <span className="text-xs text-text-muted bg-background px-3 py-1 rounded-full whitespace-nowrap ml-2">
                {project.period}
              </span>
            </div>

            {project.metrics && (
              <div className="flex gap-4 mb-4">
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="bg-background rounded-lg px-4 py-2 text-center"
                  >
                    <div className={`text-xl font-bold ${m.color}`}>
                      {m.value}
                    </div>
                    <div className="text-xs text-text-muted">{m.label}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="space-y-3">
              {project.highlights.map((h) => (
                <div key={h.label}>
                  <span className="text-sm font-medium text-primary">
                    {h.label}：
                  </span>
                  <span className="text-sm text-text-muted">{h.desc}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
