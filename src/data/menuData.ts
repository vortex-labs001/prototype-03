export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'starters' | 'mains' | 'soups-salads' | 'desserts' | 'drinks';
  isVeg: boolean;
  image: string;
}

export const menuData: MenuItem[] = [
  // Starters
  {
    id: 's1',
    name: 'Truffle Arancini',
    description: 'Crispy arborio rice balls filled with wild mushrooms and fontina cheese, drizzled with white truffle oil and served with shaved parmesan.',
    price: 15.00,
    category: 'starters',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 's2',
    name: 'Wood-Fired Octopus',
    description: 'Tender octopus grilled over oak logs, served with smoked paprika fingerling potatoes, garlic saffron aioli, and charred lemon.',
    price: 19.00,
    category: 'starters',
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 's3',
    name: 'Crispy Brussels Sprouts',
    description: 'Flash-fried Brussels sprouts tossed in local hot honey, toasted Georgia pecans, and topped with pickled mustard seeds.',
    price: 12.00,
    category: 'starters',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=600&q=80',
  },

  // Soups & Salads
  {
    id: 'sl1',
    name: 'Hearth Roasted Beet Salad',
    description: 'Red and golden roasted beets, whipped goat cheese, candied walnuts, organic wild arugula, and a light orange-citrus vinaigrette.',
    price: 14.00,
    category: 'soups-salads',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'sl2',
    name: 'Ember Caesar Salad',
    description: 'Charred romaine hearts, house-made sourdough croutons, creamy Caesar dressing, and premium white anchovy fillets.',
    price: 13.00,
    category: 'soups-salads',
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'sl3',
    name: 'Wild Mushroom Cream Soup',
    description: 'Rich, earthy soup made from local chanterelle and cremini mushrooms, finished with fresh thyme oil and white truffle foam.',
    price: 11.00,
    category: 'soups-salads',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1547592165-e1d17fed6005?auto=format&fit=crop&w=600&q=80',
  },

  // Mains
  {
    id: 'm1',
    name: 'Oak-Grilled Prime Ribeye',
    description: '16oz USDA Prime ribeye grilled over open embers, topped with rosemary garlic compound butter, served with smoked potato mash.',
    price: 49.00,
    category: 'mains',
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'm2',
    name: 'Cedar Plank Salmon',
    description: 'Fresh Atlantic salmon roasted on cedar wood, glazed with maple mustard, served over wild rice pilaf and blistered tomatoes.',
    price: 36.00,
    category: 'mains',
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'm3',
    name: 'Hearth Smoked Cauliflower Steak',
    description: 'Thick-cut roasted cauliflower steak resting on smoky romesco sauce, topped with toasted chickpeas, salsa verde, and microgreens.',
    price: 24.00,
    category: 'mains',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1624462966581-bc6d768cbce5?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'm4',
    name: 'Cast Iron Half Chicken',
    description: 'Herb-brined chicken seared in cast iron, served with lemon-thyme pan jus and a medley of wood-roasted seasonal root vegetables.',
    price: 32.00,
    category: 'mains',
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80',
  },

  // Desserts
  {
    id: 'd1',
    name: 'Smoked Chocolate Lava Cake',
    description: 'Decadent dark chocolate cake with a molten center, infused with Napa bourbon caramel and sprinkled with smoked maldon sea salt.',
    price: 12.00,
    category: 'desserts',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'd2',
    name: 'Rustic Napa Berry Galette',
    description: 'Free-form pastry filled with seasonal Napa Valley blackberries and raspberries, topped with a scoop of Madagascar vanilla bean gelato.',
    price: 10.00,
    category: 'desserts',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'd3',
    name: 'Espresso Crème Brûlée',
    description: 'Rich custard infused with freshly roasted espresso, complete with a brittle caramelized sugar crust and fresh mint leaf.',
    price: 9.00,
    category: 'desserts',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1516685018646-549198525c1b?auto=format&fit=crop&w=600&q=80',
  },

  // Drinks
  {
    id: 'dr1',
    name: 'Ember Old Fashioned',
    description: 'Small-batch bourbon, house bitters, charred orange peel, and maraschino cherry, cold-infused with oak wood smoke.',
    price: 16.00,
    category: 'drinks',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'dr2',
    name: 'Napa Cabernet Sauvignon',
    description: 'A glass of robust, full-bodied estate red wine with notes of dark blackberry, plum, toasted oak, and vanilla.',
    price: 15.00,
    category: 'drinks',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'dr3',
    name: 'Rosemary Sage Mocktail',
    description: 'Freshly squeezed lemon juice, sparkling spring water, organic agave, muddled fresh rosemary, and sage leaves.',
    price: 8.00,
    category: 'drinks',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=600&q=80',
  }
];
