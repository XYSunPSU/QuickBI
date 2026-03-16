"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const skillCategories = [
  {
    title: "数据分析",
    icon: "📊",
    color: "from-primary to-blue-400",
    skills: [
      "指标体系",
      "量化测算",
      "归因分析",
      "异动分析",
      "业务诊断",
    ],
  },
  {
    title: "工具技能",
    icon: "🛠️",
    color: "from-accent to-purple-400",
    skills: [
      "Python",
      "Tableau",
      "PowerBI",
      "FineBI",
      "影刀RPA",
    ],
  },
  {
    title: "数据工程",
    icon: "⚙️",
    color: "from-accent-green to-emerald-400",
    skills: ["数仓分层", "维度建模", "SQL", "ETL"],
  },
  {
    title: "办公技能",
    icon: "💼",
    color: "from-accent-amber to-orange-400",
    skills: ["Office", "飞书", "Xmind", "ChatGPT"],
  },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills" title="专业技能">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            whileHover={{ y: -4 }}
            className="bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary/50 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{category.icon}</span>
              <h3 className="text-lg font-semibold">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-background rounded-lg text-sm text-text-muted border border-card-border hover:border-primary/50 hover:text-primary transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
