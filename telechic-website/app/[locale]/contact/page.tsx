'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  purpose: z.string().min(1, 'Please select a purpose'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const t = useTranslations();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: t('contact.form.success'),
          variant: 'success',
        });
        reset();
      } else {
        throw new Error('Failed to send');
      }
    } catch (_error) {
      toast({
        title: t('contact.form.error'),
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-foreground/70">
              {t('contact.subtitle')}
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{t('contact.form.submit')}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t('contact.form.name')}</Label>
                  <Input
                    id="name"
                    placeholder={t('contact.form.namePlaceholder')}
                    {...register('name')}
                  />
                  {errors.name && (
                    <p className="text-sm text-brand-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{t('contact.form.email')}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t('contact.form.emailPlaceholder')}
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className="text-sm text-brand-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="purpose">{t('contact.form.purpose')}</Label>
                  <select
                    id="purpose"
                    {...register('purpose')}
                    className="flex h-12 w-full rounded-md border border-border bg-background px-4 py-3 text-base"
                  >
                    <option value="">{t('contact.form.purposePlaceholder')}</option>
                    <option value="general">{t('contact.purposes.general')}</option>
                    <option value="support">{t('contact.purposes.support')}</option>
                    <option value="business">{t('contact.purposes.business')}</option>
                    <option value="feedback">{t('contact.purposes.feedback')}</option>
                  </select>
                  {errors.purpose && (
                    <p className="text-sm text-brand-red-600">{errors.purpose.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t('contact.form.message')}</Label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder={t('contact.form.messagePlaceholder')}
                    {...register('message')}
                    className="flex w-full rounded-md border border-border bg-background px-4 py-3 text-base"
                  />
                  {errors.message && (
                    <p className="text-sm text-brand-red-600">{errors.message.message}</p>
                  )}
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting
                    ? t('contact.form.submitting')
                    : t('contact.form.submit')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
