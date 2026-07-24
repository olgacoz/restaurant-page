import addressIcon from '../assets/icons/address.svg';
import mailIcon from '../assets/icons/mail.svg';
import phoneIcon from '../assets/icons/phone.svg';

export default function renderContact() {
  const body = document.querySelector('body');
  const content = document.querySelector('#content');

  const div = document.createElement('div');
  const contactUs = document.createElement('h1');

  content.replaceChildren(); // Clear the content container

  body.className = ''; // Clear all classes on the body
  body.classList.add('contact-active');

  div.id = 'contact-content';

  contactUs.textContent = 'Contact Us';

  div.appendChild(contactUs);

  contactData.forEach(obj => {
    const container = document.createElement('div');
    const headContainer = document.createElement('div');
    const icon = document.createElement('img');
    const head = document.createElement('h2');
    const content = document.createElement('p');

    container.classList.add('container');
    headContainer.classList.add('head-container');

    icon.src = obj.icon;
    icon.alt = `${obj.head} Icon`;
    icon.classList.add('contact-icon');

    head.textContent = obj.head;
    content.textContent = obj.content;

    headContainer.append(icon, head);
    container.append(headContainer, content);

    div.appendChild(container);
  });

  content.appendChild(div);
}

const contactData = [
  {
    head: 'Address',
    content: 'Via Galvani 91',
    icon: addressIcon,
  },
  {
    head: 'Phone',
    content: '0323 5156868',
    icon: phoneIcon,
  },
  {
    head: 'Email',
    content: 'contact@gusteau.com',
    icon: mailIcon,
  },
];