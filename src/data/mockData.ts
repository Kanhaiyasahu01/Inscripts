// src/data/mockData.ts
import type { Task, Column } from '../types';

export const mockTasks: Task[] = [
  {
    id: 1,
    jobRequest: "Launch social media campaign for pro...",
    submitted: "15-11-2024",
    status: "In-progress",
    submitter: "Aisha Patel",
    url: "www.aishapatel...",
    assigned: "Sophie Choudhury",
    priority: "Medium",
    dueDate: "20-11-2024",
    estValue: "6,200,000"
  },
  {
    id: 2,
    jobRequest: "Update press kit for company redesign",
    submitted: "28-10-2024",
    status: "Need to start",
    submitter: "Irfan Khan",
    url: "www.irfankhan...",
    assigned: "Tejas Pandey",
    priority: "High",
    dueDate: "30-10-2024",
    estValue: "3,500,000"
  },
  // ...other tasks
];

export const initialColumns: Column[] = [
  { id: 'jobRequest', header: 'Job Request', accessor: 'jobRequest', width: 280, visible: true },
  { id: 'submitted', header: 'Submitted', accessor: 'submitted', width: 120, visible: true },
  { id: 'status', header: 'Status', accessor: 'status', width: 130, visible: true },
  { id: 'submitter', header: 'Submitter', accessor: 'submitter', width: 140, visible: true },
  { id: 'url', header: 'URL', accessor: 'url', width: 120, visible: true },
  { id: 'assigned', header: 'Assigned', accessor: 'assigned', width: 140, visible: true },
  { id: 'priority', header: 'Priority', accessor: 'priority', width: 100, visible: true },
  { id: 'dueDate', header: 'Due Date', accessor: 'dueDate', width: 120, visible: true },
  { id: 'estValue', header: 'Est. Value', accessor: 'estValue', width: 120, visible: true }
];
