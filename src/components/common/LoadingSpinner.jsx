import { Loader2 } from 'lucide-react';

const LoadingSpinner = ({ message = "Đang tải dữ liệu..." }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="w-12 h-12 text-indigo-600 animate-spin mx-auto mb-4" />
        <p className="text-gray-700 text-lg">{message}</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
