import Header from "./components/Header";
import { Toolbar } from "./components/Toolbar";
import { handleToolbarAction } from "./actions";
import { TabBar } from "./components/TabBar";
import { useCallback, useEffect, useState } from "react";
import { SpreadsheetTable } from "./components/SpreadSheetTable";
import type { Column, Task } from "./types";
import { initialColumns, mockTasks } from "./data/mockData";

export const App = () => {

  const [activeTab, setActiveTab] = useState("overview");
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [columns, setColumns] = useState<Column[]>(initialColumns);
  const [selectedCell, setSelectedCell] = useState<{
    row: number;
    col: number;
  } | null>(null);
  const [editingCell, setEditingCell] = useState<{
    row: number;
    col: number;
  } | null>(null);

   const handleCellSelect = useCallback((row: number, col: number) => {
    setSelectedCell({ row, col });
    setEditingCell(null);
  }, []);

  const handleCellEdit = useCallback((row: number, col: number) => {
    if (row < tasks.length) {
      setEditingCell({ row, col });
      setSelectedCell({ row, col });
    }
  }, [tasks.length]);

  const handleCellChange = useCallback((row: number, col: number, value: string) => {
    if (row < tasks.length) {
      const visibleColumns = columns.filter(col => col.visible);
      const column = visibleColumns[col];
      if (column) {
        setTasks(prev => prev.map((task, index) => 
          index === row ? { ...task, [column.accessor]: value } : task
        ));
      }
    }
  }, [tasks.length, columns]);

  
  const handleCellEditEnd = useCallback(() => {
    setEditingCell(null);
  }, []);

  
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />
      <Toolbar
        onHideFields={() => handleToolbarAction("Hide fields")}
        onSort={() => handleToolbarAction("Sort")}
        onFilter={() => handleToolbarAction("Filter")}
        onCellView={() => handleToolbarAction("Cell view")}
        onImport={() => handleToolbarAction("Import")}
        onExport={() => handleToolbarAction("Export")}
        onShare={() => handleToolbarAction("Share")}
        onNewAction={() => handleToolbarAction("New Action")}
      />
      <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
      <SpreadsheetTable
        tasks={tasks}
        columns={columns}
        selectedCell={selectedCell}
        editingCell={editingCell}
        onCellSelect={handleCellSelect}
        onCellEdit={handleCellEdit}
        onCellChange={handleCellChange}
        onCellEditEnd={handleCellEditEnd}
      />
    </div>
  );
};
