const locations = [
  "Seattle, Washington",
  "Austin, Texas",
  "Chicago, Illinois",
  "Boston, Massachusetts",
  "Portland, Oregon",
  "San Diego, California",
  "Denver, Colorado",
  "Nashville, Tennessee",
  "Miami, Florida",
  "Phoenix, Arizona"
];

const locationElement = document.getElementById("location");
const yearElement = document.getElementById("year");

if (locationElement) {
  const randomLocation = locations[Math.floor(Math.random() * locations.length)];
  locationElement.textContent = randomLocation;
}

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
