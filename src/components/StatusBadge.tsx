import type { Task } from "../types";

export const StatusBadge: React.FC<{ status: Task['status'] }> = ({ status }) => {
  const getStatusColor = (status: Task['status']) => {
    switch (status) {
      case 'In-progress': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Need to start': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Complete': return 'bg-green-100 text-green-800 border-green-200';
      case 'Blocked': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <span className={`px-2 py-1 rounded text-xs font-medium border ${getStatusColor(status)}`}>
      {status}
    </span>
  );
};