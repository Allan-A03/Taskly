import { X } from "lucide-react";

interface windowprops {
  title: string;
  isOpen: boolean;
  onClosed: () => void;
  children: React.ReactNode;
}
export function AddTarefa({ isOpen, onClosed, children, title }: windowprops) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white min-w-1/4 min-h-1/2 max-w-max max-h-max rounded-lg shadow-2xl text-center">
        <div className="flex items-start justify-between">
          <h2 className="text-xl font-semibold m-3 py-2">{title}</h2>
          <button
            type="submit"
            onClick={onClosed}
            className="bg-gray-300 text-black m-4 px-2 py-2 rounded "
          >
            <X className="size-3.5" />
          </button>
        </div>

        <form>
          {children}
          <div className="flex items-center justify-end m-4 space-x-5">
            <button
              type="submit"
              className="bg-gray-300 p-1.5 rounded-md"
              onClick={onClosed}
            >
              Cancelar
            </button>
            <button
              type="button"
              className="bg-gray-950 p-1 text-white p-1.5 rounded-md"
            >
              Adicionar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
