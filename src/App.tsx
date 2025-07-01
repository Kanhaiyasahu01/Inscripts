import Header from "./components/Header"
import { Toolbar } from "./components/Toolbar"
import { handleToolbarAction } from "./actions";
export const App = () => {


  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />
  <Toolbar
        onHideFields={() => handleToolbarAction('Hide fields')}
        onSort={() => handleToolbarAction('Sort')}
        onFilter={() => handleToolbarAction('Filter')}
        onCellView={() => handleToolbarAction('Cell view')}
        onImport={() => handleToolbarAction('Import')}
        onExport={() => handleToolbarAction('Export')}
        onShare={() => handleToolbarAction('Share')}
        onNewAction={() => handleToolbarAction('New Action')}
      />  
  </div>
  )
}
