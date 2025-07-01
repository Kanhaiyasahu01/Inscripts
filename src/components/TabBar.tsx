import { Plus } from 'lucide-react';

export const TabBar: React.FC<{
  activeTab: string;
  onTabChange: (tab: string) => void;
}> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'overview', label: 'Q3 Financial Overview', color: 'bg-orange-100' },
    { id: 'abc', label: 'ABC', color: 'bg-purple-100' },
    { id: 'question', label: 'Answer a question', color: 'bg-purple-100' },
    { id: 'extract', label: 'Extract', color: 'bg-red-100' }
  ];

  return (
    <div className="flex items-center justify-between border-b border-gray-200 bg-white">
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium border-b-2 ${
              activeTab === tab.id
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <div className={`flex items-center space-x-2 px-2 py-1 rounded ${tab.color}`}>
              <span>{tab.label}</span>
            </div>
          </button>
        ))}
      </div>
      <button
        onClick={() => console.log('Add new tab')}
        className="p-2 text-gray-400 hover:text-gray-600"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
};
