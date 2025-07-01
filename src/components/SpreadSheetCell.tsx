import type { Column } from "../types";
import { useState,useRef , useEffect} from "react";
import { StatusBadge } from "./StatusBadge";
import { PriorityBadge } from "./PriorityBadge";

export const SpreadsheetCell: React.FC<{
  value: any;
  column: Column;
  isSelected: boolean;
  isEditing: boolean;
  onCellClick: () => void;
  onCellDoubleClick: () => void;
  onCellChange: (value: string) => void;
  onCellBlur: () => void;
}> = ({ value, column, isSelected, isEditing, onCellClick, onCellDoubleClick, onCellChange, onCellBlur }) => {
  const [editValue, setEditValue] = useState(value?.toString() || '');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === 'Escape') {
      onCellBlur();
    }
  };

  const renderCellContent = () => {
    if (column.accessor === 'status') {
      return <StatusBadge status={value} />;
    }
    if (column.accessor === 'priority') {
      return <PriorityBadge priority={value} />;
    }
    if (column.accessor === 'url') {
      return <span className="text-blue-600 underline truncate">{value}</span>;
    }
    return <span className="truncate">{value}</span>;
  };

  return (
    <div
      className={`relative flex items-center px-3 py-2 border-r border-b border-gray-200 cursor-cell ${
        isSelected ? 'ring-2 ring-blue-500 bg-blue-50' : 'hover:bg-gray-50'
      }`}
      style={{ width: column.width, minWidth: column.width }}
      onClick={onCellClick}
      onDoubleClick={onCellDoubleClick}
    >
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={editValue}
          onChange={(e) => {
            setEditValue(e.target.value);
            onCellChange(e.target.value);
          }}
          onBlur={onCellBlur}
          onKeyDown={handleKeyDown}
          className="w-full bg-transparent border-none outline-none text-sm"
        />
      ) : (
        renderCellContent()
      )}
    </div>
  );
};