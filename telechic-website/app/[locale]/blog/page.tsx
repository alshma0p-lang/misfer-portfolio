import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Calendar } from 'lucide-react';

export default function BlogPage() {
  const t = useTranslations();

  // Mock blog posts
  const posts = [
    {
      slug: 'getting-started',
      title: 'Getting Started with TeleChic',
      excerpt: 'Learn how to make the most of your beauty journey with TeleChic.',
      date: '2025-01-01',
      author: 'TeleChic Team',
      readingTime: 5,
    },
    {
      slug: 'ingredient-guide',
      title: 'Understanding Beauty Product Ingredients',
      excerpt: 'A comprehensive guide to reading and understanding product labels.',
      date: '2024-12-28',
      author: 'Beauty Expert',
      readingTime: 8,
    },
    {
      slug: '30-day-challenge',
      title: 'The 30-Day Beauty Challenge',
      excerpt: 'Transform your skin with our science-backed 30-day routine.',
      date: '2024-12-25',
      author: 'Skincare Specialist',
      readingTime: 6,
    },
  ];

  return (
    <div className="py-12">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('blog.title')}
          </h1>
          <p className="text-xl text-foreground/70">
            {t('blog.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="h-full hover:shadow-elevated transition-shadow">
                <CardHeader>
                  <div className="aspect-video bg-gradient-to-br from-brand-green-100 to-sand-100 dark:from-brand-green-900/20 dark:to-surface rounded-lg mb-4" />
                  <CardTitle className="hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/70 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-foreground/60">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readingTime} min read</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
