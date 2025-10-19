import { Serie } from "./serie.js";
const series = [
    new Serie(1, "Breaking Bad", "AMC", 5),
    new Serie(2, "Game of Thrones", "HBO", 8),
    new Serie(3, "Stranger Things", "Netflix", 4),
    new Serie(4, "The Crown", "Netflix", 6),
    new Serie(5, "The Office", "NBC", 9),
    new Serie(6, "A Very English Scandal", "BBC", 2)
];
const seriesBody = document.getElementById("series-body");
const averageElement = document.getElementById("average");
series.forEach((s) => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${s.id}</td>
    <td>${s.name}</td>
    <td>${s.channel}</td>
    <td>${s.seasons}</td>
  `;
    seriesBody.appendChild(row);
});
const average = series.reduce((sum, s) => sum + s.seasons, 0) / series.length;
averageElement.textContent = `Seasons average: ${average.toFixed(1)}`;
