import jsPDF from "jspdf";
import "jspdf-autotable";

export const exportToPDF = (data) => {
  const doc = new jsPDF();
  doc.text("Author Payout Report", 14, 10);

  const tableData = data.map((item) => [
    item.author,
    item.count,
    item.total,
  ]);

  doc.autoTable({
    head: [["Author", "Articles", "Total Payout (₹)"]],
    body: tableData,
  });

  doc.save("payout-report.pdf");
};
