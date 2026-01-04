import standingsData from "./data/standings.json";
import "./static/style.css";


const app = document.querySelector<HTMLDivElement>("#app")!;
const teams = Object.keys(standingsData);

app.innerHTML = `
  <table>
    <tr id="top-row">
      <th class="tm-cell">Tm</th>
      ${teams.map(team => `<th>${team}</th>`).join("")}
    </tr>

    ${teams.map(rowTeam => `
      <tr>
        <th class="row-team">${rowTeam}</th>
        ${teams.map(colTeam => `<td>${getMatrixValue(rowTeam, colTeam)}</td>`).join("")}
      </tr>
    `).join("")}

    <tr id="bottom-row">
      <th class="tm-cell">Tm</th>
      ${teams.map(team => `<th>${team}</th>`).join("")}
    </tr>
  </table>
`;

function getMatrixValue(rowTeam: string, colTeam: string) {
  if (rowTeam === colTeam) 
  {
    return "--";
  } 
  else 
  {
    const rowData = standingsData[rowTeam as keyof typeof standingsData];
    const cellData = rowData[colTeam as keyof typeof rowData];
    return cellData["W"];
  }
}