
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}) {
  const variantClasses =
    variant === "outline"
      ? "bg-transparent"
      : "";

  const sizeClasses =
    size === "lg"
      ? "h-12 px-6 text-base"
      : "h-10 px-4 text-sm";

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:opacity-50 disabled:pointer-events-none",
        variantClasses,
        sizeClasses,
        className
      )}
      {...props}
    />
  );
}

