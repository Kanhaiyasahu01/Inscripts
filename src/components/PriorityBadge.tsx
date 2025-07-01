import type { Task } from "../types";

export const PriorityBadge: React.FC<{ priority: Task['priority'] }> = ({ priority }) => {
  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'High': return 'text-red-600';
      case 'Medium': return 'text-orange-600';
      case 'Low': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <span className={`text-sm font-medium ${getPriorityColor(priority)}`}>
      {priority}
    </span>
  );
};
