'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProgressRingProps {
  progress: number; // 0-10 (number of ticks filled)
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  animate?: boolean;
}

const sizeConfig = {
  sm: { radius: 30, strokeWidth: 3, tickLength: 6 },
  md: { radius: 50, strokeWidth: 4, tickLength: 10 },
  lg: { radius: 80, strokeWidth: 5, tickLength: 16 },
};

export function ProgressRing({
  progress,
  size = 'md',
  className,
  animate = true,
}: ProgressRingProps) {
  const { radius, strokeWidth, tickLength } = sizeConfig[size];
  const svgSize = (radius + tickLength + strokeWidth) * 2;
  const center = svgSize / 2;
  const totalTicks = 10;

  // Calculate angle for each tick (360 / 10 = 36 degrees)
  const angleStep = 360 / totalTicks;

  const getTickPosition = (index: number) => {
    // Start from top (-90 degrees offset)
    const angle = (index * angleStep - 90) * (Math.PI / 180);
    const innerRadius = radius;
    const outerRadius = radius + tickLength;

    return {
      x1: center + Math.cos(angle) * innerRadius,
      y1: center + Math.sin(angle) * innerRadius,
      x2: center + Math.cos(angle) * outerRadius,
      y2: center + Math.sin(angle) * outerRadius,
    };
  };

  return (
    <svg
      width={svgSize}
      height={svgSize}
      viewBox={`0 0 ${svgSize} ${svgSize}`}
      className={cn('overflow-visible', className)}
      aria-label={`Progress: ${progress} out of ${totalTicks}`}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={totalTicks}
    >
      {/* Background circle */}
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        className="text-sand-200 dark:text-border"
        opacity={0.2}
      />

      {/* Ticks */}
      {Array.from({ length: totalTicks }).map((_, index) => {
        const position = getTickPosition(index);
        const isFilled = index < progress;

        if (animate) {
          return (
            <motion.line
              key={index}
              {...position}
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              className={cn(
                'transition-colors duration-300',
                isFilled
                  ? 'text-brand-red-500'
                  : 'text-sand-200 dark:text-border'
              )}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.05,
                duration: 0.3,
                ease: 'easeOut',
              }}
            />
          );
        }

        return (
          <line
            key={index}
            {...position}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            className={cn(
              'transition-colors duration-300',
              isFilled
                ? 'text-brand-red-500'
                : 'text-sand-200 dark:text-border'
            )}
          />
        );
      })}

      {/* Center sparkle when complete */}
      {progress === totalTicks && (
        <motion.text
          x={center}
          y={center}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={size === 'sm' ? 16 : size === 'md' ? 24 : 32}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0, 1.2, 1, 0.8] }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          ✨
        </motion.text>
      )}
    </svg>
  );
}
