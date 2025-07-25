interface VerticalSeparatorProps {
  className?: string;
}

export default function VerticalSeparator({
  className = '',
}: VerticalSeparatorProps) {
  return <div className={`w-px bg-gray-200 self-stretch ${className}`} />;
}
