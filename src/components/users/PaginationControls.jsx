import { ChevronLeft, ChevronRight } from 'lucide-react';

const PaginationControls = ({ 
  currentPage, 
  totalPages, 
  onPrevPage, 
  onNextPage 
}) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-between items-center pt-4 border-t border-gray-200 mt-4">
      <button
        onClick={onPrevPage}
        disabled={currentPage === 1}
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        <ChevronLeft className="w-4 h-4" />
        Trước
      </button>
      <span className="text-gray-600">
        Trang {currentPage} / {totalPages}
      </span>
      <button
        onClick={onNextPage}
        disabled={currentPage === totalPages}
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        Sau
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default PaginationControls;
