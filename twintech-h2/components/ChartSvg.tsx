'use client';

import { useEffect, useRef } from 'react';
import { cellVoltageData, soeData, fftData, type Locale } from '@/lib/demoData';

export type ChartType = 'cell' | 'soe' | 'fft';

type ChartSvgProps = {
  type: ChartType;
  locale: Locale;
};

const easternDigits = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];

function formatNumber(value: number, locale: Locale) {
  return locale === 'ar'
    ? value.toString().replace(/[0-9]/g, (d) => easternDigits[Number(d)])
    : value.toString();
}

export function ChartSvg({ type, locale }: ChartSvgProps) {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;
    const width = 720;
    const height = 280;
    const margin = { top: 32, right: 24, bottom: 44, left: 56 };
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    while (svg.firstChild) svg.removeChild(svg.firstChild);

    const axisColor = '#71717A';
    const x1 = margin.left;
    const x2 = width - margin.right;
    const y1 = height - margin.bottom;
    const y2 = margin.top;

    const axisGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    const xAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    xAxis.setAttribute('x1', `${x1}`);
    xAxis.setAttribute('y1', `${y1}`);
    xAxis.setAttribute('x2', `${x2}`);
    xAxis.setAttribute('y2', `${y1}`);
    xAxis.setAttribute('stroke', axisColor);
    xAxis.setAttribute('stroke-width', '2');
    axisGroup.appendChild(xAxis);
    const yAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    yAxis.setAttribute('x1', `${x1}`);
    yAxis.setAttribute('y1', `${y1}`);
    yAxis.setAttribute('x2', `${x1}`);
    yAxis.setAttribute('y2', `${y2}`);
    yAxis.setAttribute('stroke', axisColor);
    yAxis.setAttribute('stroke-width', '2');
    axisGroup.appendChild(yAxis);
    svg.appendChild(axisGroup);

    if (type === 'cell') {
      const data = cellVoltageData;
      const plotWidth = width - margin.left - margin.right;
      const plotHeight = height - margin.top - margin.bottom;
      const maxValue = Math.max(...data.map((d) => d.value + d.variance));
      const minValue = Math.min(...data.map((d) => d.value - d.variance));
      const xStep = plotWidth / (data.length - 1);
      const band = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      const upper = data.map((d, i) => `${i === 0 ? 'M' : 'L'}${margin.left + xStep * i},${margin.top + plotHeight - ((d.value + d.variance - minValue) / (maxValue - minValue)) * plotHeight}`);
      const lower = data.slice().reverse().map((d, i) => `L${margin.left + xStep * (data.length - 1 - i)},${margin.top + plotHeight - ((d.value - d.variance - minValue) / (maxValue - minValue)) * plotHeight}`);
      band.setAttribute('d', [...upper, ...lower, 'Z'].join(''));
      band.setAttribute('fill', '#3399FF');
      band.setAttribute('opacity', '0.18');
      svg.appendChild(band);

      const line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      const path = data.map((d, i) => `${i === 0 ? 'M' : 'L'}${margin.left + xStep * i},${margin.top + plotHeight - ((d.value - minValue) / (maxValue - minValue)) * plotHeight}`);
      line.setAttribute('d', path.join(' '));
      line.setAttribute('fill', 'none');
      line.setAttribute('stroke', '#0066CC');
      line.setAttribute('stroke-width', '3');
      svg.appendChild(line);

      data.forEach((d, i) => {
        const cx = margin.left + xStep * i;
        const cy = margin.top + plotHeight - ((d.value - minValue) / (maxValue - minValue)) * plotHeight;
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', `${cx}`);
        circle.setAttribute('cy', `${cy}`);
        circle.setAttribute('r', '6');
        circle.setAttribute('fill', d.variance > 0.03 ? '#EF4444' : '#22C55E');
        circle.addEventListener('mouseenter', (event) => {
          const text = `${formatNumber(d.value, locale)} V · σ=${formatNumber(d.variance, locale)}`;
          showTooltip(event as MouseEvent, text);
        });
        circle.addEventListener('mouseleave', hideTooltip);
        svg.appendChild(circle);
      });
    }

    if (type === 'soe') {
      const data = soeData;
      const plotWidth = width - margin.left - margin.right;
      const plotHeight = height - margin.top - margin.bottom;
      const xScale = (load: number) => margin.left + (load / 100) * plotWidth;
      const stateY: Record<typeof data[number]['state'], number> = {
        safe: margin.top + plotHeight * 0.25,
        hold: margin.top + plotHeight * 0.5,
        purge: margin.top + plotHeight * 0.75,
      };

      const safeRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      safeRect.setAttribute('x', `${margin.left + plotWidth * 0.2}`);
      safeRect.setAttribute('y', `${margin.top + plotHeight * 0.2}`);
      safeRect.setAttribute('width', `${plotWidth * 0.6}`);
      safeRect.setAttribute('height', `${plotHeight * 0.6}`);
      safeRect.setAttribute('fill', '#22C55E');
      safeRect.setAttribute('opacity', '0.12');
      svg.appendChild(safeRect);

      const line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      const path = data.map((d, i) => `${i === 0 ? 'M' : 'L'}${xScale(d.load)},${stateY[d.state]}`);
      line.setAttribute('d', path.join(' '));
      line.setAttribute('fill', 'none');
      line.setAttribute('stroke', '#0066CC');
      line.setAttribute('stroke-width', '3');
      svg.appendChild(line);

      data.forEach((d) => {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', `${xScale(d.load)}`);
        circle.setAttribute('cy', `${stateY[d.state]}`);
        const color = d.state === 'safe' ? '#22C55E' : d.state === 'hold' ? '#F59E0B' : '#EF4444';
        circle.setAttribute('r', '8');
        circle.setAttribute('fill', color);
        circle.addEventListener('mouseenter', (event) => {
          const labels = {
            safe: locale === 'ar' ? 'النطاق الآمن' : 'Safe band',
            hold: locale === 'ar' ? 'تثبيت' : 'Hold',
            purge: locale === 'ar' ? 'تطهير' : 'Purge',
          };
          showTooltip(event as MouseEvent, `${formatNumber(d.load, locale)}% · ${labels[d.state]}`);
        });
        circle.addEventListener('mouseleave', hideTooltip);
        svg.appendChild(circle);
      });
    }

    if (type === 'fft') {
      const data = fftData;
      const plotWidth = width - margin.left - margin.right;
      const plotHeight = height - margin.top - margin.bottom;
      const maxAmp = Math.max(...data.map((d) => d.amplitude));
      const barWidth = plotWidth / data.length - 12;

      data.forEach((d, i) => {
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        const x = margin.left + i * (barWidth + 12);
        const h = (d.amplitude / maxAmp) * plotHeight;
        rect.setAttribute('x', `${x}`);
        rect.setAttribute('y', `${margin.top + plotHeight - h}`);
        rect.setAttribute('width', `${barWidth}`);
        rect.setAttribute('height', `${h}`);
        rect.setAttribute('fill', d.freq === 120 ? '#EF4444' : '#3399FF');
        rect.addEventListener('mouseenter', (event) => {
          const text = `${formatNumber(d.freq, locale)} Hz · ${formatNumber(d.amplitude, locale)} g`;
          showTooltip(event as MouseEvent, text);
        });
        rect.addEventListener('mouseleave', hideTooltip);
        svg.appendChild(rect);
      });
    }

    function showTooltip(event: MouseEvent, text: string) {
      const tooltip = document.getElementById('chart-tooltip');
      if (!tooltip) return;
      tooltip.textContent = text;
      tooltip.style.opacity = '1';
      tooltip.style.left = `${event.clientX + 12}px`;
      tooltip.style.top = `${event.clientY - 24}px`;
    }

    function hideTooltip() {
      const tooltip = document.getElementById('chart-tooltip');
      if (!tooltip) return;
      tooltip.style.opacity = '0';
    }

    return () => hideTooltip();
  }, [type, locale]);

  return <svg ref={ref} className="h-[260px] w-full" role="img" aria-hidden />;
}
