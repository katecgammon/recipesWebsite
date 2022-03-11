let mock = [{
    id: 1,
    name: "The Best Chicken Quesadillas",
    image: 'chicken-quesadillas.jpg',
    course: "Appetizer",
    ingredients: [
       {message: "4 cups cooked, chopped chicken"},
       {message: "1 tablespoon oil"},
       {message: "2-3 cups sliced mushrooms"},
       {message: "2 medium bell peppers (any color), cored and sliced into thin strips"},
       {message: "1 large onion, sliced into thin half moon strips"},
       {message: "2-3 tablespoons broth or water"},
       {message: "2 cups shredded Monterey Jack cheese"},
       {message: "1 cup shredded medium or sharp cheddar cheese"},
       {message: "8 8-inch flour tortillas"}
    ]
  },
  {
    id: 2,
    name: "Quick and Easy Chinese Chicken and Broccoli",
    image: "asian-broccoli-skillet.jpg",
    course: "Main",
    ingredients: [
        {message: "2 ½ cups chicken broth or stock"},
        {message: "⅓ cup light or dark brown sugar"},
        {message: "½ cup soy sauce"},
        {message: "¼ cup oyster sauce"},
        {message: "3 tablespoons cornstarch"},
        {message: "1 tablespoon grated fresh ginger or refrigerated ginger paste"},
        {message: "1 tablespoon finely minced garlic"},
        {message: "1 teaspoon sesame oil"},
        {message: "3-4 cups cooked, shredded or cubed chicken"},
        {message: "6-8 cups broccoli florets, chopped into bite-size pieces"},
        {message: "Hot, cooked rice, for serving"},
        {message: "Toasted sesame seeds and chopped green onions, for garnish"}
    ]
  },
  {
    id: 3,
    name: "Cilantro Lime Rice",
    image: 'Lime-Rice.jpeg',
    course: "Side",
    ingredients: [
        {message: "1 tablespoons butter"},
        {message: "1 ¼ cups rice, long grain white rice or jasmine rice works best"},
        {message: "2 ¼ cups low-sodium chicken broth"},
        {message: "¾ teaspoon salt"},
        {message: "¼ teaspoon freshly ground black pepper"},
        {message: "Juice and zest of 1 large lime"},
        {message: "2 tablespoons chopped cilantro"},
        {message: "¼ teaspoon ground cumin"}
    ]
  },
  {
    id: 4,
    name: "Beef and Broccoli Ramen Noodles",
    course: "Main",
    image: 'broccoli-beef.jpeg',
    ingredients: [
        {message: "1 to 1 ½ pounds flank or sirloin steak, sliced thin"},
        {message: "1 tablespoon olive oil"},
        {message: "1 tablespoon sesame oil"},
        {message: "1 tablespoon fresh grated ginger or ginger paste"},
        {message: "2 cloves garlic, finely minced"},
        {message: "4-6 cups chopped broccoli florets"},
        {message: "3 ½ cups chicken broth"},
        {message: "4 (3-ounces each) packages ramen noodles, flavoring packets discarded"}

    ]
  },
  {
    id: 5,
    name: "Classic Orange Julius",
    course: "Drink",
    image: 'Orange-Julius.jpg',
    ingredients: [
        {message: "6 ounces frozen orange juice concentrate, no sugar added"},
        {message: "1 cup lowfat or skim milk"},
        {message: "1 cup water"},
        {message: "¼ cup powdered sugar"},
        {message: "1 teaspoon vanilla extract"},
        {message: "10-12 ice cubes"}
    ]

  },
  {
    id: 6,
    name: "Sesame Thai Chicken Dip",
    course: "Appetizer",
    image: 'sesame-thai-chicken-dip5.jpeg',
    ingredients: [
        {message: "1 ½ tablespoons soy sauce"},
        {message: "1 tablespoon sesame oil, toasted or regular"},
        {message: "2 cloves garlic, finely minced"},
        {message: "2 to 3 cups cooked, shredded chicken"},
        {message: "16 ounces (454 g) cream cheese, softened to room temperature"},
        {message: "1 cup (227 g) sweet Thai chili sauce"},
        {message: "1 to 2 cups finely chopped fresh spinach"},
        {message: "½ cup finely chopped chives or green onions"},
        {message: "½ cup chopped peanuts or toasted sesame seeds"},
        {message: "Sesame rice crackers, for serving"}
    ]
  },
  {
    id: 7,
    name: "Chinese Cashew Chicken",
    course: "Main",
    image: 'cashew-chicken.jpg',
    ingredients: [
        {message: "1 ½ pounds boneless skinless chicken breasts"},
        {message: "1 teaspoon cornstarch"},
        {message: "1 teaspoon baking soda"},
        {message: "1 to 2 tablespoons olive oil"},
        {message: "2 to 3 garlic cloves, finely minced"},
        {message: "½ to 1 tablespoon grated or finely chopped fresh ginger, or ginger paste from a tube"},
        {message: "2 green bell peppers, seeded, cored and diced into bite-size pieces"},
        {message: "1 to 1 ½ cups roasted cashews, I prefer unsalted"}
    ]
  },
  {
    id: 8,
    name: "Homemade RootBeer",
    course: "Drink",
    image: 'homemade-root-beer6.jpg',
    ingredients: [
        {message: "4 quarts cold water"},
        {message: "2-3 cups granulated sugar"},
        {message: "3 tablespoons root beer extract"},
        {message: "1-2 pounds food-grade dry ice broken into pieces"}
    ]
  },
  {
    id: 9,
    name: "Homemade Spaghetti Sauce",
    course: "Side",
    image: 'quick-spaghetti.jpg',
    ingredients: [
        {message: "1 pound ground beef"},
        {message: "½ cup chopped onion"},
        {message: "2 cloves garlic, finely minced"},
        {message: "2 tablespoons tomato paste"},
        {message: "1 teaspoon dried basil"},
        {message: "1 teaspoon dried oregano"},
        {message: "¼ teaspoon dried thyme"},
        {message: "½ teaspoon coarse, kosher salt"},
        {message: "¼ teaspoon black pepper"},
        {message: "28- ounce can crushed tomatoes"},
        {message: "8- ounce can tomato sauce"},
        {message: "1-2 teaspoons brown sugar"},
        {message: "1 tablespoon low-sodium soy sauce"},
        {message: "Hot, cooked noodles, for serving"},
        {message: "Freshly grated Parmesan cheese, for serving"}
    ]

  },
  {
    id: 10,
    name: "Quick and Easy Egg Roll Skillet Meal",
    course: "Main",
    image: 'egg-roll-skillet6.jpeg',
    ingredients: [
        {message: "1 tablespoon olive oil"},
        {message: "1 medium yellow or white onion, diced (about 1 cup)"},
        {message: "3 cloves garlic, finely minced"},
        {message: "1 tablespoon finely chopped or grated fresh ginger, I usually use ginger paste"},
        {message: "1 ½ to 2 pounds lean ground turkey or chicken"},
        {message: "4 large eggs, lightly whisked"},
        {message: "1 (14-ounce) package coleslaw mix, or about 5 cups shredded cabbage/carrots"},
        {message: "1 tablespoon toasted sesame oil"},
        {message: "1 tablespoon soy sauce"},
        {message: "2 tablespoons oyster sauce"},
        {message: "Chopped fresh cilantro, for serving"},
        {message: "Crispy chow mein noodles or fried wontons, for serving"},
        {message: "Sweet and sour sauce or sweet Thai chili sauce, for serving"},
        {message: "Hot, cooked rice, for serving (optional)"}
    ]
  }
]

export default mock;
