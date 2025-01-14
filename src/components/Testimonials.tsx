import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import { testimonials } from '../data/mockData';
import styles from '../styles/Testimonials.module.css';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.title}
        >
          Lo que dicen nuestros clientes
        </motion.h2>

        <div className={styles.testimonialContainer}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(_, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
              
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              
              className={styles.testimonialCard}
            >
              <FaQuoteLeft className={styles.quoteIcon} size={40} />
              <p className={styles.quote}>{testimonials[currentIndex].quote}</p>
              <div className={styles.author}>
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className={styles.avatar}
                />
                <div className={styles.authorInfo}>
                  <h4>{testimonials[currentIndex].name}</h4>
                  <p>{testimonials[currentIndex].position}</p>
                  <p>{testimonials[currentIndex].company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            className={`${styles.navButton} ${styles.prev}`}
            onClick={() => paginate(-1)}
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            className={`${styles.navButton} ${styles.next}`}
            onClick={() => paginate(1)}
          >
            <FaChevronRight size={24} />
          </button>

          <div className={styles.dots}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;