import { series } from "./data.js";
import { Serie } from "./serie.js";

const seriesBody = document.getElementById("series-body")!;
const averageElement = document.getElementById("average")!;
const serieTitle = document.getElementById("serie-title")!;
const serieDescription = document.getElementById("serie-description")!;
const serieLink = document.getElementById("serie-link") as HTMLAnchorElement;

function renderSeries(series: Serie[]): void {
  series.forEach((s) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${s.id}</td>
      <td><a href="#" class="text-decoration-none">${s.name}</a></td>
      <td>${s.channel}</td>
      <td>${s.seasons}</td>
    `;
    row.addEventListener("click", (ev) => {
      ev.preventDefault();
      showSerieDetail(s);
    });
    seriesBody.appendChild(row);
  });
}

function showSerieDetail(serie: Serie): void {
  serieTitle.textContent = serie.name;
  serieDescription.textContent = serie.description;
  if (serie.link && serie.link.trim() !== "") {
    serieLink.href = serie.link;
    serieLink.style.display = "inline-block";
  } else {
    serieLink.style.display = "none";
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function calculateAverage(series: Serie[]): number {
  return series.reduce((sum, s) => sum + s.seasons, 0) / series.length;
}

renderSeries(series);
const average = calculateAverage(series);
averageElement.textContent = `Promedio de temporadas: ${average.toFixed(1)}`;



