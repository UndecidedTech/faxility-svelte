export interface WorkOrder {
  id: number;
  title: string;
  description: string;
  status: 'pending' | 'in_progress' | 'completed';
  created_at: string;
}

export interface PaginationData {
  page: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  currentPage: number;
}

export interface WorkOrdersResponse {
  list: WorkOrder[];
  pagination: PaginationData;
}