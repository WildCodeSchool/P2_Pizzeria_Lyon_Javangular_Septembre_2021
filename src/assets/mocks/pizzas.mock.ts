import {Pizza} from 'src/shared/model/pizza.model';

export const pizzaMock: Pizza[] = [
  new Pizza(
    'La Margherita',
    'La plus simple des pizzas, composées par une reine (Marguerite).',
    'assets/img/margherita.png',
    8.4,
    ['tomates', 'Mozzarella', 'basilic']
  ),
  new Pizza(
    'La Regina',
    'Grande classique, donc reine des pizzas en toute simplicité.',
    'assets/img/reine.png',
    8.9,
    ['tomates', 'Mozzarella', 'Jambon', 'Champignons']
  ),
  new Pizza(
    'La 4 fromages',
    'Pour les amateurs/amatrices de fromages !',
    'assets/img/4Fromages.png',
    9.9,
    ['tomates', 'Mozzarella', 'fromage de chèvre', 'emmental', "Fourme d'Ambert"]
  ),
  new Pizza(
    'La Savoyarde',
    "La gourmandise savoyarde à l'honneur, avec ses pommes de terre et son reblochon savoureux",
    'assets/img/savoyarde.png',
    10.9,
    [
      'crème fraiche',
      'Mozzarella',
      'lardons fumés',
      'pommes de terre sautées',
      'Reblochon',
      'origan',
    ]
  ),
  new Pizza(
    'La norvégienne',
    "Du saumon dans une pizza, avec une filet de citron, ça ne peut qu'être bon !",
    'assets/img/norvegienne.png',
    8.9,
    ['crème fraiche', 'Mozzarella', 'saumon', 'citron', 'pesto']
  ),
  new Pizza(
    'La hawaïenne',
    'La plus controversé des pizzas, très certainement. Elle allie tout de même le meilleur des deux mondes.',
    'assets/img/hawaienne.png',
    8.9,
    ['tomates', 'Mozzarella', 'jambon', 'ananas']
  ),
];
