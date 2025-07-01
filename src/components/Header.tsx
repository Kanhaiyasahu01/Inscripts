import React from "react";
import { Search } from "lucide-react";

const Header: React.FC = () => (
  <div className="flex items-center justify-between p-3 bg-white border-b border-gray-200">
    <div className="flex items-center space-x-2">
      <div className="w-5 h-5 bg-gray-300 rounded"></div>
      <span className="text-sm text-gray-600">Workspace</span>
      <span className="text-gray-400">›</span>
      <span className="text-sm text-gray-600">Folder 2</span>
      <span className="text-gray-400">›</span>
      <span className="text-sm font-medium">Spreadsheet 3</span>
    </div>
    <div className="flex items-center space-x-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search within sheet"
          className="pl-9 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex items-center space-x-1">
        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
          <span className="text-white text-sm">4</span>
        </div>
        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
          <span className="text-gray-600 text-sm">KS</span>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
