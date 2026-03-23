import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Clock, 
  Package, 
  FileText, 
  GraduationCap, 
  UserPlus, 
  Calendar, 
  MessageSquare 
} from 'lucide-react';

const PRODUCT_SYSTEMS = [
  {
    name: "HRMS",
    fullName: "Human Resource Management System",
    desc: "Streamline employee lifecycles, payroll, and performance tracking in one unified platform.",
    icon: <Users size={24} />,
    color: "#3b82f6"
  },
  {
    name: "AMS",
    fullName: "Attendance Management System",
    desc: "Precision tracking for workforce hours, shifts, and leaves with real-time reporting.",
    icon: <Clock size={24} />,
    color: "#a855f7"
  },
  {
    name: "WMS",
    fullName: "Warehouse Management System",
    desc: "Optimize inventory flow, storage, and fulfillment with advanced tracking logic.",
    icon: <Package size={24} />,
    color: "#06b6d4"
  },
  {
    name: "DMS",
    fullName: "Document Management System",
    desc: "Secure, centralized storage for enterprise documents with version control and easy retrieval.",
    icon: <FileText size={24} />,
    color: "#eab308"
  },
  {
    name: "LMS",
    fullName: "Learning Management System",
    desc: "Empower your team with structured training modules, assessments, and progress tracking.",
    icon: <GraduationCap size={24} />,
    color: "#6366f1"
  },
  {
    name: "ATS",
    fullName: "Applicant Tracking System",
    desc: "Simplify recruitment from job posting to onboarding with automated pipeline management.",
    icon: <UserPlus size={24} />,
    color: "#f97316"
  }
];

export default function AdvancedSystems() {
  return (
    <section className="py-24 bg-[#f4f4f2]">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="flex-1">
            <span className="text-[12px] uppercase tracking-[0.3em] font-black text-gray-400 mb-4 block">
              OUR ERP SOLUTIONS
            </span>
            <h2 className="text-[60px] md:text-[84px] font-bold text-[#111] leading-[0.9] tracking-tight">
              Advanced <br /> Systems we <br /> Build
            </h2>
          </div>
          
          <div className="flex-1 pt-4">
            <p className="text-[18px] text-gray-600 leading-relaxed max-w-[500px] mb-10">
              End-to-end software solutions engineered for scale — from initial concept to 
              long-term evolution. We don't just develop software, we build systems designed 
              to perform, adapt, and last.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-black text-white px-8 py-4 text-[13px] font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-[#e8ff00] hover:text-black transition-all">
                <Calendar size={18} />
                Schedule a Demo
              </button>
              <button className="border border-black text-black px-8 py-4 text-[13px] font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-black hover:text-white transition-all">
                <MessageSquare size={18} />
                Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCT_SYSTEMS.map((system, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 transition-all hover:shadow-xl group"
            >
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${system.color}15`, color: system.color }}
              >
                {system.icon}
              </div>
              <h3 className="text-[24px] font-black text-black mb-2 flex items-center gap-3">
                {system.name}
                <span className="text-[12px] font-medium text-gray-400 uppercase tracking-widest">
                  System
                </span>
              </h3>
              <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
                <strong>{system.fullName}:</strong> {system.desc}
              </p>
              <div 
                className="h-1 w-12 rounded-full transition-all group-hover:w-full"
                style={{ backgroundColor: system.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}