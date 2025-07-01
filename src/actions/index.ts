import toast from "react-hot-toast";

export const handleToolbarAction = (action: string) => {
  console.log(`${action} clicked`);
  toast(`${action} clicked`);

  if (action === 'Import') {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json,.csv'; 
    input.onchange = (e: any) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          const content = reader.result;
          console.log('Imported file content:', content);
          toast.success('Import completed!');
        };
        reader.readAsText(file);
      }
    };
    input.click();
  }

  if (action === 'Export') {
    const data = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
    ];
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'export.json';
    link.click();
    URL.revokeObjectURL(url);

    toast.success('Export started!');
  }
};
