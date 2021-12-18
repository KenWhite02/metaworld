import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ads } from './data';

import styles from './Carousel.module.css';

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const length = ads.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };
    timeout.current = setTimeout(nextSlide, 9000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  return (
    <>
      <div className={styles.carousel}>
        <div className={styles.carousel__wrapper}>
          {ads.map((slide) => {
            const { id, image, label, number } = slide;
            return (
              <div className={styles.carousel__slide} key={id}>
                {id === current && (
                  <div className={styles.carousel__slider}>
                    <Image
                      placeholder="blur"
                      blurDataURL={image}
                      layout="fill"
                      className={styles.carousel__image}
                      src={image}
                      alt={label}
                    />
                    <div className={styles.carousel__content}>
                      <h3 className={styles.carousel__title}>{label}</h3>
                      <p className={styles.carousel__number}>
                        {number}
                        <span className={styles.carousel__length}></span>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Carousel;
