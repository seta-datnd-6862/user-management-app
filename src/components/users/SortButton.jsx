import { ChevronDown, ChevronUp } from 'lucide-react';

const SortButton = ({ sortOrder, onSort }) => {
  return (
    <button
      onClick={onSort}
      className="flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg hover:bg-indigo-200 transition"
    >
      Sắp xếp {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}
      {sortOrder === 'asc' ? (
        <ChevronDown className="w-4 h-4" />
      ) : (
        <ChevronUp className="w-4 h-4" />
      )}
    </button>
  );
};

export default SortButton;
