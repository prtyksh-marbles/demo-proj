import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: "Is EASE Right for You?",
    answer: "The EASE Neuromodulation headband is a state-of-the-art portable device designed for comprehensive treatment and management of conditions like depression. It uniquely combines Transcranial Direct Current Stimulation (tDCS), Cognitive Emotional Training (CET), and real-time Electroencephalography (EEG) monitoring to offer a complete, non-invasive solution for enhancing mental well-being."
  },
  {
    question: "What a Treatment Session Looks Like",
    answer: "An EASE session is straightforward and can be completed in a clinic or, once your doctor has configured your protocol, at home. You put on the EASE headband. The upper part delivers the tDCS stimulation; the lower part reads your EEG. Your doctor or the EASE app initiates your personalised stimulation protocol via Bluetooth. For 20 to 30 minutes, you receive gentle brain stimulation while completing CET exercises on your phone or tablet. The session ends automatically. Most people describe feeling a mild tingling sensation on the scalp — nothing more. Your doctor receives an EEG report after each session and can monitor your progress remotely. Most patients complete 20 sessions across 4 to 6 weeks, depending on the severity of their condition. Some see meaningful improvement within the first 10 sessions."
  },
  {
    question: "Is EASE effective for severe depression?",
    answer: "Yes. The AIIMS Delhi clinical validation study included patients with moderate to severe major depressive disorder. 63.8% saw significant reduction in symptoms and 84% achieved remission after 20 sessions. EASE can also be used alongside antidepressants for patients with treatment-resistant depression."
  },
  {
    question: "Can I use EASE alongside my antidepressants?",
    answer: "Yes, and for many patients this combination produces even better results. A 2013 study published in JAMA Psychiatry found that tDCS combined with the antidepressant sertraline showed synergistic benefits. Speak to your doctor about the right approach for your situation. Note: certain sodium channel blockers like carbamazepine may reduce tDCS efficacy — discuss your full medication list with your doctor."
  },
  {
    question: "How many sessions does it take to see results?",
    answer: "Most patients begin noticing improvement between sessions 8 and 15. The standard protocol is 20 sessions. Severe or long-standing depression may require 30 to 40 sessions, followed by maintenance sessions. Your doctor will guide you based on your EEG data and symptom scores."
  },
  {
    question: "Is tDCS safe? What are the side effects?",
    answer: "tDCS is non-invasive and well-tolerated. The most common side effect is a mild tingling or itching sensation at the electrode site during the session. Headaches have been reported by a small percentage of users and are typically mild and temporary. There are no systemic side effects because the current does not enter the bloodstream. EASE is CDSCO Class B approved, meeting India's highest standards for medical devices."
  },
  {
    question: "How do I find a doctor who offers EASE in India?",
    answer: "Visit marbles.health/find-a-doctor to search by city. EASE is currently available in Mumbai, Delhi, Bangalore, Hyderabad, and several other cities. If there is no partner doctor near you, fill in our patient form and our team will help you find the nearest option."
  }
];

const FAQItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="mb-4 bg-[#f8f9fa] rounded-2xl overflow-hidden transition-colors hover:bg-[#f1f3f5]">
      <button
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
        onClick={onClick}
      >
        <span className="text-[1.05rem] font-semibold text-[#111] pr-4">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="shrink-0"
        >
          <ChevronDown className="text-gray-500 w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-[#555] text-[0.95rem] leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#fcfdfd] py-24 px-6 md:px-12 lg:px-24 font-sans text-gray-900 border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
        {/* Left Column */}
        <div className="flex flex-col justify-between h-full">
          <h2 className="text-[5rem] lg:text-[7rem] font-bold text-[#e5e7eb] leading-none mb-12 tracking-tighter">
            FAQs
          </h2>
          
          <div className="space-y-6 max-w-[420px] bg-[#486CD9] rounded-3xl p-8 lg:p-10 shadow-lg mt-auto">
            <p className="text-[1.3rem] font-bold text-white leading-snug">
              If you have any further questions, get in touch with us
            </p>
            <p className="text-[1rem] text-white/90 leading-relaxed">
              Our team is more than happy to answer any further questions you might have.
            </p>
            <p className="text-[1rem] text-white/90 leading-relaxed">
              Give us a call on +91 8830200201 or contact us online.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-white text-[#486CD9] px-8 py-3.5 rounded-full text-[0.95rem] font-semibold flex items-center justify-center cursor-pointer shadow-[0_8px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_25px_rgba(0,0,0,0.15)] transition-shadow self-start"
            >
              Get on a call
            </motion.button>
          </div>
        </div>

        {/* Right Column (Accordion) */}
        <div className="flex flex-col mt-4 lg:mt-0">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
