// pizza imgs
import pizzaCapricciosa from '../assets/images/menu/pizza/pizza-capricciosa.jpg';
import pizzaMargherita from '../assets/images/menu/pizza/pizza-margherita.jpg';
import pizzaMarinara from '../assets/images/menu/pizza/pizza-marinara.jpg';
import pizzaQuattroFormaggi from '../assets/images/menu/pizza/pizza-quattro-formaggi.jpg';
import pizzaQuattroStagioni from '../assets/images/menu/pizza/pizza-quattro-stagioni.jpg';
import seafoodPizza from '../assets/images/menu/pizza/seafood-pizza.jpg';

// red wine imgs
import duckhornCabernet from '../assets/images/menu/wine/red/duckhorn-napa-valley-cabernet-sauvignon.webp';

// white wine imgs
import santaMargheritaPinotGrigio from '../assets/images/menu/wine/white/santa-margherita-alto-adige-pinot-grigio.png';

export default function renderMenu() {
  const body = document.querySelector('body');
  const content = document.querySelector('#content');

  const div = document.createElement('div');
  const menuHead = document.createElement('h1');

  content.replaceChildren(); // Clear the content container

  body.className = ''; // Clear all classes on the body
  body.classList.add('menu-active');

  div.id = 'menu-content';

  menuHead.textContent = 'Menu';

  div.appendChild(menuHead);

  menuData.forEach((obj) => {
    const categoryTitle = document.createElement('h2');
    categoryTitle.textContent = obj.category;

    div.appendChild(categoryTitle);

    const menu = document.createElement('div');
    menu.id = obj.id;
    menu.classList.add('menu');

    obj.items.forEach(item => {
      const menuItem = document.createElement('div');
      menuItem.classList.add('menu-item');

      const img = document.createElement('img');
      img.classList.add('item-img');
      img.src = item.imgSrc;
      img.alt = item.name;

      const itemInfo = document.createElement('div');
      itemInfo.classList.add('item-info');

      const infoTop = document.createElement('div');
      infoTop.classList.add('info-top');

      const itemName = document.createElement('h3');
      itemName.classList.add('item-name');
      itemName.textContent = item.name;

      const itemPrice = document.createElement('p');
      itemPrice.classList.add('item-price');
      itemPrice.textContent = item.price;

      infoTop.append(itemName, itemPrice);

      const itemDesc = document.createElement('p');
      itemDesc.classList.add('item-description');
      itemDesc.textContent = item.description;

      itemInfo.append(infoTop, itemDesc);

      menuItem.append(img, itemInfo);

      menu.appendChild(menuItem);
    });

    div.appendChild(menu);
  });

  content.appendChild(div);
}

const menuData = [
  {
    category: 'Pizza',
    id: 'pizza-menu',
    items: [
      {
        name: 'Pizza Capricciosa',
        price: '$20',
        description: 'A classic Italian favorite topped with savory ham, tender sliced mushrooms, marinated artichokes, and black olives over a rich tomato sauce base',
        imgSrc: pizzaCapricciosa,
      },
      {
        name: 'Pizza Margherita',
        price: '$13',
        description: 'A timeless favorite topped with sweet crushed tomatoes, fresh melted mozzarella, and fragrant basil leaves',
        imgSrc: pizzaMargherita,
      },
      {
        name: 'Pizza Marinara',
        price: '$8',
        description: 'A traditional Neapolitan classic featuring rich tomato sauce, extra virgin olive oil, fragrant oregano, and freshly minced garlic. No cheese',
        imgSrc: pizzaMarinara,
      },
      {
        name: 'Pizza Quattro Formaggi',
        price: '$15',
        description: 'A rich and creamy Italian favorite topped with a blend of four fine cheeses: creamy mozzarella, bold Gorgonzola, aged Parmesan, and savory Fontina',
        imgSrc: pizzaQuattroFormaggi,
      },
      {
        name: 'Pizza Quattro Stagioni',
        price: '$18',
        description: 'Representing the four seasons in every bite—divided into quarters of artichokes, mushrooms, savory ham, and black olives over a tomato and mozzarella base',
        imgSrc: pizzaQuattroStagioni,
      },
      {
        name: 'Seafood Pizza',
        price: '$24',
        description: 'A Mediterranean ocean feast featuring succulent shrimp, fresh clams in shell, tender octopus, and squid over a rich tomato sauce base with a hint of garlic and parsley',
        imgSrc: seafoodPizza,
      },
    ],
  },
  {
    category: 'Red Wine',
    id: 'red-wine-menu',
    items: [
      {
        name: 'Duckhorn Napa Valley Cabernet Sauvignon',
        price: '$22 / Glass | $85 / Bottle',
        description: 'A rich, full-bodied Napa Valley classic featuring velvety layers of ripe black cherry, dark plum, and subtle notes of cocoa and toasted oak. Perfectly balanced with soft tannins and a smooth finish',
        imgSrc: duckhornCabernet,
      },
    ],
  },
  {
    category: 'White Wine',
    id: 'white-wine-menu',
    items: [
      {
        name: 'Santa Margherita Alto Adige Pinot Grigio',
        price: '$15 / Glass | $58 / Bottle',
        description: "Crisp, dry, and vibrant with fresh aromas of Golden Delicious apples and citrus blossoms. Delivers a clean, slate-like mineral quality with a bright, refreshing finish",
        imgSrc: santaMargheritaPinotGrigio,
      }
    ],
  },
];