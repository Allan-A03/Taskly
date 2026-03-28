interface buttonprops {
  label?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  isActive?: boolean;
}

export function Button({
  label,
  isActive,
  onClick,
  children,
  className = "",
}: buttonprops) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-3 rounded-md p-1.5 ${className} ${isActive ? "bg-gray-950 text-white" : "bg-white text-gray-950 outline outline-gray-300"}`}
    >
      {label} {children}
      <p
        className={`font-normal text-xs rounded-full px-1.5 py-0.5 ${isActive ? "bg-gray-700 text-white" : "bg-gray-300  text-gray-950"}`}
      >
        0
      </p>
    </button>
  );
}
