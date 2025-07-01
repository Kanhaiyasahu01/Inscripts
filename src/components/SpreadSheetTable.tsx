import type { Task,Column } from "../types";
import { ChevronDown } from 'lucide-react';
import { SpreadsheetCell } from "./SpreadSheetCell";
import { useEffect } from "react";

export const SpreadsheetTable: React.FC<{
  tasks: Task[];
  columns: Column[];
  selectedCell: { row: number; col: number } | null;
  editingCell: { row: number; col: number } | null;
  onCellSelect: (row: number, col: number) => void;
  onCellEdit: (row: number, col: number) => void;
  onCellChange: (row: number, col: number, value: string) => void;
  onCellEditEnd: () => void;
}> = ({ tasks, columns, selectedCell, editingCell, onCellSelect, onCellEdit, onCellChange, onCellEditEnd }) => {
  const visibleColumns = columns.filter(col => col.visible);

  return (
    <div className="flex-1 overflow-auto bg-white">
      <div className="min-w-max">
        {/* Header */}
        <div className="flex bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
          <div className="w-12 flex-shrink-0 flex items-center justify-center border-r border-gray-200 bg-gray-50">
            <span className="text-xs text-gray-500">#</span>
          </div>
          {visibleColumns.map((column) => (
            <div
              key={column.id}
              className="flex items-center px-3 py-3 border-r border-gray-200 bg-gray-50"
              style={{ width: column.width, minWidth: column.width }}
            >
              <span className="text-sm font-medium text-gray-700 truncate">{column.header}</span>
              <ChevronDown className="w-3 h-3 text-gray-400 ml-1" />
            </div>
          ))}
        </div>

        {/* Rows */}
        {tasks.map((task, rowIndex) => (
          <div key={task.id} className="flex hover:bg-gray-50">
            <div className="w-12 flex-shrink-0 flex items-center justify-center border-r border-gray-200 bg-gray-50">
              <span className="text-xs text-gray-500">{rowIndex + 1}</span>
            </div>
            {visibleColumns.map((column, colIndex) => (
              <SpreadsheetCell
                key={`${task.id}-${column.id}`}
                value={task[column.accessor]}
                column={column}
                isSelected={selectedCell?.row === rowIndex && selectedCell?.col === colIndex}
                isEditing={editingCell?.row === rowIndex && editingCell?.col === colIndex}
                onCellClick={() => onCellSelect(rowIndex, colIndex)}
                onCellDoubleClick={() => onCellEdit(rowIndex, colIndex)}
                onCellChange={(value) => onCellChange(rowIndex, colIndex, value)}
                onCellBlur={onCellEditEnd}
              />
            ))}
          </div>
        ))}

        {/* Empty rows for spreadsheet feel */}
        {Array.from({ length: 15 }, (_, i) => (
          <div key={`empty-${i}`} className="flex">
            <div className="w-12 flex-shrink-0 flex items-center justify-center border-r border-gray-200 bg-gray-50">
              <span className="text-xs text-gray-400">{tasks.length + i + 1}</span>
            </div>
            {visibleColumns.map((column, colIndex) => (
              <div
                key={`empty-${i}-${column.id}`}
                className="border-r border-b border-gray-200 cursor-cell hover:bg-gray-50"
                style={{ width: column.width, minWidth: column.width, height: 40 }}
                onClick={() => onCellSelect(tasks.length + i, colIndex)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};