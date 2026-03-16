"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const contactInfo = [
  {
    label: "邮箱",
    value: "petersun0915@163.com",
    href: "mailto:petersun0915@163.com",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "电话",
    value: "15564376635",
    href: "tel:15564376635",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "期望城市",
    value: "北京",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <SectionWrapper id="contact" title="联系方式">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactInfo.map((item, idx) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            whileHover={{ y: -4 }}
            className="bg-card-bg border border-card-border rounded-xl p-6 text-center hover:border-primary/50 transition-all group"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
              {item.icon}
            </div>
            <h3 className="text-sm text-text-muted mb-2">{item.label}</h3>
            {item.href ? (
              <a
                href={item.href}
                className="text-lg font-medium hover:text-primary transition-colors"
              >
                {item.value}
              </a>
            ) : (
              <p className="text-lg font-medium">{item.value}</p>
            )}
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-20 text-center text-sm text-text-muted"
      >
        <p>© 2025 孙勋源. Built with Next.js & Tailwind CSS</p>
      </motion.div>
    </SectionWrapper>
  );
}
