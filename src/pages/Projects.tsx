import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./Projects.css";

type Project = {
  id: number;
  title: string;
  category: string;
  location: string;
  details: string;
  images: string[]; // <-- artık tek image değil, galeri
  icon: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "OASIS HILL",
    category: "Lüks Konut Projesi",
    location: "Antalya, Aksu",
    details: "2+1'den 5+1'e • 120-280 m²",
    images: [
      "/images/OASIS HILL.jpeg",
      "/images/LUKS.jpeg",
      "/images/LUKS VILLA.jpeg",
      "/images/LUKS (2).jpeg",
    ],
    icon: "🌴",
  },
  {
    id: 2,
    title: "KAVSUT GRUP",
    category: "Modern Yaşam Kompleksi",
    location: "Antalya, Aksu",
    details: "1+1'den 4.5+1'e • 80-200 m²",
    images: [
      "/images/KAVSUT GRUP.jpeg",
      "/images/INSAAT.jpeg",
      "/images/COMP.jpeg",
      "/images/COMPANY.jpeg",
    ],
    icon: "🏙️",
  },
  {
    id: 3,
    title: "DORA REZİDANS",
    category: "Şehir Merkezi",
    location: "Antalya, Aksu",
    details: "3+1, 4.5+1 • 180-350 m²",
    images: [
      "/images/INS.jpeg",
      "/images/COMPANYY.jpeg",
      "/images/COMMPANY.jpeg",
      "/images/COMPANYY.jpeg",
    ],
    icon: "💎",
  },
  {
    id: 4,
    title: "DORA MODERN KONUT",
    category: "Modern Mimari",
    location: "Antalya, Aksu",
    details: "2+1, 3+1 • 90-150 m²",
    images: [
      "/images/LUKSS.jpeg",
      "/images/LUKSSS.jpeg",
      "/images/COMPANY.jpeg",
      "/images/INSAAT.jpeg",
    ],
    icon: "🏠",
  },
];

const premiumTexts: Record<number, string> = {
  1: `OASIS HILL, modern mimarinin zarafetle buluştuğu,
seçkin bir yaşam projesidir.

2+1’den 5+1’e kadar farklı daire seçenekleri,
120 – 280 m² aralığında geniş ve ferah yaşam alanları.

Antalya Aksu’daki konumu sayesinde hem huzurlu bir yaşam
hem de yüksek yatırım değeri sunar.`,
  2: `KAVSUT GRUP, modern şehir hayatını konforla birleştiren
çağdaş bir yaşam kompleksidir.

1+1’den 4.5+1’e kadar fonksiyonel daire tipleri,
80 – 200 m² aralığında verimli ve şık planlamalar.

Sosyal alanları ve ulaşım avantajlarıyla hem yaşam hem
yatırım için ideal bir projedir.`,
  3: `DORA REZİDANS, şehir merkezinde prestijli bir yaşam
arayışında olanlar için tasarlanmıştır.

3+1 ve 4.5+1 daire seçenekleri,
180 – 350 m² aralığında geniş ve yüksek konforlu alanlar.

Merkezi konumu sayesinde güçlü bir yatırım değeri ve
ayrıcalıklı bir yaşam sunar.`,
  4: `DORA MODERN KONUT, modern mimari anlayışıyla
rahat ve dengeli bir yaşam sunar.

2+1 ve 3+1 daire seçenekleri,
90 – 150 m² aralığında fonksiyonel ve kullanışlı planlar.

Sakin lokasyonu ve ulaşım kolaylığıyla yaşam kalitesini
ön planda tutar.`,
};

const encodeSrc = (src: string) => encodeURI(src);

const Projects: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [imgIndex, setImgIndex] = useState(0);

  const selectedProject = useMemo(() => {
    return projects.find((p) => p.id === selectedId) ?? null;
  }, [selectedId]);

  const openProject = useCallback((project: Project) => {
    setSelectedId(project.id);
    setImgIndex(0);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedId(null);
    setImgIndex(0);
  }, []);

  const nextImage = useCallback(() => {
    if (!selectedProject) return;
    setImgIndex((i) => (i + 1) % selectedProject.images.length);
  }, [selectedProject]);

  const prevImage = useCallback(() => {
    if (!selectedProject) return;
    setImgIndex((i) => (i - 1 + selectedProject.images.length) % selectedProject.images.length);
  }, [selectedProject]);

  // ESC + ok tuşları + scroll lock
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (selectedProject && (e.key === "ArrowRight" || e.key === "ArrowDown")) nextImage();
      if (selectedProject && (e.key === "ArrowLeft" || e.key === "ArrowUp")) prevImage();
    };

    if (selectedId !== null) {
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedId, selectedProject, closeModal, nextImage, prevImage]);

  const onCardKeyOpen = (e: React.KeyboardEvent<HTMLDivElement>, project: Project) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openProject(project);
    }
  };

  return (
    <div className="projects-page">
      <section className="projects-hero">
        <div className="hero-content">
          <h1>Projelerimiz</h1>
          <p>30 Yıllık Tecrübe ile Geleceği İnşa Ediyoruz</p>
        </div>
      </section>

      <section className="projects-section">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project) => {
              const cover = project.images[0];
              return (
                <div
                  key={project.id}
                  className="project-card"
                  role="button"
                  tabIndex={0}
                  onClick={() => openProject(project)}
                  onKeyDown={(e) => onCardKeyOpen(e, project)}
                  aria-label={`${project.title} detaylarını aç`}
                >
                  <div className="project-img-container">
                    <img
                      src={encodeSrc(cover)}
                      alt={project.title}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = encodeSrc("/images/COMPANY.jpeg");
                      }}
                    />
                    <div className="project-badge">{project.category}</div>
                    <div className="project-overlay">
                      <span className="project-overlay-text">Detayları Gör</span>
                    </div>
                  </div>

                  <div className="project-body">
                    <div className="project-header">
                      <h3>{project.title}</h3>
                      <span className="project-icon" aria-hidden="true">
                        {project.icon}
                      </span>
                    </div>

                    <p className="project-location">📍 {project.location}</p>
                    <div className="project-info-tag">{project.details}</div>

                    <button
                      className="btn-details"
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        openProject(project);
                      }}
                    >
                      Detayları İncele
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MODAL + GALERİ */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={closeModal} role="presentation">
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedProject.title} proje detayları`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" type="button" onClick={closeModal} aria-label="Kapat">
              ✕
            </button>

            {/* SOL: GALERİ */}
            <div className="modal-media">
              <img
                className="modal-media-img"
                src={encodeSrc(selectedProject.images[imgIndex])}
                alt={`${selectedProject.title} görsel ${imgIndex + 1}`}
                onError={(e) => {
                  e.currentTarget.src = encodeSrc("/images/COMPANY.jpeg");
                }}
              />

              <div className="modal-badge">{selectedProject.category}</div>

              {selectedProject.images.length > 1 && (
                <>
                  <button
                    className="gallery-arrow left"
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    aria-label="Önceki görsel"
                  >
                    ‹
                  </button>
                  <button
                    className="gallery-arrow right"
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    aria-label="Sonraki görsel"
                  >
                    ›
                  </button>

                  <div className="gallery-dots" aria-hidden="true">
                    {selectedProject.images.map((_, i) => (
                      <span key={i} className={`dot ${i === imgIndex ? "active" : ""}`} />
                    ))}
                  </div>

                  <div className="gallery-thumbs">
                    {selectedProject.images.map((src, i) => (
                      <button
                        key={src + i}
                        type="button"
                        className={`thumb ${i === imgIndex ? "active" : ""}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setImgIndex(i);
                        }}
                        aria-label={`${i + 1}. görsel`}
                      >
                        <img src={encodeSrc(src)} alt="" loading="lazy" />
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* SAĞ: İÇERİK */}
            <div className="modal-body">
              <div className="modal-title-row">
                <h2>{selectedProject.title}</h2>
                <span className="modal-icon" aria-hidden="true">
                  {selectedProject.icon}
                </span>
              </div>

              <p className="modal-location">📍 {selectedProject.location}</p>

              <div className="modal-pill">{selectedProject.details}</div>

              <p className="modal-text">{(premiumTexts[selectedProject.id] ?? "").trim()}</p>

              <div className="contact-actions">
                <a
                  href="https://wa.me/905533906832?text=Merhaba%2C%20proje%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                  target="_blank"
                  rel="noreferrer"
                  className="contact-btn contact-whatsapp"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="contact-emoji" aria-hidden="true">
                    💬
                  </span>
                  WhatsApp’tan Yaz
                </a>

                <a
                  href="tel:+905533906832"
                  className="contact-btn contact-outline"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="contact-emoji" aria-hidden="true">
                    📞
                  </span>
                  Ara
                </a>

                <a
                  href="mailto:info@dorainsaat.com"
                  className="contact-btn contact-soft"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="contact-emoji" aria-hidden="true">
                    ✉️
                  </span>
                  E-posta
                </a>
              </div>

              <button className="modal-close-bottom" type="button" onClick={closeModal}>
                Kapat
              </button>

              <div className="modal-hint">İpucu: Ok tuşlarıyla görseller arasında geçiş yapabilirsin.</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
