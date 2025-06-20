import * as XLSX from "xlsx";

export const exportToCSV = (data) => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Payout Report");

  XLSX.writeFile(workbook, "payout-report.csv");
};
