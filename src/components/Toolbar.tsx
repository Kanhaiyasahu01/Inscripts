import { EyeOff, ArrowUpDown, ListFilter, ChevronsRight  } from 'lucide-react';
import Shape from "../assets/Shape.svg"
import Import from "../assets/Arrow.svg"
import Export from "../assets/Arrow Upload.svg"
import Split from "../assets/Arrow Split.svg"
import Share from "../assets/Share.svg"

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
      <div className="flex items-center space-x-1">
        <span className="text-sm font-medium">Tool bar</span>
        <ChevronsRight className="w-5 h-5 mt-1" />
<div className="h-5 border-l border-gray-300 mx-2"></div>
        <div className="flex items-center space-x-2 ml-4">
          <button
            onClick={onHideFields}
            className="flex items-center space-x-1 px-3 py-1.5 text-sm border-gray-300 rounded hover:bg-gray-100"
          >
            <EyeOff className="w-4 h-4" />
            <span>Hide fields</span>
          </button>
          <button
            onClick={onSort}
            className="flex items-center space-x-1 px-3 py-1.5 text-sm border-gray-300 rounded hover:bg-gray-100"
          >
            <ArrowUpDown className="w-4 h-4" />
            <span>Sort</span>
          </button>
          <button
            onClick={onFilter}
            className="flex items-center space-x-1 px-3 py-1.5 text-sm border-gray-300 rounded hover:bg-gray-100"
          >
            <ListFilter  className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button
            onClick={onCellView}
            className="flex items-center space-x-1 px-3 py-1.5 text-sm border-gray-300 rounded hover:bg-gray-100"
          >
            <img src={Shape} alt="Cell view" />
              <span>Cell view</span>
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={onImport}
          className="flex items-center space-x-1 px-3 py-1.5 text-sm border border-gray-300 rounded hover:bg-gray-100"
        >
          <img src={Import} alt="" />
          <span>Import</span>
        </button>
        <button
          onClick={onExport}
          className="flex items-center space-x-1 px-3 py-1.5 text-sm border border-gray-300 rounded hover:bg-gray-100"
        >
          <img src={Export} alt="" />
          <span>Export</span>
        </button>
        <button
          onClick={onShare}
          className="flex items-center space-x-1 px-3 py-1.5 text-sm border border-gray-300 rounded hover:bg-gray-100"
        >
          <img src={Share} alt="" />
          <span>Share</span>
        </button>
        <button
          onClick={onNewAction}
          className="flex items-center space-x-1 px-3 py-1.5 text-sm bg-[#4B6A4F] text-white rounded hover:bg-green-700"
        >
          <img src={Split} alt="" />
          <span>New Action</span>
        </button>
      </div>
    </div>
  );
};
