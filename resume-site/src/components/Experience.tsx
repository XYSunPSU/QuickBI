"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const responsibilities = [
  {
    title: "数据开发",
    desc: "负责搭建小仙炖数据仓库与指标体系，参与 ETL 开发与调度，实现数据链路的稳定运行与分析结果的高效落地",
    icon: "🔧",
  },
  {
    title: "商业智能",
    desc: "根据业务需求，构建多维度数据报表可视化、自动化输出，实现任意维度的呈现、邮件、预警，提升数据驱动力",
    icon: "📈",
  },
  {
    title: "指标体系",
    desc: "围绕用户需求与行为路径构建指标体系，推动核心指标落地与标准化管理，积累可用数据资产，增强企业数据驱动能力",
    icon: "🎯",
  },
  {
    title: "策略输出",
    desc: "结合标签体系提取高潜人群，制定精准营销策略，助力线上活动及线下高端邀约，实现数据驱动的运营策略落地",
    icon: "🚀",
  },
  {
    title: "用户画像",
    desc: "支持业务归因分析与结果落地，联合输出数据分析报告与汇报，提升数据洞察的表达效果与管理层对数据的理解力",
    icon: "👤",
  },
  {
    title: "算法建模",
    desc: "创建用户行为数据增维模型，强化展现每秒数据流失变化，降低随机性影响，放大用户行为特征，捕捉用户行为",
    icon: "🤖",
  },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience" title="工作经历">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* Timeline line */}
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

        <div className="ml-6 md:ml-20">
          {/* Company header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-4 mb-2">
              <h3 className="text-2xl font-bold">北京小仙炖生物科技公司</h3>
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
                数据分析师
              </span>
            </div>
            <p className="text-text-muted">2023年02月 - 至今</p>
          </div>

          {/* Responsibilities grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {responsibilities.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ scale: 1.02 }}
                className="bg-card-bg border border-card-border rounded-xl p-5 hover:border-primary/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xl">{item.icon}</span>
                  <h4 className="font-semibold text-primary">{item.title}</h4>
                </div>
                <p className="text-sm text-text-muted leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
