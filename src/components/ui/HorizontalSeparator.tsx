interface HorizontalSeparatorProps {
  className?: string;
}

export default function HorizontalSeparator({
  className = '',
}: HorizontalSeparatorProps) {
  return <div className={`h-px bg-gray-200 self-stretch ${className}`} />;
}
