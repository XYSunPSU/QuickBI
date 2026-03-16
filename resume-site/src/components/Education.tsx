"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const educations = [
  {
    school: "利兹大学",
    major: "大数据与商业分析",
    period: "2021.09 - 2022.12",
    gpa: "GPA 3.6 / 4.0",
    icon: "🇬🇧",
  },
  {
    school: "宾夕法尼亚州立大学",
    major: "数据科学与大数据技术",
    period: "2017.09 - 2021.06",
    gpa: "GPA 3.81 / 4.0",
    icon: "🇺🇸",
  },
];

const courses = [
  "数据原理与技术",
  "数据挖掘",
  "数学建模",
  "统计分析",
  "计算机程序设计 Python",
  "大数据技术栈",
];

export default function Education() {
  return (
    <SectionWrapper id="education" title="教育经历">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {educations.map((edu, idx) => (
          <motion.div
            key={edu.school}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.15 }}
            whileHover={{ y: -4 }}
            className="bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary/50 transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{edu.icon}</span>
              <div>
                <h3 className="text-xl font-bold">{edu.school}</h3>
                <p className="text-primary text-sm">{edu.major}</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4 text-sm">
              <span className="text-text-muted">{edu.period}</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                {edu.gpa}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <h3 className="text-lg font-semibold mb-4 text-text-muted">
          核心课程
        </h3>
        <div className="flex flex-wrap gap-3">
          {courses.map((course, idx) => (
            <motion.span
              key={course}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 + idx * 0.05 }}
              className="px-4 py-2 bg-card-bg border border-card-border rounded-lg text-sm hover:border-primary/50 hover:text-primary transition-colors"
            >
              {course}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
