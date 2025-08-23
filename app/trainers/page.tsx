"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Trainers() {
  const trainers = [
    {
      name: "Michael Ade",
      role: "Fitness Coach",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop",
    },
    {
      name: "Sarah Johnson",
      role: "Yoga Instructor",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop",
    },
    {
      name: "David Lee",
      role: "Strength Trainer",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop",
    },
    {
      name: "Aisha Bello",
      role: "Dance Coach",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop",
    },
  ];

  const faqs = [
    {
      question: "Do I need prior experience before joining?",
      answer: "Not at all! Our trainers work with all fitness levels, from beginners to advanced athletes.",
    },
    {
      question: "How can I book a personal training session?",
      answer: "You can contact us through the website or directly book a session with your preferred trainer.",
    },
    {
      question: "What’s included in the membership?",
      answer: "Membership includes access to gym facilities, group classes, and trainer guidance.",
    },
    {
      question: "Do you offer online classes?",
      answer: "Yes, we provide virtual fitness and yoga sessions so you can train from home.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="min-h-screen py-16 px-6 md:px-12">
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Meet Our Trainers
      </motion.h2>

      {/* Trainer Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {trainers.map((trainer, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <div className="overflow-hidden">
              <motion.img
                src={trainer.img}
                alt={trainer.name}
                className="w-full h-64 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                {trainer.name}
              </h3>
              <p className="text-gray-500">{trainer.role}</p>

            </div>
          </motion.div>
        ))}
      </div>

      {/* FAQ Section */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="border rounded-lg overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between items-center px-4 py-3 text-left text-lg font-medium text-gray-800 hover:bg-gray-50"
            >
              {faq.question}
              <span>{openIndex === i ? "−" : "+"}</span>
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 pb-4 text-gray-600"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
