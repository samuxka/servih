import React, { useEffect, useRef, useState } from 'react';

interface ScrollBlurRevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  threshold?: number;
}

export const ScrollBlurReveal: React.FC<ScrollBlurRevealProps> = ({
  children,
  className = '',
  delayMs = 0,
  threshold = 0.15,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else if (entry.boundingClientRect.top > 0) {
          // Reset when scrolled back above so the effect replays on scroll down just like the video
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delayMs}ms`,
        transitionProperty: 'opacity, filter, transform',
        transitionDuration: '950ms',
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
      }}
      className={`${
        isVisible
          ? 'opacity-100 blur-0 translate-y-0 scale-100'
          : 'opacity-20 blur-[14px] translate-y-8 scale-[0.99]'
      } ${className}`}
    >
      {children}
    </div>
  );
};

interface ScrollWordRevealProps {
  text: string;
  className?: string;
}

export const ScrollWordReveal: React.FC<ScrollWordRevealProps> = ({
  text,
  className = '',
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start revealing when top enters bottom 88% of screen, finish by 42% of screen
      const start = windowHeight * 0.9;
      const end = windowHeight * 0.38;
      const raw = (start - rect.top) / (start - end);
      const clamped = Math.max(0.18, Math.min(1, raw));
      setProgress(clamped);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [text]);

  const words = text.split(' ');

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, index) => {
        const wordThreshold = index / words.length;
        const isLit = progress >= wordThreshold;
        const isNear = Math.abs(progress - wordThreshold) < 0.14;

        return (
          <span
            key={index}
            style={{
              transition:
                'color 500ms cubic-bezier(0.22,1,0.36,1), filter 550ms cubic-bezier(0.22,1,0.36,1), opacity 500ms ease',
              filter: isLit
                ? 'blur(0px)'
                : isNear
                ? 'blur(1.5px)'
                : 'blur(3.5px)',
            }}
            className={
              isLit
                ? 'text-[#2d2613] opacity-100'
                : isNear
                ? 'text-[#2d2613]/55 opacity-75'
                : 'text-[#2d2613]/28 opacity-45'
            }
          >
            {word}{' '}
          </span>
        );
      })}
    </p>
  );
};

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  durationMs?: number;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  suffix = '',
  durationMs = 1500,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
        } else if (entry.boundingClientRect.top > 0) {
          setStarted(false);
          setCount(0);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const t = Math.min(elapsed / durationMs, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * target));
      if (t < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [started, target, durationMs]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
};

