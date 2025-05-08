export const TransactionType = {
  IN: "IN",
  OUT: "OUT",
} as const;

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType];
