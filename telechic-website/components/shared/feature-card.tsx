'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  points?: string[];
  delay?: number;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  points,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <Card className="h-full hover:shadow-elevated transition-shadow duration-300">
        <CardHeader>
          <div className="w-12 h-12 rounded-lg bg-brand-green-100 dark:bg-brand-green-900/20 flex items-center justify-center mb-4">
            <Icon className="h-6 w-6 text-brand-green-600 dark:text-brand-green-400" />
          </div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        {points && points.length > 0 && (
          <CardContent>
            <ul className="space-y-2">
              {points.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-foreground/70"
                >
                  <span className="text-brand-green-500 mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        )}
      </Card>
    </motion.div>
  );
}
