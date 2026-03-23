import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  {
    title: "Care Connect - Doctor Appointment App",
    image: "https://res.cloudinary.com/dcc7qgxmb/image/upload/v1739824551/CareConnect_Mockup.jpg", // Replace with your actual image path
    tags: ["UI/UX Design", "App Design", "Wireframe"],
    buttonColor: "#3b82f6", // Bright Blue
    darkButton: false
  },
  {
    title: "Dental - Dentist and Dental Clinic Website UIUX Design",
    image: "https://res.cloudinary.com/dcc7qgxmb/image/upload/v1739824551/Dental_Mockup.jpg", // Replace with your actual image path
    tags: ["UI/UX Design", "Web Design", "Wireframe"],
    buttonColor: "#000a1f", // Very Dark Navy
    darkButton: true
  }
];

export default function WorkShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="w-[95%] max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer overflow-hidden rounded-[40px]"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                <h3 className="text-white text-[28px] md:text-[32px] font-bold leading-tight mb-6 max-w-[90%]">
                  {project.title}
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-6 py-2 border border-white/40 rounded-full text-white text-[13px] font-medium backdrop-blur-sm transition-colors hover:bg-white hover:text-black"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Floating Action Button */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute bottom-8 right-8 w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-transform"
                  style={{ backgroundColor: project.buttonColor }}
                >
                  <ArrowUpRight 
                    size={28} 
                    className="text-white" 
                    strokeWidth={2.5}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}