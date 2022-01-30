export interface ResultType {
  char: string;
  index: number;
  context: string;
  cost: number;
  operation: string;
}

export interface CostItem {
  cost: number;
  operation: string;
}

export interface ReducedErrorItem {
  errorString: string;
  startIndex: number;
  endIndex: number;
}
