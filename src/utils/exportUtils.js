import jsPDF from "jspdf";
import autoTable from "jspdf-autotable"; // Correct way to import
import * as XLSX from "xlsx";

// ✅ Export to PDF
export const exportToPDF = (articles) => {
  const doc = new jsPDF();
  doc.text("Articles Report", 14, 16);

  const tableRows = articles.map((item) => [
    item.title,
    item.author,
    new Date(item.publishedAt).toLocaleDateString(),
    item.type,
  ]);

  // Correct usage: call autoTable as a function, pass doc as the first argument
  autoTable(doc, {
    head: [["Title", "Author", "Published Date", "Type"]],
    body: tableRows,
    startY: 20, // Gives margin below the title
  });

  doc.save("articles_report.pdf");
};

// ✅ Export to CSV (Excel)
export const exportToCSV = (articles) => {
  const worksheet = XLSX.utils.json_to_sheet(articles);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Articles");
  XLSX.writeFile(workbook, "articles_report.xlsx");
};
