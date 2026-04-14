import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "full" | "monogram";
  color?: "dark" | "light" | "gold";
  className?: string;
}

const colorMap = {
  dark: "#2C2824",
  light: "#FDFBF7",
  gold: "#C9A96E",
};

export function Logo({ variant = "full", color = "dark", className }: LogoProps) {
  const fill = colorMap[color];

  if (variant === "monogram") {
    return (
      <svg
        viewBox="0 0 60 50"
        className={cn("h-10 w-auto", className)}
        aria-label="ד״ר חיים טל"
      >
        {/* H */}
        <line x1="8" y1="5" x2="8" y2="35" stroke={fill} strokeWidth="1.8" />
        <line x1="22" y1="5" x2="22" y2="35" stroke={fill} strokeWidth="1.8" />
        <line x1="8" y1="20" x2="22" y2="20" stroke={fill} strokeWidth="1.8" />
        {/* T */}
        <line x1="32" y1="5" x2="52" y2="5" stroke={fill} strokeWidth="1.8" />
        <line x1="42" y1="5" x2="42" y2="35" stroke={fill} strokeWidth="1.8" />
      </svg>
    );
  }

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <svg
        viewBox="0 0 60 40"
        className="h-10 w-auto"
        aria-label="ד״ר חיים טל"
      >
        <line x1="8" y1="5" x2="8" y2="30" stroke={fill} strokeWidth="1.8" />
        <line x1="22" y1="5" x2="22" y2="30" stroke={fill} strokeWidth="1.8" />
        <line x1="8" y1="17" x2="22" y2="17" stroke={fill} strokeWidth="1.8" />
        <line x1="32" y1="5" x2="52" y2="5" stroke={fill} strokeWidth="1.8" />
        <line x1="42" y1="5" x2="42" y2="30" stroke={fill} strokeWidth="1.8" />
      </svg>
      <span
        className="mt-1 text-[10px] font-medium tracking-[0.2em]"
        style={{ color: fill }}
      >
        DR. HAIM TAL
      </span>
      <span
        className="text-[8px] tracking-[0.15em]"
        style={{ color: fill, opacity: 0.7 }}
      >
        AESTHETIC CLINIC
      </span>
    </div>
  );
}
