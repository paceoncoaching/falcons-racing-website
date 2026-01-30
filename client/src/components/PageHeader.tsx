import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image?: string;
}

export function PageHeader({ title, subtitle, image }: PageHeaderProps) {
  return (
    <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Abstract geometric background in case image fails or isn't provided */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black z-0"></div>
        {image && (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover opacity-40"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        
        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-20" 
          style={{ 
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl uppercase tracking-wider text-white mb-4 drop-shadow-xl">
            {title}
          </h1>
          {subtitle && (
            <div className="flex items-center justify-center gap-4">
              <div className="h-[2px] w-12 bg-primary"></div>
              <p className="font-body text-lg md:text-xl text-gray-300 max-w-2xl">
                {subtitle}
              </p>
              <div className="h-[2px] w-12 bg-primary"></div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
