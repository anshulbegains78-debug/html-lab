# Assignment 09: Tables with Headers and Footers

## Aim
To understand HTML tables and learn how to create table captions, headers, body sections, footer sections and scope attributes.

## Theory

### 1. HTML Tables
HTML tables are used to display information in rows and columns. They are useful for presenting structured data such as student marks and records.

### 2. Table Element
The <table> element defines an HTML table. It contains rows and cells that organize information.

### 3. Table Rows and Cells
- <tr>: Defines a table row.
- <th>: Defines a header cell.
- <td>: Defines a normal data cell.

### 4. Table Caption
The <caption> element provides a title or description for a table.

### 5. Table Sections
HTML provides three elements to organize table content:
- <thead>: Contains the table header.
- <tbody>: Contains the main table data.
- <tfoot>: Contains summary or footer information.

### 6. Scope Attribute
The scope attribute helps identify whether a table header applies to a row or a column.

Common values:
- scope="col": Identifies a column header.
- scope="row": Identifies a row header.

## Tasks
1. Create marks.html with a table caption Marks of Class A. Use thead for the header row containing Name, Maths and Science. Add three rows: Asha 78 85, Rohan 64 70 and Neha 91 88.
2. Create marks-average.html with the same caption and header. Add only Asha and Rohan rows. Use tfoot to display Class average with the average Maths and Science marks of these two students.
3. Create marks-accessible.html with the same caption, header and Asha and Rohan rows, but without a footer. Add scope="col" to each header cell and scope="row" to each name cell.

## Conclusion
This assignment explains how HTML tables organize data into rows and columns. It also demonstrates table captions, headers, body sections, footers and scope attributes for improved table structure and accessibility.