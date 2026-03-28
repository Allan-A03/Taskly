interface buttonaddprops {
  label?: string;
  color: string;
  className: string;
  children: React.ReactNode;
  onActive: () => void;
}

export function AddButton({
  label,
  color,
  className = "",
  children,
  onActive,
}: buttonaddprops) {
  return (
    <button
      onClick={onActive}
      className={`${className} ${color} text-white rounded-md max-h-9 p-2 gap-2 flex items-center justify-center`}
    >
      {label}
      {children}
    </button>
  );
}
