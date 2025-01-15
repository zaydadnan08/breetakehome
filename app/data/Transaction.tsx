


export type TransactionStatus = 'Completed' | 'Pending' | 'Rejected';

export interface Transaction {
    date: string;
    amount: string;
    status: TransactionStatus
}

export const activityData: Transaction[] = [
    { date: '2025-01-14', amount: '$200', status: 'Completed' },
    { date: '2025-01-13', amount: '$150', status: 'Pending' },
    { date: '2025-01-12', amount: '$100', status: 'Completed' },
    { date: '2025-01-11', amount: '$50', status: 'Rejected' },
    { date: '2024-12-30', amount: '$30', status: 'Completed' },
    { date: '2024-12-27', amount: '$25', status: 'Pending' },
    { date: '2024-12-24', amount: '$15', status: 'Completed' },
    { date: '2024-12-20', amount: '$10', status: 'Completed' },
  ];