import React from 'react';
import { Camera, Eye, Sparkles } from 'lucide-react';
import type { TranslationsType } from '../data/translations';

interface GalleryProps {
  t: TranslationsType;
}

export const Gallery: React.FC<GalleryProps> = ({ t }) => {
  // High quality realistic images for taxi park, city, fleet, app, team, and dispatch
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1400&q=90",
      aspect: "row-span-2 col-span-1 md:col-span-2",
      height: "h-72 sm:h-96",
    },
    {
      url: "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1200&q=90",
      aspect: "col-span-1",
      height: "h-64 sm:h-72",
    },
    {
      url: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=90",
      aspect: "col-span-1",
      height: "h-64 sm:h-72",
    },
    {
      url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=90",
      aspect: "col-span-1",
      height: "h-64 sm:h-72",
    },
    {
      url: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=90",
      aspect: "col-span-1",
      height: "h-64 sm:h-72",
    },
    {
      url: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1400&q=90",
      aspect: "col-span-1 md:col-span-2",
      height: "h-64 sm:h-72",
    },
    {
      url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=90",
      aspect: "col-span-1",
      height: "h-64 sm:h-72",
    },
    {
      url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=90",
      aspect: "col-span-1",
      height: "h-64 sm:h-72",
    },
  ];

  return (
    <section id="gallery" className="py-20 md:py-28 relative bg-transparent overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm backdrop-blur-md">
            <Camera className="w-3.5 h-3.5 text-blue-400" />
            <span>{t.gallery.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            {t.gallery.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-200">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {t.gallery.items.map((item, idx) => {
            const imgData = galleryImages[idx] || galleryImages[0];
            return (
              <div
                key={idx}
                className={`relative rounded-3xl overflow-hidden group border border-slate-200 hover:border-blue-500 transition-all duration-500 shadow-md ${imgData.height}`}
              >
                {/* Background Image with Zoom on Hover - Crystal Clear */}
                <img
                  src={imgData.url}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter contrast-105 brightness-100"
                />

                {/* Soft Clear Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-65 group-hover:opacity-75 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-[11px] font-bold text-blue-700 uppercase tracking-wider shadow-sm">
                    {item.tag}
                  </span>
                </div>

                {/* Bottom Content & Hover Hover Badge */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 flex flex-col justify-end transform transition-transform duration-300">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-blue-300 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="w-3.5 h-3.5 text-blue-300" />
                    <span>{t.gallery.caption}</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-200 transition-colors leading-snug drop-shadow-sm">
                    {item.title}
                  </h4>
                </div>

                {/* Hover Eye Action Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-blue-600/90 backdrop-blur-md border border-blue-400 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
