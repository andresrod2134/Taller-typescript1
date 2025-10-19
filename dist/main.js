import { series } from "./data.js";
const seriesBody = document.getElementById("series-body");
const averageElement = document.getElementById("average");
const serieDetail = document.getElementById("serie-detail");
const serieTitle = document.getElementById("serie-title");
const serieDescription = document.getElementById("serie-description");
const serieLink = document.getElementById("serie-link");
function renderSeries(series) {
    series.forEach((s) => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${s.id}</td>
      <td><a href="#" class="text-decoration-none">${s.name}</a></td>
      <td>${s.channel}</td>
      <td>${s.seasons}</td>
    `;
        row.addEventListener("click", () => showSerieDetail(s));
        seriesBody.appendChild(row);
    });
}
function showSerieDetail(serie) {
    serieDetail.style.display = "block";
    serieTitle.textContent = serie.name;
    serieDescription.textContent = serie.description;
    serieLink.href = serie.link;
}
function calculateAverage(series) {
    return series.reduce((sum, s) => sum + s.seasons, 0) / series.length;
}
renderSeries(series);
const average = calculateAverage(series);
averageElement.textContent = `Promedio de temporadas: ${average.toFixed(1)}`;
