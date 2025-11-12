import React, { useRef, useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Thumbs, Zoom, Keyboard, Mousewheel, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/thumbs';
import 'swiper/css/zoom';
import 'swiper/css/autoplay';

export default function FilmSwiper() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const films = [
    {
      id: 1,
      title: "Inception",
      year: "2010",
      genre: "Sci-Fi, Action",
      rating: "8.8",
      description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      image: "https://images.unsplash.com/photo-1489599809505-fc6a1adf50bc?w=800&h=400&fit=crop",
      poster: "https://images.unsplash.com/photo-1489599809505-fc6a1adf50bc?w=200&h=300&fit=crop",
      director: "Christopher Nolan",
      duration: "2h 28m"
    },
    {
      id: 2,
      title: "The Dark Knight",
      year: "2008",
      genre: "Action, Crime, Drama",
      rating: "9.0",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.",
      image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=800&h=400&fit=crop",
      poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=200&h=300&fit=crop",
      director: "Christopher Nolan",
      duration: "2h 32m"
    },
    {
      id: 3,
      title: "Pulp Fiction",
      year: "1994",
      genre: "Crime, Drama",
      rating: "8.9",
      description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      image: "https://images.unsplash.com/photo-1489599809505-fc6a1adf50bc?w=800&h=400&fit=crop",
      poster: "https://images.unsplash.com/photo-1489599809505-fc6a1adf50bc?w=200&h=300&fit=crop",
      director: "Quentin Tarantino",
      duration: "2h 34m"
    },
    {
      id: 4,
      title: "The Shawshank Redemption",
      year: "1994",
      genre: "Drama",
      rating: "9.3",
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=800&h=400&fit=crop",
      poster: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=200&h=300&fit=crop",
      director: "Frank Darabont",
      duration: "2h 22m"
    },
    {
      id: 5,
      title: "The Godfather",
      year: "1972",
      genre: "Crime, Drama",
      rating: "9.2",
      description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      image: "https://images.unsplash.com/photo-1489599809505-fc6a1adf50bc?w=800&h=400&fit=crop",
      poster: "https://images.unsplash.com/photo-1489599809505-fc6a1adf50bc?w=200&h=300&fit=crop",
      director: "Francis Ford Coppola",
      duration: "2h 55m"
    },
    {
      id: 6,
      title: "Interstellar",
      year: "2014",
      genre: "Adventure, Drama, Sci-Fi",
      rating: "8.6",
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=400&fit=crop",
      poster: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=200&h=300&fit=crop",
      director: "Christopher Nolan",
      duration: "2h 49m"
    }
  ];

  const handleSlideChange = useCallback((swiper) => {
    setActiveIndex(swiper.activeIndex);
    
    // Update progress bar
    const progressBar = document.querySelector('.swiper-progress-bar');
    if (progressBar) {
      progressBar.style.width = '0%';
      setTimeout(() => {
        progressBar.style.width = '100%';
      }, 50);
    }
  }, []);

  const goToSlide = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <div style={styles.container}>
      {/* Main Swiper */}
      <Swiper
        ref={swiperRef}
        onSlideChange={handleSlideChange}
        onAutoplayTimeLeft={(swiper, time, progress) => {
          const progressBar = document.querySelector('.swiper-progress-bar');
          if (progressBar) {
            progressBar.style.width = `${(1 - progress) * 100}%`;
          }
        }}
        effect={'fade'}
        speed={800}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          type: 'fraction',
          clickable: true,
          renderFraction: function (currentClass, totalClass) {
            return `<span class="${currentClass}"></span> / <span class="${totalClass}"></span>`;
          }
        }}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        zoom={true}
        keyboard={{
          enabled: true,
          onlyInViewport: false,
        }}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 1,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[EffectFade, Autoplay, Thumbs, Zoom, Keyboard, Mousewheel, Pagination, Navigation]}
        style={styles.mainSwiper}
      >
        {films.map((film, index) => (
          <SwiperSlide key={film.id}>
            <div style={styles.slideContent}>
              <div 
                style={{...styles.slideImageContainer, backgroundImage: `url(${film.image})`}}
                className="swiper-zoom-container"
              >
                <div style={styles.slideOverlay}>
                  <div style={styles.filmContent}>
                    <div style={styles.filmPoster}>
                      <img 
                        src={film.poster} 
                        alt={film.title}
                        style={styles.posterImage}
                      />
                    </div>
                    <div style={styles.filmInfo}>
                      <div style={styles.ratingBadge}>
                        ⭐ {film.rating}/10
                      </div>
                      <h1 style={styles.filmTitle}>{film.title}</h1>
                      <div style={styles.filmMeta}>
                        <span style={styles.filmYear}>{film.year}</span>
                        <span style={styles.filmDot}>•</span>
                        <span style={styles.filmGenre}>{film.genre}</span>
                        <span style={styles.filmDot}>•</span>
                        <span style={styles.filmDuration}>{film.duration}</span>
                      </div>
                      <p style={styles.filmDescription}>{film.description}</p>
                      <div style={styles.filmDirector}>
                        <strong>Director:</strong> {film.director}
                      </div>
                      <div style={styles.buttonGroup}>
                        <button style={styles.primaryButton}>
                          ▶ Watch Trailer
                        </button>
                        <button style={styles.secondaryButton}>
                          ＋ Add to Watchlist
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        
        {/* Custom Navigation Buttons */}
        <div style={styles.customNavigation}>
          <button className="custom-prev" style={styles.navButton}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="custom-next" style={styles.navButton}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Progress Bar */}
        <div style={styles.progressContainer}>
          <div className="swiper-progress-bar" style={styles.progressBar}></div>
        </div>
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={12}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Thumbs]}
        style={styles.thumbnailSwiper}
        breakpoints={{
          320: { slidesPerView: 3 },
          640: { slidesPerView: 4 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
        }}
      >
        {films.map((film, index) => (
          <SwiperSlide key={film.id}>
            <div 
              style={{
                ...styles.thumbnail,
                backgroundImage: `url(${film.poster})`,
                ...(index === activeIndex && styles.thumbnailActive)
              }}
              onClick={() => goToSlide(index)}
            >
              <div style={styles.thumbnailOverlay}>
                <span style={styles.thumbnailNumber}>{index + 1}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Slide Indicators */}
      <div style={styles.indicatorsContainer}>
        {films.map((_, index) => (
          <button
            key={index}
            style={{
              ...styles.indicator,
              ...(index === activeIndex && styles.indicatorActive)
            }}
            onClick={() => goToSlide(index)}
            aria-label={`Go to ${films[index].title}`}
          />
        ))}
      </div>

      {/* Add hover styles */}
      <style jsx>{`
        .custom-prev:hover, .custom-next:hover {
          background: rgba(255, 255, 255, 0.95) !important;
          transform: scale(1.1);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }
        
        .primary-button:hover {
          background: linear-gradient(45deg, #e74c3c, #c0392b) !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(231, 76, 60, 0.4);
        }
        
        .secondary-button:hover {
          background: rgba(255, 255, 255, 0.2) !important;
          border-color: white !important;
          transform: translateY(-2px);
        }
        
        .thumbnail:hover {
          opacity: 0.8 !important;
          transform: scale(1.05);
        }
        
        .indicator:hover {
          background: #e74c3c !important;
          transform: scale(1.3);
        }
        
        @media (max-width: 768px) {
          .main-swiper {
            height: 400px !important;
          }
          
          .film-title {
            font-size: 2rem !important;
          }
          
          .film-description {
            font-size: 0.9rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .main-swiper {
            height: 350px !important;
          }
          
          .film-title {
            font-size: 1.5rem !important;
          }
          
          .film-poster {
            display: none !important;
          }
          
          .thumbnail-swiper {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}

// Inline styles
const styles = {
  container: {
    position: 'relative',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
    background: '#0f0f0f',
  },
  mainSwiper: {
    height: '600px',
    borderRadius: '12px',
    background: '#000',
  },
  slideContent: {
    height: '100%',
    position: 'relative',
    color: 'white',
  },
  slideImageContainer: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
  },
  slideOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.3) 100%)',
    display: 'flex',
    alignItems: 'center',
    padding: '0 60px',
  },
  filmContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '40px',
    maxWidth: '1200px',
    width: '100%',
  },
  filmPoster: {
    flexShrink: 0,
  },
  posterImage: {
    width: '280px',
    height: '420px',
    borderRadius: '8px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.8)',
    objectFit: 'cover',
  },
  filmInfo: {
    flex: 1,
    maxWidth: '600px',
  },
  ratingBadge: {
    background: 'linear-gradient(45deg, #e74c3c, #c0392b)',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: 'bold',
    display: 'inline-block',
    marginBottom: '20px',
    boxShadow: '0 4px 15px rgba(231, 76, 60, 0.4)',
  },
  filmTitle: {
    fontSize: '3.5rem',
    fontWeight: '900',
    marginBottom: '16px',
    background: 'linear-gradient(45deg, #fff, #e74c3c)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  },
  filmMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '24px',
    fontSize: '16px',
    color: '#ccc',
  },
  filmDot: {
    color: '#e74c3c',
    fontWeight: 'bold',
  },
  filmYear: {
    color: '#e74c3c',
    fontWeight: '600',
  },
  filmGenre: {
    fontStyle: 'italic',
  },
  filmDuration: {
    background: 'rgba(255, 255, 255, 0.1)',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '14px',
  },
  filmDescription: {
    fontSize: '16px',
    lineHeight: '1.6',
    marginBottom: '20px',
    color: '#e0e0e0',
  },
  filmDirector: {
    fontSize: '14px',
    color: '#ccc',
    marginBottom: '30px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
  },
  primaryButton: {
    background: 'linear-gradient(45deg, #e74c3c, #c0392b)',
    color: 'white',
    border: 'none',
    padding: '14px 32px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(231, 76, 60, 0.3)',
  },
  secondaryButton: {
    background: 'transparent',
    color: 'white',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    padding: '14px 32px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  customNavigation: {
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    transform: 'translateY(-50%)',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 20px',
    zIndex: 10,
  },
  navButton: {
    background: 'rgba(0, 0, 0, 0.7)',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    color: 'white',
  },
  progressContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'rgba(255, 255, 255, 0.2)',
    zIndex: 10,
  },
  progressBar: {
    height: '100%',
    background: 'linear-gradient(45deg, #e74c3c, #c0392b)',
    width: '0%',
    transition: 'width 0.1s linear',
  },
  thumbnailSwiper: {
    marginTop: '20px',
    height: '120px',
    padding: '0 60px',
  },
  thumbnail: {
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '6px',
    cursor: 'pointer',
    opacity: 0.6,
    transition: 'all 0.3s ease',
    border: '2px solid transparent',
    position: 'relative',
  },
  thumbnailActive: {
    opacity: 1,
    borderColor: '#e74c3c',
    transform: 'scale(1.08)',
  },
  thumbnailOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  thumbnailNumber: {
    color: 'white',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  indicatorsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '8px',
    marginTop: '20px',
    padding: '0 20px 20px',
  },
  indicator: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    border: 'none',
    background: '#333',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  indicatorActive: {
    background: '#e74c3c',
    transform: 'scale(1.3)',
  },
};