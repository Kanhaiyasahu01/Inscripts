import { ChevronDown, Search, Eye, EyeOff, ArrowUpDown, Filter, Grid3X3, Upload, Download, Share, Plus, MoreHorizontal } from 'lucide-react';
export const Toolbar: React.FC<{
  onHideFields: () => void;
  onSort: () => void;
  onFilter: () => void;
  onCellView: () => void;
  onImport: () => void;
  onExport: () => void;
  onShare: () => void;
  onNewAction: () => void;
}> = ({ onHideFields, onSort, onFilter, onCellView, onImport, onExport, onShare, onNewAction }) => {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 border-b border-gray-200">
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium">Tool bar</span>
        <ChevronDown className="w-4 h-4 text-gray-400" />
        <div className="flex items-center space-x-2 ml-4">
          <button
            onClick={onHideFields}
            className="flex items-center space-x-1 px-3 py-1.5 text-sm border border-gray-300 rounded hover:bg-gray-100"
          >
            <EyeOff className="w-4 h-4" />
            <span>Hide fields</span>
          </button>
          <button
            onClick={onSort}
            className="flex items-center space-x-1 px-3 py-1.5 text-sm border border-gray-300 rounded hover:bg-gray-100"
          >
            <ArrowUpDown className="w-4 h-4" />
            <span>Sort</span>
          </button>
          <button
            onClick={onFilter}
            className="flex items-center space-x-1 px-3 py-1.5 text-sm border border-gray-300 rounded hover:bg-gray-100"
          >
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button
            onClick={onCellView}
            className="flex items-center space-x-1 px-3 py-1.5 text-sm border border-gray-300 rounded hover:bg-gray-100"
          >
            <Grid3X3 className="w-4 h-4" />
            <span>Cell view</span>
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={onImport}
          className="flex items-center space-x-1 px-3 py-1.5 text-sm border border-gray-300 rounded hover:bg-gray-100"
        >
          <Upload className="w-4 h-4" />
          <span>Import</span>
        </button>
        <button
          onClick={onExport}
          className="flex items-center space-x-1 px-3 py-1.5 text-sm border border-gray-300 rounded hover:bg-gray-100"
        >
          <Download className="w-4 h-4" />
          <span>Export</span>
        </button>
        <button
          onClick={onShare}
          className="flex items-center space-x-1 px-3 py-1.5 text-sm border border-gray-300 rounded hover:bg-gray-100"
        >
          <Share className="w-4 h-4" />
          <span>Share</span>
        </button>
        <button
          onClick={onNewAction}
          className="flex items-center space-x-1 px-3 py-1.5 text-sm bg-green-600 text-white rounded hover:bg-green-700"
        >
          <Plus className="w-4 h-4" />
          <span>New Action</span>
        </button>
      </div>
    </div>
  );
};
