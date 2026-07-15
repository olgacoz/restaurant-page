export default function renderHome(container) {
  const restaurantName = document.createElement('h1');
  const motto = document.createElement('blockquote');
  const mottoText = document.createElement('p');
  const mottoOwner = document.createElement('footer');
  const openingHours = document.createElement('h2');
  const days = document.createElement('ul');

  restaurantName.textContent = "Gusteau's Pizzaria";

  motto.id = 'our-motto';
  mottoText.textContent = 'Anyone can cook, but only the fearless can be great.';
  mottoOwner.textContent = '— Chef Auguste Gusteau';
  motto.append(mottoText, mottoOwner);

  openingHours.textContent = 'Opening Hours';

  for (let i = 0; i < 7; i++) {
    const li = document.createElement('li');
    days.appendChild(li);
  }
  const dayElements = days.children;

  dayElements[0].textContent = 'Monday: Closed';
  dayElements[1].textContent = 'Tuesday: 16:00-00:00';
  dayElements[2].textContent = 'Wednesday: 16:00-00:00';
  dayElements[3].textContent = 'Thursday: 11:30-00:00';
  dayElements[4].textContent = 'Friday: 11:30-00:00';
  dayElements[5].textContent = 'Saturday: 11:00-00:00';
  dayElements[6].textContent = 'Sunday: 11:00-22:00';

  container.append(restaurantName, motto, openingHours, days);

  return container;
}