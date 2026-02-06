
type SectionTitleProps = {
  title: string;
  subtitle?: string;
  actionText?: string;
  onActionClick?: () => void;
};

export function SectionTitle({
  title,
  subtitle,
  actionText,
  onActionClick,
}: SectionTitleProps) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <h2 className="text-xl md:text-2xl font-bold tracking-tight">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-1 text-sm text-white/60">
            {subtitle}
          </p>
        )}
      </div>

      {actionText && (
        <button
          onClick={onActionClick}
          className="text-sm font-semibold text-orange-400 hover:text-orange-300 transition"
        >
          {actionText} →
        </button>
      )}
    </div>
  );
}
