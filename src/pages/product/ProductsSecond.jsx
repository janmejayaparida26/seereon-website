import React from 'react'
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
const PROJECTS = [
  {
    title: "Human Resource Management System",
    image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SFJNU3xlbnwwfHwwfHx8Mg%3D%3D", // Replace with your actual image path
    tags: ["UI/UX Design", "App Design", "Wireframe"],
    buttonColor: "#3b82f6", // Bright Blue
    darkButton: false
  },
  {
    title: "Asset Management System",
    image: "https://images.unsplash.com/photo-1730303827725-6cc9143877e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QXNzZXQlMjBtYW5hZ2VtZW50JTIwc3lzdGVtfGVufDB8fDB8fHwy", // Replace with your actual image path
    tags: ["UI/UX Design", "Web Design", "Wireframe"],
    buttonColor: "#000a1f", // Very Dark Navy
    darkButton: true
  },
  {
    title: "Wealth Management System",
    image: "https://images.unsplash.com/photo-1719381565370-86f9d7a9fc34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2VhbHRoJTIwbWFuYWdlbWVudCUyMHN5c3RlbXxlbnwwfHwwfHx8Mg%3D%3D", // Replace with your actual image path
    tags: ["UI/UX Design", "Web Design", "Wireframe"],
    buttonColor: "#000a1f", // Very Dark Navy
    darkButton: true
  },
  {
    title: "Distributed Management System",
    image: "https://images.unsplash.com/photo-1768796373907-418e59aee549?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VHJhbnNwb3J0JTIwbWFuYWdlbWVudCUyMHN5c3RlbXxlbnwwfHwwfHx8Mg%3D%3D", // Replace with your actual image path
    tags: ["UI/UX Design", "Web Design", "Wireframe"],
    buttonColor: "#000a1f", // Very Dark Navy
    darkButton: true
  },
  {
    title: "Learning Management System",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TGVhcm5pbmclMjBNYW5hZ2VtZW50JTIwc3lzdGVtfGVufDB8fDB8fHwy", // Replace with your actual image path
    tags: ["UI/UX Design", "Web Design", "Wireframe"],
    buttonColor: "#000a1f", // Very Dark Navy
    darkButton: true
  },
  {
    title: "Applicant Tracking System",
    image: "https://images.unsplash.com/photo-1763718528755-4bca23f82ac3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QXBwbGljYW50JTIwdHJhY2tpbmclMjBzeXN0ZW18ZW58MHx8MHx8fDI%3D", // Replace with your actual image path
    tags: ["UI/UX Design", "Web Design", "Wireframe"],
    buttonColor: "#000a1f", // Very Dark Navy
    darkButton: true
  }
];
const ProductsSecond = () => {
    return (
      <section className="py-5 bg-white">
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

export default ProductsSecond