import React from 'react';
import { Smartphone, Gamepad2, Code2, Globe, Cpu } from 'lucide-react';
import { Badge } from '@/types';

const ICON_MAP: Record<string, React.ElementType> = {
    Smartphone,
    Gamepad2,
    Code2,
    Globe,
    Cpu,
};

interface FloatingBadgeProps {
    badge: Badge;
    delay?: number;
}

export const FloatingBadge: React.FC<FloatingBadgeProps> = ({ badge, delay = 0 }) => {
    const Icon = ICON_MAP[badge.icon] || Globe;
    const isGradient = badge.colorFrom !== badge.colorTo;

    // Construct gradient classes safely
    // Note: In a real production app with Tailwind JIT, dynamic classes might be purged if not safelisted.
    // For this specific case, we'll assume the colors used (blue, cyan, neutral) are available.
    const iconBgClass = isGradient
        ? `bg-gradient-to-br from-${badge.colorFrom} to-${badge.colorTo}`
        : `bg-${badge.colorFrom} border border-white/10`;

    return (
        <div
            className={`glass p-3 md:p-4 rounded-xl md:rounded-2xl shadow-2xl border border-white/10 backdrop-blur-xl animate-float ${badge.positionClass}`}
            style={{ animationDelay: `${delay}s` }}
        >
            <div className="flex items-center gap-2 md:gap-3">
                <div className={`p-2 md:p-2.5 rounded-lg md:rounded-xl shadow-lg ${iconBgClass}`}>
                    <Icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                    <p className="text-[10px] md:text-xs text-neutral-400 font-medium">{badge.label}</p>
                    <p className="text-xs md:text-sm font-bold text-white whitespace-nowrap">{badge.value}</p>
                </div>
            </div>
        </div>
    );
};
