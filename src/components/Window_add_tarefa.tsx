import { X } from "lucide-react";

interface windowprops {
  isOpen: boolean;
  onClosed: () => void;
}
export function AddTarefa({ isOpen, onClosed }: windowprops) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white min-w-1/3 min-h-1/2 max-w-max max-h-max rounded-lg shadow-2xl text-center">
        <div className="flex items-end justify-end">
          <button
            onClick={onClosed}
            className="bg-gray-300 text-black m-4 px-2 py-2 rounded "
          >
            <X className="size-3.5" />
          </button>
        </div>
        <div>
          <button>cancelar</button>
        </div>
      </div>
    </div>
  );
}
