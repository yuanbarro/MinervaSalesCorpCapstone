import CocaCola from '../assets/images/drinks-images/coca-cola-classic.png'
import MountainDew from '../assets/images/drinks-images/Mountain Dew Citrus.png'
import PepsiCola from '../assets/images/drinks-images/Pepsi Cola.png'
import Milo from '../assets/images/drinks-images/milos.png'
import SpriteCaffeine from '../assets/images/drinks-images/Sprite Caffeine-Free Lemon Lime Soda Pop.png'
import SToK from '../assets/images/drinks-images/elf.png'
import Lipton from '../assets/images/drinks-images/Lipton Green Tea.png'
import CanadaDry from '../assets/images/drinks-images/Canada Dry Ginger.png'
import DrPepperZero from '../assets/images/drinks-images/Dr Pepper Zero Sugar.png'
import DietDrPepper from '../assets/images/drinks-images/Diet Dr Pepper Soda.png'
import AquafinaPurified from '../assets/images/drinks-images/Aquafina Purified.png'
import PureLife from '../assets/images/drinks-images/Pure Life Purified.png'
import SamsCola from '../assets/images/drinks-images/Sams Cola Soda.png'
import Anw from '../assets/images/drinks-images/A&W Caffeine-Free.png'
import GreatValue from '../assets/images/drinks-images/Great Value.png'

//Pasta
import ChickenAlfredo from '../assets/images/pasta-images/Chicken Alfredo.png'
import AllaGricia from '../assets/images/pasta-images/Pasta Alla Gricia.png'
import SheetPan from '../assets/images/pasta-images/Sheet-Pan Burrata Caprese Gnocchi.png'
import AllaVodka from '../assets/images/pasta-images/Penne Alla Vodka.png'
import BakedSpaghetti from '../assets/images/pasta-images/Baked Spaghetti.png'
import PotatoGnocchi from '../assets/images/pasta-images/pasta-6.png'
import BakedZiti from '../assets/images/pasta-images/Ultimate Baked Ziti.png'
import CacioPepe from '../assets/images/pasta-images/Cacio e Pepe.png'
import PastaPuttanesca from '../assets/images/pasta-images/Pasta Puttanesca.png'
import ItalianPastaSalad from '../assets/images/pasta-images/Italian Pasta Salad.png'
import Lasagna from '../assets/images/pasta-images/Lasagna Roll Ups.png'
import ToastedRavioli from '../assets/images/pasta-images/Toasted Ravioli.png'
import OrecchietteBroccoli from '../assets/images/pasta-images/Orecchiette with Broccoli Rabe.png'
import LambRagu from '../assets/images/pasta-images/Lamb Ragù.png'
import LasagnaBolognese from '../assets/images/pasta-images/Lasagna Bolognese.png'

//Pizza
import CheesePizza from '../assets/images/cheese-pizza-375.png'
import ExtraCheesePizza from '../assets/images/cheese-pizza-376.png'
import VeggiePizza from '../assets/images/veggie-pizza.png'
import PepperoniPizza from '../assets/images/pepperoni-pizza.png'
import MeatPizza from '../assets/images/meat-pizza.png'
import MargheritaPizza from '../assets/images/margherita-pizza.png'
import BBQPizza from '../assets/images/BBQ-chicken-pizza.png'
import AllaPalla from '../assets/images/pizza-alla-pala.png'
import Prosciutto from '../assets/images/Prosciutto-e-Funghi-Pizza.png'
import DetroitStyle from '../assets/images/Detroit-Style-pizza.png'
import GarlicFingers from '../assets/images/Garlic-Fingers-pizza.png'
import StLous from '../assets/images/St-Louis-Style-Pizza.png'
import Rustica from '../assets/images/Pizza-Rustica.png'
import Genovese from '../assets/images/Genovese.png'
import Efichi from '../assets/images/Pizza-e-fichi.png'
import Parts from '../assets/images/parts.jpg'

//Sushi
import VeggiePoke from '../assets/images/sushi-images/sushi-26.png'
import MiniSalmon from '../assets/images/sushi-images/sushi-12.png'
import OmbosSeth from '../assets/images/sushi-images/sushi-23.png'
import VeggieSet from '../assets/images/sushi-images/sushi-27.png'
import FriendlySet from '../assets/images/sushi-images/sushi-8.png'
import SunnyPhiladelphia from '../assets/images/sushi-images/sushi-22.png'
import HiddenDragon from '../assets/images/sushi-images/sushi-9.png'
import HottestTaisho from '../assets/images/sushi-images/sushi-24.png'
import BurningTaisho from '../assets/images/sushi-images/sushi-3.png'
import BlissfulEel from '../assets/images/sushi-images/sushi-2.png'
import Sebastian from '../assets/images/sushi-images/sushi-20.png'
import DoubleSalmon from '../assets/images/sushi-images/sushi-6.png'
import ClockworkOrange from '../assets/images/sushi-images/sushi-4.png'
import KiwiRoll from '../assets/images/sushi-images/sushi-11.png'

export const allProductsData = [
  {
    id: 'dunlop-175/65R14-82H',
    ItemImg: CheesePizza,
    ItemName: 'Dunlop 175/65R14 82H',
    ItemIngredients: 'Pizza dough, pizza sauce, provolone cheese, mozzarella.',
    ItemPrice: (2).toFixed(2),
    Category: 'Tires',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },

  {
    id: 'Yokohama-195/60R15-88H',
    ItemImg: VeggiePizza,
    ItemName: 'Yokohama	195/60R15 88H',
    ItemIngredients:
      'Pizza sauce, Onion, Capsicum, Pineapple, Ginger, Hotshot sauce, Coriander, Garlic sauce, Butter sauce, Cheese.',
    ItemPrice: (9).toFixed(2),
    Category: 'Tires',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'Dunlop-195/65R15-91H',
    ItemImg: PepperoniPizza,
    ItemName: 'Dunlop 195/65R15 91H',
    ItemIngredients:
      'Pizza crust yeast, pepperoni, tomato paste, mozzarella cheese, sugar.',
    ItemPrice: (5).toFixed(2),
    Category: 'Tires',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'Kumho-185/65R15-88H',
    ItemImg: MeatPizza,
    ItemName: 'Kumho 185/65R15 88H',
    ItemIngredients:
      'Sausage, pizza dough, bacon, pizza sauce, red pepper flakes.',
    ItemPrice: (10).toFixed(2),
    Category: 'Tires',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'Dunlop-185/70R14-88H',
    ItemImg: MargheritaPizza,
    ItemName: 'Dunlop 185/70R14 88H',
    ItemIngredients:
      'Pizza dough, tomato sauce, fresh mozzarella, olive oil, basil leaves.',
    ItemPrice: (8).toFixed(2),
    Category: 'Tires',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'Yokohama-185/60R15-84H',
    ItemImg: BBQPizza,
    ItemName: 'Yokohama	185/60R15 84H',
    ItemIngredients:
      'Rotisserie chicken, pizza dough, bbq sauce, smoked cheddar cheese, mozzarella cheese.',
    ItemPrice: (10).toFixed(2),
    Category: 'Tires',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'Yokohama-185/65R15-88H',
    ItemImg: AllaPalla,
    ItemName: 'Yokohama 185/65R15 88H',
    ItemIngredients: 'Cheese, cherry tomatoes, arugula, olive oil, yeast.',
    ItemPrice: (12).toFixed(2),
    Category: 'Tires',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'Dunlop-185/65R15-88H',
    ItemImg: Prosciutto,
    ItemName: 'Dunlop	185/65R15 88H',
    ItemIngredients:
      'Italian sausage meat, truffle oil, pizza dough, san marzano tomatoes, bocconcini cheese.',
    ItemPrice: (8).toFixed(2),
    Category: 'Tires',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'Dunlop-185/65R15-88H',
    ItemImg: DetroitStyle,
    ItemName: 'Dunlop	185/65R15 88H',
    ItemIngredients:
      'Pizza dough, pizza sauce, brick cheese, rapid rise yeast, olive oil.',
    ItemPrice: (11).toFixed(2),
    Category: 'Tires',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'Michelin-205/65R16-95V',
    ItemImg: GarlicFingers,
    ItemName: 'Michelin 205/65R16 95V',
    ItemIngredients:
      'Bread flour, mozzarella cheese, butter, olive oil, instant yeast.',
    ItemPrice: (7).toFixed(2),
    Category: 'Tires',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'Toyo-Tires-195/R15-106S',
    ItemImg: StLous,
    ItemName: 'Toyo Tires	195/R15 106S',
    ItemIngredients:
      'Liquid smoke, swiss cheese, white cheddar cheese, light corn syrup, pizza sauce.',
    ItemPrice: (13).toFixed(2),
    Category: 'Tires',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'Kumho-102/100R-KC53',
    ItemImg: Rustica,
    ItemName: 'Kumho 102/100R KC53',
    ItemIngredients: 'Prosciutto, pepperoni, mozzarella, crust, eggs.',
    ItemPrice: (13).toFixed(2),
    Category: 'Tires',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'Michelin-195/80R15C-108/106S',
    ItemImg: Genovese,
    ItemName: 'Michelin	195/80R15C 108/106S',
    ItemIngredients:
      'Pine nuts, baby potatoes, snow pea shoots, lemon, buffalo mozzarella.',
    ItemPrice: (13).toFixed(2),
    Category: 'Tires',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'Kumho-185/65R15-88H',
    ItemImg: Efichi,
    ItemName: 'Kumho 185/65R15 88H',
    ItemIngredients: 'Coconut flour, truffle oil, fig jam, cheese, prosciutto.',
    ItemPrice: (12).toFixed(2),
    Category: 'Tires',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },

  {
    id: 'Yokohama-185/60R15-84H',
    ItemImg: Parts,
    ItemName: 'Yokohama 185/60R15 84H',
    ItemIngredients:
      'Refrigerated pizza crust, monterey jack cheese, parmesan cheese, butter, chicken bouillon.',
    ItemPrice: (8).toFixed(2),
    Category: 'Tires',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'Kumho-185/60R15-84H',
    ItemImg: ExtraCheesePizza,
    ItemName: 'Kumho	185/60R15 84H',
    ItemIngredients: 'Homemade pizza sauce, fresh mozzarella cheese, mozzarella cheese, parmesan cheese, olive oil',
    ItemPrice: (5).toFixed(2),
    Category: 'Tires',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },

  {
    id: 'Toyo-Tires-265/60R18-114V',
    ItemImg: VeggiePizza,
    ItemName: 'Toyo Tires 265/60R18 114V',
    ItemIngredients:
      'Pizza sauce, Onion, Capsicum, Pineapple, Ginger, Hotshot sauce, Coriander, Garlic sauce, Butter sauce, Cheese.',
    ItemPrice: (9).toFixed(2),
    Category: 'Tires',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'BF-Goodrich-LT265/60R18-119/16S',
    ItemImg: PepperoniPizza,
    ItemName: 'BF Goodrich	LT265/60R18 119/16S',
    ItemIngredients:
      'Pizza crust yeast, pepperoni, tomato paste, mozzarella cheese, sugar.',
    ItemPrice: (5).toFixed(2),
    Category: 'Tires',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'Michelin-265/65-R17',
    ItemImg: MeatPizza,
    ItemName: 'Michelin	265/65 R17',
    ItemIngredients:
      'Sausage, pizza dough, bacon, pizza sauce, red pepper flakes.',
    ItemPrice: (10).toFixed(2),
    Category: 'Tires',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'Nitto-Terra-Grappler-G2-265/60R18-114T-XL',
    ItemImg: MargheritaPizza,
    ItemName: 'Nitto Terra Grappler G2 265/60R18 114T XL',
    ItemIngredients:
      'Pizza dough, tomato sauce, fresh mozzarella, olive oil, basil leaves.',
    ItemPrice: (8).toFixed(2),
    Category: 'Tires',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'Dunlop-Grandtek-AT5-265/60R18-110H',
    ItemImg: BBQPizza,
    ItemName: 'Dunlop-Grandtek-AT5-265/60R18-110H',
    ItemIngredients:
      'Rotisserie chicken, pizza dough, bbq sauce, smoked cheddar cheese, mozzarella cheese.',
    ItemPrice: (10).toFixed(2),
    Category: 'Tires',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'Dunlop-Grandtek-AT20-265/65R17-112S',
    ItemImg: AllaPalla,
    ItemName: 'Dunlop Grandtek AT20	265/65R17 112S',
    ItemIngredients: 'Cheese, cherry tomatoes, arugula, olive oil, yeast.',
    ItemPrice: (12).toFixed(2),
    Category: 'Tires',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'Toyo-Tires-LT265/65-R17-116Q',
    ItemImg: Prosciutto,
    ItemName: 'Toyo Tires LT265/65 R17 116Q',
    ItemIngredients:
      'Italian sausage meat, truffle oil, pizza dough, san marzano tomatoes, bocconcini cheese.',
    ItemPrice: (8).toFixed(2),
    Category: 'Tires',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'Dunlop-Grandtek-TG32-215/70R16-99S',
    ItemImg: DetroitStyle,
    ItemName: 'Dunlop Grandtek TG32	215/70R16 99S',
    ItemIngredients:
      'Pizza dough, pizza sauce, brick cheese, rapid rise yeast, olive oil.',
    ItemPrice: (11).toFixed(2),
    Category: 'Tires',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'Kumho-PorTran-215/70-R16C-108/106T',
    ItemImg: GarlicFingers,
    ItemName: 'Kumho PorTran	215/70 R16C 108/106T',
    ItemIngredients:
      'Bread flour, mozzarella cheese, butter, olive oil, instant yeast.',
    ItemPrice: (7).toFixed(2),
    Category: 'Tires',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'Dunlop-Grandtek-AT20-265/60R18-110H',
    ItemImg: StLous,
    ItemName: 'Dunlop Grandtek AT20	265/60R18 110H',
    ItemIngredients:
      'Liquid smoke, swiss cheese, white cheddar cheese, light corn syrup, pizza sauce.',
    ItemPrice: (13).toFixed(2),
    Category: 'Tires',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'Dunlop-Grandtek-ST20-215/65-R16-98H',
    ItemImg: Rustica,
    ItemName: 'Dunlop Grandtek ST20	215/65 R16 98H',
    ItemIngredients: 'Prosciutto, pepperoni, mozzarella, crust, eggs.',
    ItemPrice: (13).toFixed(2),
    Category: 'Tires',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'Dunlop-SP-Sport-205/65R16-95H',
    ItemImg: Genovese,
    ItemName: 'Dunlop SP Sport 205/65R16 95H',
    ItemIngredients:
      'Pine nuts, baby potatoes, snow pea shoots, lemon, buffalo mozzarella.',
    ItemPrice: (13).toFixed(2),
    Category: 'Tires',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'Kumho-Tire-205/55-R16-XL-94V',
    ItemImg: Efichi,
    ItemName: 'Kumho Tire	205/55 R16 XL 94V',
    ItemIngredients: 'Coconut flour, truffle oil, fig jam, cheese, prosciutto.',
    ItemPrice: (12).toFixed(2),
    Category: 'Tires',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
{
    id: 'Thunderer-Mach-IV-R203-165/65R13-77T',
    ItemImg: Parts,
    ItemName: 'Thunderer Mach IV R203	165/65R13 77T',
    ItemIngredients:
      'Refrigerated pizza crust, monterey jack cheese, parmesan cheese, butter, chicken bouillon.',
    ItemPrice: (8).toFixed(2),
    Category: 'Tires',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'Kumho-Tires-ECSTA-PS31-205/45-ZR16-XL-87W',
    ItemImg: ChickenAlfredo,
    ItemName: 'Kumho Tires ECSTA PS31	205/45 ZR16 XL 87W',
    ItemIngredients:
      'Skinless chicken breast, heavy cream, olive oil, parmigiano reggiano, black pepper.',
    ItemPrice: (2).toFixed(2),
    Category: 'Tires',
    attributes: [],
  },
  {
    id: 'DVB-Works-1826-6H/114.3-20X9-SATIN-BLK-34000',
    ItemImg: AllaGricia,
    ItemName: 'DVB Works 1826 6H/114.3 20X9 SATIN BLK',
    ItemIngredients:
      'Rigatoni pasta, pancetta, olive oil, pecorino romano, black pepper.',
    ItemPrice: (9).toFixed(2),
    Category: 'Mags',
    attributes: [],
  },
  {
    id: 'Wilcroxx-206102-20x9.5-6x139.7-BRONZE-34000',
    ItemImg: SheetPan,
    ItemName: 'Wilcroxx 206102 20x9.5 6x139.7 BRONZE 34000',
    ItemIngredients:
      'Penne pasta, sour cream, rotisserie chicken, cherry tomatoes, curly kale.',
    ItemPrice: (5).toFixed(2),
    Category: 'Mags',
    attributes: [],
  },
  {
    id: 'Wilcroxx-20559-20x9.5-6x139-MATTE-GUN-METAL-34000',
    ItemImg: AllaVodka,
    ItemName: 'Wilcroxx 20559 20x9.5 6x139 MATTE GUN METAL 34000',
    ItemIngredients:
      'Tomato sauce, penne, heavy cream, red pepper flakes, butter.',
    ItemPrice: (10).toFixed(2),
    Category: 'Mags',
    attributes: [],
  },
  {
    id: 'Wilcroxx-208112-20x9.5-6x139.7-MATTE-BLACK-+-BRONZE-COATING-34000',
    ItemImg: BakedSpaghetti,
    ItemName: 'Wilcroxx 208112 20x9.5 6x139.7 MATTE BLACK + BRONZE COATING 34000',
    ItemIngredients:
      'Ground beef, spaghetti, olive oil, crushed tomatoes, basil.',
    ItemPrice: (8).toFixed(2),
    Category: 'Mags',
    attributes: [],
  },
  {
    id: 'Wilcroxx-161018-16x7-6x139-BRONZE-21000',
    ItemImg: PotatoGnocchi,
    ItemName: 'Wilcroxx 161018 16x7 6x139 BRONZE 21000',
    ItemIngredients:
      'Green beans, potato gnocchi, green peas, pecorino romano cheese, black pepper.',
    ItemPrice: (10).toFixed(2),
    Category: 'Mags',
    attributes: [],
  },
  {
    id: 'Nishoshi-168085-16x7-10x100.1143-MBMF-19000',
    ItemImg: BakedZiti,
    ItemName: 'Nishoshi 168085 16x7 10x100.1143 MBMF 19000',
    ItemIngredients:
      'Bulk italian sausage, ricotta cheese, tomato sauce, red pepper flakes, mozzarella cheese.',
    ItemPrice: (12).toFixed(2),
    Category: 'Mags',
    attributes: [],
  },
  {
    id: 'cacio-e-pepe',
    ItemImg: CacioPepe,
    ItemName: 'Cacio e Pepe',
    ItemIngredients: 'Spaghetti, parmesan, butter, black pepper.',
    ItemPrice: (8).toFixed(2),
    Category: 'Mags',
    attributes: [],
  },
  {
    id: 'RayoneRacing-1006-16x7-5x100-114-ET-35-(22723)-WHITE-MACHINE-LINE-19000',
    ItemImg: PastaPuttanesca,
    ItemName: 'RayoneRacing 1006 16x7 5x100-114 ET 35 (22723) WHITE MACHINE LINE 19000',
    ItemIngredients:
      'Spaghetti, kalamata olives, red pepper flakes, capers, diced tomatoes.',
    ItemPrice: (11).toFixed(2),
    Category: 'Mags',
    attributes: [],
  },
  {
    id: 'RayoneRacing-OM126-5168H-16x7.0-8x100/114.3-BRONZE-20000',
    ItemImg: ItalianPastaSalad,
    ItemName: 'RayoneRacing OM126 5168H 16x7.0 8x100/114.3 BRONZE	20000',
    ItemIngredients:
      'Bell peppers, fresh mozzarella pearls, honey, dijon mustard, rotini.',
    ItemPrice: (7).toFixed(2),
    Category: 'Mags',
    attributes: [],
  },
  {
    id: 'OZRacing-606516-HB-5H4-16x7.0-5x100/114.3-(HB)-19000',
    ItemImg: Lasagna,
    ItemName: 'OZRacing 606516 HB 5H4 16x7.0 5x100/114.3 (HB) 19000',
    ItemIngredients:
      'Ricotta cheese, lasagna noodles, homemade marinara sauce, frozen spinach, parmesan cheese.',
    ItemPrice: (13).toFixed(2),
    Category: 'Mags',
    attributes: [],
  },
  {
    id: 'RayoneRacing-DXDN-17X7.5-4x100-H-BLK-22000',
    ItemImg: ToastedRavioli,
    ItemName: 'RayoneRacing DXDN 17X7.5 4x100 H-BLK	22000',
    ItemIngredients:
      'Frozen cheese ravioli, jar spaghetti sauce, bread crumbs, parmesan cheese, egg.',
    ItemPrice: (13).toFixed(2),
    Category: 'Mags',
    attributes: [],
  },
  {
    id: 'Wilcroxx-178/23-17x8.5-6x137-MB-26000',
    ItemImg: OrecchietteBroccoli,
    ItemName: 'Wilcroxx 178/23 17x8.5 6x137 MB 26000',
    ItemIngredients:
      'Broccoli rabe, andouille sausage links, orecchiette, lemon, red pepper flakes.',
    ItemPrice: (13).toFixed(2),
    Category: 'Mags',
    attributes: [],
  },
  {
    id: 'Shell-Helix-Power-Carbon-Neutral-0w-40-1L',
    ItemImg: LambRagu,
    ItemName: 'Shell Helix Power Carbon Neutral 0w-40 (4 Liters)',
    ItemIngredients:
      'Engine oil volume: 1 Liter. Viscosity grade: 0W-40. Compatible with gasoline and diesel car engine oil.',
    ItemPrice: (12).toFixed(2),
    Category: 'Oils',
    attributes: [],
  },
  {
    id: 'RayoneRacing-647-17-SML-4H-17x7.5-8x100/114.3-SILVER-MACHINE-LIP-22000',
    ItemImg: LasagnaBolognese,
    ItemName: 'RayoneRacing 647 17 SML 4H 17x7.5 8x100/114.3 SILVER MACHINE LIP	22000',
    ItemIngredients:
      'Ground italian sausage, ground beef, ground pork, bolognese sauce, lasagna noodles.',
    ItemPrice: (11).toFixed(2),
    Category: 'Mags',
    attributes: [],
  },
  {
    id: 'SUV-17-7.5x1-78H-FLAT-BLACK-29000',
    ItemImg: ChickenAlfredo,
    ItemName: 'SUV 17 7.5x17 8H FLAT BLACK 29000',
    ItemIngredients:
      'Skinless chicken breast, heavy cream, olive oil, parmigiano reggiano, black pepper.',
    ItemPrice: (2).toFixed(2),
    Category: 'Mags',
    attributes: [],
  },
  {
    id: 'Wilcroxx-16159-15x7-5x100-Black-Silver-19000',
    ItemImg: SheetPan,
    ItemName: 'Wilcroxx 16159 15x7 5x100 Black Silver 19000',
    ItemIngredients:
      'Penne pasta, sour cream, rotisserie chicken, cherry tomatoes, curly kale.',
    ItemPrice: (5).toFixed(2),
    Category: 'Mags',
    attributes: [],
  },
  {
    id: 'Nisoshi-159005-15x7-104/100-114.3-17000',
    ItemImg: BakedSpaghetti,
    ItemName: 'Nisoshi 159005 15x7 104/100-114.3 17000',
    ItemIngredients:
      'Ground beef, spaghetti, olive oil, crushed tomatoes, basil.',
    ItemPrice: (8).toFixed(2),
    Category: 'Mags',
    attributes: [],
  },
  {
    id: 'CXA-LP125-15x8-64/139.7-MGM-21000',
    ItemImg: PotatoGnocchi,
    ItemName: 'CXA LP125 15x8 64/139.7 MGM 21000',
    ItemIngredients:
      'Green beans, potato gnocchi, green peas, pecorino romano cheese, black pepper.',
    ItemPrice: (10).toFixed(2),
    Category: 'Mags',
    attributes: [],
  },
  {
    id: 'Rayone-Racing-690F-S/F-4H-BML-4x100-BLACK-MACHINE-LIFT-MILLING-WINDOW-17000',
    ItemImg: BakedZiti,
    ItemName: 'Rayone Racing 690F S/F 4H BML 4x100 BLACK MACHINE LIFT MILLING WINDOW 17000',
    ItemIngredients:
      'Bulk italian sausage, ricotta cheese, tomato sauce, red pepper flakes, mozzarella cheese.',
    ItemPrice: (12).toFixed(2),
    Category: 'Mags',
    attributes: [],
  },
  {
    id: 'Wilcroxx-156159-15x7-5x114-BLACK-PACE-19000',
    ItemImg: CacioPepe,
    ItemName: 'Wilcroxx 156159 15x7 5x114 BLACK PACE 19000',
    ItemIngredients: 'Spaghetti, parmesan, butter, black pepper.',
    ItemPrice: (8).toFixed(2),
    Category: 'Mags',
    attributes: [],
  },
  {
    id: 'VDLK-JA175-NX7-4x100-FBLACK-18000',
    ItemImg: PastaPuttanesca,
    ItemName: 'VDLK JA175 NX7 4x100 FBLACK 18000',
    ItemIngredients:
      'Spaghetti, kalamata olives, red pepper flakes, capers, diced tomatoes.',
    ItemPrice: (11).toFixed(2),
    Category: 'Mags',
    attributes: [],
  },
  {
    id: 'DX125-15x7-6x139.7-6M-18000',
    ItemImg: ItalianPastaSalad,
    ItemName: 'DX125 15x7 6x139.7 6M 18000',
    ItemIngredients:
      'Bell peppers, fresh mozzarella pearls, honey, dijon mustard, rotini.',
    ItemPrice: (7).toFixed(2),
    Category: 'Mags',
    attributes: [],
  },
  {
    id: 'Nisoshi-131121-13x5.5-84/100-114.3-BLACK-MACHINE-BRONZE-14000',
    ItemImg: Lasagna,
    ItemName: 'Nisoshi 131121 13x5.5 84/100-114.3 BLACK MACHINE BRONZE 14000',
    ItemIngredients:
      'Ricotta cheese, lasagna noodles, homemade marinara sauce, frozen spinach, parmesan cheese.',
    ItemPrice: (13).toFixed(2),
    Category: 'Mags',
    attributes: [],
  },
  {
    id: 'Viilkrace-TE37-14x5.5-4x100-Black-15000',
    ItemImg: ToastedRavioli,
    ItemName: 'Viilkrace TE37 14x5.5 4x100 Black 15000',
    ItemIngredients:
      'Frozen cheese ravioli, jar spaghetti sauce, bread crumbs, parmesan cheese, egg.',
    ItemPrice: (13).toFixed(2),
    Category: 'Mags',
    attributes: [],
  },
  {
    id: 'orecchiette-with-broccoli-rabe-second',
    ItemImg: OrecchietteBroccoli,
    ItemName: 'Orecchiette with Broccoli Rabe',
    ItemIngredients:
      'Broccoli rabe, andouille sausage links, orecchiette, lemon, red pepper flakes.',
    ItemPrice: (13).toFixed(2),
    Category: 'Mags',
    attributes: [],
  },
  {
    id: 'Razo-870-14x6-5x114.3-Matte-Black-19000',
    ItemImg: LambRagu,
    ItemName: 'Razo 870 14x6 5x114.3 Matte Black 19000',
    ItemIngredients:
      'Lamb shoulder, gnocchi, red wine, heavy cream, tomato paste.',
    ItemPrice: (12).toFixed(2),
    Category: 'Mags',
    attributes: [],
  },
  {
    id: 'Rayone-565-14x5.5-8x100-164-Bronze-15500',
    ItemImg: LasagnaBolognese,
    ItemName: 'Rayone 565 14x5.5 8x100-164 Bronze	15500',
    ItemIngredients:
      'Ground italian sausage, ground beef, ground pork, bolognese sauce, lasagna noodles.',
    ItemPrice: (11).toFixed(2),
    Category: 'Mags',
    attributes: [],
  },

  {
    id: 'Rays-328-14x6-8x100-114-ET29-BLACK-15000',
    ItemImg: VeggiePoke,
    ItemName: 'Rays 328 14x6 8x100-114 ET29 BLACK	15000',
    ItemIngredients:
      'Rice, Avocado, Cabage, Carrot, Ginger, Green Onion, Sesam.',
    ItemPrice: (8).toFixed(2),
    Category: 'Mags',
    attributes: [],
  },

  {
    id: 'Rays-657-14x6-4x100-ET25-GUNMETAL-15000',
    ItemImg: OmbosSeth,
    ItemName: 'Rays 657 14x6 4x100 ET25 GUNMETAL 15000',
    ItemIngredients:
      'Double Salmon Roll, Sunny Philadelphia, Salmon Maki Raki, Cucumber Maki Raki.',
    ItemPrice: (30).toFixed(2),
    Category: 'Mags',
    attributes: [],
  },
  {
    id: 'Racesport-DX002-15x7-4x100-White-16000',
    ItemImg: VeggieSet,
    ItemName: 'Racesport DX002 15x7 4x100 White	16000',
    ItemIngredients:
      'Very Veggie Roll, Very Veggie Maki, Cucumber Maki Raki, Avocado Maki Raki.',
    ItemPrice: (16).toFixed(2),
    Category: 'Mags',
    attributes: [],
  },
  {
    id: 'Fleetmax-FAS-8525-Air-Filter',
    ItemImg: FriendlySet,
    ItemName: 'Fleetmax FAS 8525 Air Filter',
    ItemIngredients:
      'Californication, Spicy Salmon Roll, Blissful Eel Roll, Sebastian the Crab Roll, Cucumber Maki Raki.',
    ItemPrice: (30).toFixed(2),
    Category: 'Filters',
    attributes: [],
  },
  {
    id: 'Vic-C-809-Oil-Filter',
    ItemImg: SunnyPhiladelphia,
    ItemName: 'Vic C 809 Oil Filter',
    ItemIngredients: 'Salmon, cream cheese, avocado, rice, sesame, nori.',
    ItemPrice: (12).toFixed(2),
    Category: 'Filters',
    attributes: [],
  },
  {
    id: 'Eurol-Fluence-DXS-5W-30-1L',
    ItemImg: HiddenDragon,
    ItemName: 'Eurol Fluence DXS 5W 30-1L',
    ItemIngredients:
      'Salmon, cream cheese, avocado, tobiko, rice, sesame, cucumber, nori.',
    ItemPrice: (13).toFixed(2),
    Category: 'Oils',
    attributes: [],
  },
  {
    id: 'Eurol-Coolant-GLX-1L',
    ItemImg: DoubleSalmon,
    ItemName: 'Eurol Coolant GLX 1L',
    ItemIngredients:
      'Salmon, Cream Cheese, Avocado, Sesame, Extra Salmon Slice, Cucumber, Rice, nori.',
    ItemPrice: (14).toFixed(2),
    Category: 'Oils',
    attributes: [],
  },
  {
    id: 'SK-ZIC-ATF-3-Fully-Synthetic-1L',
    ItemImg: HottestTaisho,
    ItemName: 'SK ZIC ATF 3 Fully Synthetic 1L',
    ItemIngredients:
      'Salmon, Cream Cheese, Avocado, Cucumber, Rice - all comes with your chosen sauce.',
    ItemPrice: (12).toFixed(2),
    Category: 'Oils',
    attributes: [],
  },
  {
    id: 'burning-taisho',
    ItemImg: BurningTaisho,
    ItemName: 'Burning Taisho',
    ItemIngredients: 'Salmon, Avocado, Rice, Cucumber, Cream Cheese.',
    ItemPrice: (10).toFixed(2),
    Category: 'Oils',
    attributes: [],
  },
  {
    id: 'SK-ZIC-X7-10W-30-Fully-Synthetic-1L',
    ItemImg: BlissfulEel,
    ItemName: 'SK ZIC X7 10W 30 Fully Synthetic 1L',
    ItemIngredients:
      'Eel kinda blissful, Cream Cheese, Avocado, Tobico, Sesame, Rice, Nori.',
    ItemPrice: (14).toFixed(2),
    Category: 'Oils',
    attributes: [],
  },
  {
    id: 'Shell-Helix-Carbon-Neutral-0W-30-1L',
    ItemImg: Sebastian,
    ItemName: 'Shell Helix Carbon Neutral 0W 30 1L',
    ItemIngredients:
      'Crab with Unique Sauce, Cream Cheese, Avocado, Dried Tuna Flakes, Sesame, Cucumber Rice, Nori.',
    ItemPrice: (13).toFixed(2),
    Category: 'Oils',
    attributes: [],
  },
  {
    id: 'Shell-Helix-HX7-10W-30-1L',
    ItemImg: DoubleSalmon,
    ItemName: 'Shell Helix HX7 10W 30 1L',
    ItemIngredients:
      'Salmon, Cream Cheese, Avocado, Sesame, Extra Salmon Slice, Cucumber, Rice, Nori.',
    ItemPrice: (10).toFixed(2),
    Category: 'Oils',
    attributes: [],
  },
  {
    id: 'Shell-Coolant-Longlife-Plus-1L',
    ItemImg: ClockworkOrange,
    ItemName: 'Shell Coolant Longlife Plus 1L',
    ItemIngredients: 'Salmon, orange, cream cheese, salmon extra slice, nori.',
    ItemPrice: (11).toFixed(2),
    Category: 'Oils',
    attributes: [],
  },
  {
    id: 'Shell-Spirax-Axle-Oil-S2-A-140-1L',
    ItemImg: KiwiRoll,
    ItemName: 'Shell Spirax Axle Oil S2 A 140 1L',
    ItemIngredients:
      'Salmon, Kiwi, Carrot, Cream Cheese, Tobico, Cucumber, Rice, Nori.',
    ItemPrice: (13).toFixed(2),
    Category: 'Oils',
    attributes: [],
  },
  {
    id: 'CFEx-Aisin-Continuously-Variable-Transmission-Fluid-1L',
    ItemImg: MiniSalmon,
    ItemName: 'CFEx Aisin Continuously Variable Transmission Fluid 1L',
    ItemIngredients:
      'Double Salmon Roll,Californication, Salmon Nigiri - 2Pcs, Eel Nigiri - 2Pcs,Vulcan Gunkan - 2Pcs',
    ItemPrice: (35).toFixed(2),
    Category: 'Oils',
    attributes: [],
  },
  {
    id: 'Shell-Spirax-S1-ATF-TASA-1L',
    ItemImg: OmbosSeth,
    ItemName: 'Shell Spirax S1 ATF TASA 1L',
    ItemIngredients:
      'Double Salmon Roll, Sunny Philadelphia, Salmon Maki Raki, Cucumber Maki Raki.',
    ItemPrice: (30).toFixed(2),
    Category: 'Oils',
    attributes: [],
  },
  {
    id: 'Elf-Evolution-900-FTA-5W-40-1L',
    ItemImg: VeggieSet,
    ItemName: 'Elf Evolution 900 FTA 5W 40 1L',
    ItemIngredients:
      'Very Veggie Roll, Very Veggie Maki, Cucumber Maki Raki, Avocado Maki Raki.',
    ItemPrice: (16).toFixed(2),
    Category: 'Oils',
    attributes: [],
  },
  {
    id: 'Eurol-Super-Lite-5W-40-1L',
    ItemImg: FriendlySet,
    ItemName: 'Eurol Super Lite 5W 40 1L',
    ItemIngredients:
      'Californication, Spicy Salmon Roll, Blissful Eel Roll, Sebastian the Crab Roll, Cucumber Maki Raki.',
    ItemPrice: (30).toFixed(2),
    Category: 'Oils',
    attributes: [],
  },
  {
    id: 'Wurth-Triathlon-Universal-HCDP-SAE-20W-50-1L',
    ItemImg: SunnyPhiladelphia,
    ItemName: 'Wurth Triathlon Universal HCDP SAE 20W 50 1L',
    ItemIngredients: 'Salmon, cream cheese, avocado, rice, sesame, nori.',
    ItemPrice: (12).toFixed(2),
    Category: 'Oils',
    attributes: [],
  },
  {
    id: 'Shell-Helix-HX8-5W-40-1L',
    ItemImg: HiddenDragon,
    ItemName: 'Shell Helix HX8 5W 40 1L',
    ItemIngredients:
      'Salmon, cream cheese, avocado, tobiko, rice, sesame, cucumber, nori.',
    ItemPrice: (13).toFixed(2),
    Category: 'Oils',
    attributes: [],
  },
  {
    id: 'Shell-Helix-HX8-5W-30-1L',
    ItemImg: DoubleSalmon,
    ItemName: 'Shell Helix HX8 5W 30 1L',
    ItemIngredients:
      'Salmon, Cream Cheese, Avocado, Sesame, Extra Salmon Slice, Cucumber, Rice, nori.',
    ItemPrice: (14).toFixed(2),
    Category: 'Oils',
    attributes: [],
  },
  {
    id: 'Elf-Evolution-900-FTA-5W-40-4L',
    ItemImg: HottestTaisho,
    ItemName: 'Elf Evolution 900 FTA 5W 40 4L',
    ItemIngredients:
      'Salmon, Cream Cheese, Avocado, Cucumber, Rice - all comes with your chosen sauce.',
    ItemPrice: (12).toFixed(2),
    Category: 'Oils',
    attributes: [],
  },
  {
    id: 'Eurol-Super-Lite-5W-40-4L',
    ItemImg: BurningTaisho,
    ItemName: 'Eurol Super Lite 5W 40 4L',
    ItemIngredients: 'Salmon, Avocado, Rice, Cucumber, Cream Cheese.',
    ItemPrice: (10).toFixed(2),
    Category: 'Oils',
    attributes: [],
  },
]