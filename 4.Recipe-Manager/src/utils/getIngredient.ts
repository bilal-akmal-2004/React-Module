export const getIngredientEmoji = (ingredient: string) => {
  const name = ingredient.toLowerCase();

  // 🥩 Meats
  if (name.includes("lamb mince") || name.includes("lamb shoulder") || name.includes("lamb leg") || name.includes("lamb loin") || name.includes("lamb kidney") || name.includes("lamb shanks") || name.includes("lamb")) return "🐑";
  if (name.includes("ground beef") || name.includes("minced beef") || name.includes("beef mince") || name.includes("lean minced beef") || name.includes("beef fillet") || name.includes("sirloin steak") || name.includes("beef brisket") || name.includes("beef shin") || name.includes("oxtail") || name.includes("corned beef") || name.includes("beef")) return "🥩";
  if (name.includes("ground pork") || name.includes("minced pork") || name.includes("pork belly") || name.includes("pork chops") || name.includes("pork shoulder") || name.includes("pork tenderloin") || name.includes("pork back ribs") || name.includes("bacon") || name.includes("ham") || name.includes("pork")) return "🥓";
  if (name.includes("chicken breast") || name.includes("chicken thighs") || name.includes("chicken legs") || name.includes("chicken wings") || name.includes("chicken drumsticks") || name.includes("chicken liver") || name.includes("chicken")) return "🍗";
  if (name.includes("chorizo")) return "🌭";
  if (name.includes("goat meat") || name.includes("goat")) return "🐐";
  if (name.includes("duck legs") || name.includes("duck")) return "🦆";
  if (name.includes("turkey ham") || name.includes("turkey mince") || name.includes("turkey")) return "🦃";
  if (name.includes("sausages") || name.includes("kielbasa") || name.includes("kabanos") || name.includes("german sausages")) return "🌭";
  if (name.includes("serrano ham") || name.includes("prosciutto") || name.includes("jamón")) return "🍖";
  if (name.includes("black pudding") || name.includes("morcilla")) return "🌭";
  if (name.includes("doner meat")) return "🥙";

  // 🦐 Seafood
  if (name.includes("prawns") || name.includes("king prawns") || name.includes("tiger prawns") || name.includes("shrimp") || name.includes("jumbo shrimp")) return "🦐";
  if (name.includes("mussels")) return "🦪";
  if (name.includes("squid") || name.includes("calamari")) return "🦑";
  if (name.includes("clams")) return "🦪";
  if (name.includes("oysters")) return "🦪";
  if (name.includes("crab")) return "🦀";
  if (name.includes("lobster")) return "🦞";
  if (name.includes("salmon") || name.includes("smoked salmon") || name.includes("haddock") || name.includes("cod") || name.includes("tuna") || name.includes("mackerel") || name.includes("sardines") || name.includes("anchovy") || name.includes("trout") || name.includes("barramundi") || name.includes("hake") || name.includes("monkfish") || name.includes("red snapper") || name.includes("white fish") || name.includes("fish fillet") || name.includes("pilchards") || name.includes("herring")) return "🐟";
  if (name.includes("seafood") || name.includes("salt cod")) return "🐟";

  // 🧀 Dairy
  if (name.includes("cheese") || name.includes("cheddar") || name.includes("mozzarella") || name.includes("parmesan") || name.includes("gruyere") || name.includes("feta") || name.includes("ricotta") || name.includes("gouda") || name.includes("emmentaler") || name.includes("monterey jack") || name.includes("colby jack") || name.includes("stilton") || name.includes("manchego") || name.includes("pecorino") || name.includes("fromage frais") || name.includes("cream cheese") || name.includes("mascarpone") || name.includes("brie")) return "🧀";
  if (name.includes("butter") || name.includes("ghee")) return "🧈";
  if (name.includes("yogurt") || name.includes("yoghurt") || name.includes("greek yogurt") || name.includes("natural yoghurt")) return "🥛";
  if (name.includes("milk") || name.includes("whole milk") || name.includes("semi-skimmed milk") || name.includes("soya milk") || name.includes("almond milk")) return "🥛";
  if (name.includes("cream") || name.includes("double cream") || name.includes("single cream") || name.includes("whipping cream") || name.includes("heavy cream") || name.includes("clotted cream") || name.includes("soured cream") || name.includes("sour cream") || name.includes("crème fraîche") || name.includes("creme fraiche")) return "🥛";
  if (name.includes("eggs") || name.includes("egg") || name.includes("egg yolk") || name.includes("egg white")) return "🥚";
  if (name.includes("condensed milk") || name.includes("sweetened condensed milk")) return "🥛";

  // 🫒 Oils & Fats
  if (name.includes("olive oil") || name.includes("extra virgin olive oil")) return "🫒";
  if (name.includes("sunflower oil")) return "🌻";
  if (name.includes("vegetable oil") || name.includes("canola oil") || name.includes("rapeseed oil") || name.includes("peanut oil") || name.includes("ground nut oil") || name.includes("high heat cooking oil")) return "🫗";
  if (name.includes("sesame oil") || name.includes("sesame seed oil")) return "⚫";
  if (name.includes("truffle oil")) return "🍄";
  if (name.includes("goose fat") || name.includes("lard")) return "🥓";

  // 🌶️ Spices & Seasonings
  if (name.includes("chilli") || name.includes("chili") || name.includes("red chilli") || name.includes("green chilli") || name.includes("birds-eye chillies") || name.includes("chilli flakes") || name.includes("red chilli flakes") || name.includes("chilli powder") || name.includes("red chilli powder") || name.includes("ancho chillies") || name.includes("dried red chillies") || name.includes("dried chillies") || name.includes("chilli bean paste")) return "🌶️";
  if (name.includes("paprika") || name.includes("smoked paprika") || name.includes("hot smoked paprika") || name.includes("sweet smoked paprika") || name.includes("pul biber")) return "🌶️";
  if (name.includes("red pepper flakes") || name.includes("cayenne pepper")) return "🌶️";
  if (name.includes("red pepper paste")) return "🫑";
  if (name.includes("romano pepper") || name.includes("bell pepper") || name.includes("red pepper") || name.includes("green pepper") || name.includes("yellow pepper") || name.includes("sweet red peppers") || name.includes("sweet peppadew peppers") || name.includes("mixed peppers") || name.includes("roasted pepper")) return "🫑";
  if (name.includes("jalapeno")) return "🌶️";
  if (name.includes("scotch bonnet")) return "🌶️";

  // 🧄 Aromatics
  if (name.includes("garlic") || name.includes("garlic clove") || name.includes("garlic paste") || name.includes("minced garlic") || name.includes("garlic powder") || name.includes("garlic granules") || name.includes("garlic bulb")) return "🧄";
  if (name.includes("onion") || name.includes("red onion") || name.includes("spring onion") || name.includes("scallions") || name.includes("challots") || name.includes("shallots")) return "🧅";
  if (name.includes("ginger") || name.includes("ginger paste") || name.includes("ground ginger") || name.includes("ginger cordial")) return "🫚";
  if (name.includes("leek")) return "🥬";
  if (name.includes("chives") || name.includes("chopped chive")) return "🌱";

  // 🌿 Herbs
  if (name.includes("parsley") || name.includes("chopped parsley") || name.includes("freshly chopped parsley") || name.includes("coriander") || name.includes("coriander leaves") || name.includes("cilantro") || name.includes("cilantro leaves") || name.includes("basil") || name.includes("basil leaves") || name.includes("fresh basil") || name.includes("thyme") || name.includes("fresh thyme") || name.includes("rosemary") || name.includes("oregano") || name.includes("dried oregano") || name.includes("marjoram") || name.includes("sage") || name.includes("mint") || name.includes("dried mint") || name.includes("dill") || name.includes("tarragon leaves") || name.includes("sumac") || name.includes("bay leaf") || name.includes("bay leaves") || name.includes("bouquet garni")) return "🌿";
  if (name.includes("wild garlic leaves")) return "🧄";

  // 🥬 Vegetables
  if (name.includes("tomato") || name.includes("plum tomatoes") || name.includes("cherry tomatoes") || name.includes("grape tomatoes") || name.includes("vine tomatoes") || name.includes("baby plum tomatoes") || name.includes("beef tomatoes") || name.includes("canned tomatoes") || name.includes("tinned tomatoes") || name.includes("diced tomatoes") || name.includes("chopped tomatoes") || name.includes("tomato puree") || name.includes("tomato purée") || name.includes("passata") || name.includes("tomato sauce") || name.includes("tomato ketchup") || name.includes("sun-dried tomatoes")) return "🍅";
  if (name.includes("carrot") || name.includes("carrots")) return "🥕";
  if (name.includes("potato") || name.includes("potatoes") || name.includes("new potatoes") || name.includes("baby new potatoes") || name.includes("floury potatoes") || name.includes("russet potato") || name.includes("charlotte potatoes") || name.includes("jersey royal potatoes") || name.includes("red potatoes") || name.includes("sweet potato") || name.includes("sweet potatoes")) return "🥔";
  if (name.includes("cabbage") || name.includes("red cabbage") || name.includes("white cabbage") || name.includes("savoy cabbage") || name.includes("napa cabbage") || name.includes("chinese cabbage") || name.includes("hispi cabbage") || name.includes("sauerkraut") || name.includes("white sauerkraut")) return "🥬";
  if (name.includes("lettuce") || name.includes("iceberg lettuce") || name.includes("little gem lettuce") || name.includes("baby lettuce leaves") || name.includes("rocket") || name.includes("kale")) return "🥬";
  if (name.includes("spinach")) return "🥬";
  if (name.includes("broccoli") || name.includes("purple sprouting broccoli") || name.includes("chinese broccoli") || name.includes("broccolini")) return "🥦";
  if (name.includes("cauliflower")) return "🥦";
  if (name.includes("aubergine") || name.includes("eggplant") || name.includes("baby aubergine") || name.includes("egg plants")) return "🍆";
  if (name.includes("cucumber")) return "🥒";
  if (name.includes("zucchini") || name.includes("courgettes") || name.includes("courgette")) return "🥒";
  if (name.includes("peas") || name.includes("garden peas") || name.includes("frozen peas") || name.includes("sugar snap peas") || name.includes("petit pois")) return "🟢";
  if (name.includes("green beans") || name.includes("french beans") || name.includes("broad beans") || name.includes("chinese long beans")) return "🫘";
  if (name.includes("mushroom") || name.includes("mushrooms") || name.includes("chestnut mushroom") || name.includes("shiitake mushrooms") || name.includes("wild mushrooms") || name.includes("oyster mushrooms") || name.includes("wood ear mushrooms")) return "🍄";
  if (name.includes("corn") || name.includes("sweetcorn") || name.includes("creamed corn") || name.includes("cornmeal")) return "🌽";
  if (name.includes("celery") || name.includes("celeriac")) return "🥬";
  if (name.includes("fennel") || name.includes("fennel bulb")) return "🌿";
  if (name.includes("asparagus") || name.includes("white asparagus")) return "🌱";
  if (name.includes("pak choi") || name.includes("bok choi") || name.includes("chinese leaf")) return "🥬";
  if (name.includes("radish")) return "🥕";
  if (name.includes("turnips") || name.includes("swede") || name.includes("parsnip")) return "🥕";
  if (name.includes("beetroot") || name.includes("cooked beetroot")) return "🍠";
  if (name.includes("pumpkin") || name.includes("butternut squash") || name.includes("squash")) return "🎃";
  if (name.includes("jerusalem artichokes")) return "🥔";
  if (name.includes("water chestnut") || name.includes("chestnuts") || name.includes("cooked chestnut")) return "🌰";
  if (name.includes("olives") || name.includes("black olives") || name.includes("green olives") || name.includes("pitted black olives")) return "🫒";
  if (name.includes("capers")) return "🟢";

  // 🫘 Legumes & Pulses
  if (name.includes("chickpeas") || name.includes("chickpea") || name.includes("garbanzo")) return "🫘";
  if (name.includes("lentils") || name.includes("brown lentils") || name.includes("french lentils") || name.includes("green red lentils") || name.includes("toor dal") || name.includes("khus khus")) return "🫘";
  if (name.includes("beans") || name.includes("black beans") || name.includes("kidney beans") || name.includes("cannellini beans") || name.includes("borlotti beans") || name.includes("haricot beans") || name.includes("dried white beans") || name.includes("butter beans") || name.includes("pinto beans") || name.includes("refried beans") || name.includes("broad beans") || name.includes("baked beans") || name.includes("fermented black beans") || name.includes("dried white navy beans") || name.includes("soya bean")) return "🫘";
  if (name.includes("tofu") || name.includes("silken tofu") || name.includes("marinated tofu") || name.includes("tempeh")) return "🥟";

  // 🍚 Grains
  if (name.includes("rice") || name.includes("paella rice") || name.includes("basmati rice") || name.includes("jasmine rice") || name.includes("sushi rice") || name.includes("brown rice") || name.includes("arborio rice") || name.includes("risotto rice")) return "🍚";
  if (name.includes("couscous")) return "🍚";
  if (name.includes("quinoa")) return "🌾";
  if (name.includes("bulgur wheat") || name.includes("freekeh") || name.includes("oats") || name.includes("porridge oats") || name.includes("rolled oats") || name.includes("oatmeal") || name.includes("ground oats")) return "🌾";
  if (name.includes("cornmeal") || name.includes("polenta") || name.includes("fine yellow cornmeal") || name.includes("white cornmeal")) return "🌽";
  if (name.includes("semolina") || name.includes("semolina flour")) return "🌾";

  // 🍝 Pasta & Noodles
  if (name.includes("pasta") || name.includes("spaghetti") || name.includes("linguine") || name.includes("fettuccine") || name.includes("lasagne sheets") || name.includes("macaroni") || name.includes("penne") || name.includes("rigatoni") || name.includes("farfalle") || name.includes("bowtie pasta") || name.includes("paccheri pasta") || name.includes("vermicelli") || name.includes("vermicelli pasta")) return "🍝";
  if (name.includes("noodles") || name.includes("rice noodles") || name.includes("egg noodles") || name.includes("udon noodles") || name.includes("ramen") || name.includes("flat rice noodles") || name.includes("rice stick noodles") || name.includes("vermicelli rice noodles") || name.includes("brown rice noodle") || name.includes("rice vermicelli")) return "🍜";
  if (name.includes("rice paper sheets") || name.includes("wonton skin") || name.includes("egg roll wrappers")) return "🥟";

  // 🍞 Bread & Pastry
  if (name.includes("bread") || name.includes("white bread") || name.includes("naan bread") || name.includes("pita bread") || name.includes("baguette") || name.includes("ciabatta") || name.includes("rye bread") || name.includes("wholegrain bread") || name.includes("crusty bread") || name.includes("stale bread") || name.includes("bread rolls") || name.includes("toast") || name.includes("bun") || name.includes("sesame seed burger buns")) return "🍞";
  if (name.includes("flour") || name.includes("plain flour") || name.includes("self-raising flour") || name.includes("strong white flour") || name.includes("strong wholemeal flour") || name.includes("bread flour") || name.includes("chickpea flour") || name.includes("buckwheat flour") || name.includes("semolina flour") || name.includes("almond flour") || name.includes("rice flour") || name.includes("corn flour") || name.includes("potato starch") || name.includes("cornstarch")) return "🌾";
  if (name.includes("pastry") || name.includes("puff pastry") || name.includes("shortcrust pastry") || name.includes("filo pastry") || name.includes("phyllo dough")) return "🥐";
  if (name.includes("tortillas") || name.includes("corn tortillas") || name.includes("flour tortilla") || name.includes("hard taco shells")) return "🌮";
  if (name.includes("arepa") || name.includes("yellow masarepa") || name.includes("corn arepa")) return "🫓";
  if (name.includes("pancakes") || name.includes("rice flour pancakes")) return "🥞";

  // 🍋 Fruits
  if (name.includes("lemon") || name.includes("lemon zest") || name.includes("lemon juice") || name.includes("unwaxed lemon") || name.includes("lemons")) return "🍋";
  if (name.includes("lime") || name.includes("lime juice") || name.includes("unwaxed lime") || name.includes("lime leaves") || name.includes("makrut lime leaves")) return "🍈";
  if (name.includes("orange") || name.includes("orange zest") || name.includes("orange juice") || name.includes("blood orange") || name.includes("tangerine")) return "🍊";
  if (name.includes("apple") || name.includes("braeburn apples") || name.includes("bramley apples") || name.includes("crab apples")) return "🍎";
  if (name.includes("banana") || name.includes("fried ripe bananas")) return "🍌";
  if (name.includes("avocado")) return "🥑";
  if (name.includes("coconut") || name.includes("coconut milk") || name.includes("coconut cream") || name.includes("unsweetened coconut milk") || name.includes("desiccated coconut") || name.includes("shredded coconut") || name.includes("coconut flakes") || name.includes("coco sugar")) return "🥥";
  if (name.includes("pineapple") || name.includes("pineapple chunks") || name.includes("pineapple juice")) return "🍍";
  if (name.includes("berries") || name.includes("strawberries") || name.includes("raspberries") || name.includes("blueberries") || name.includes("blackberries") || name.includes("redcurrants") || name.includes("frozen mixed berries") || name.includes("saskatoon berries")) return "🍓";
  if (name.includes("apricot") || name.includes("dried apricots") || name.includes("apricot jam")) return "🍑";
  if (name.includes("peaches") || name.includes("peach juice")) return "🍑";
  if (name.includes("plum") || name.includes("plum jam")) return "🍑";
  if (name.includes("pears")) return "🍐";
  if (name.includes("figs")) return "🟣";
  if (name.includes("dates") || name.includes("pitted dates") || name.includes("stoned dates") || name.includes("medjool dates")) return "🟤";
  if (name.includes("prunes")) return "🟤";
  if (name.includes("raisins") || name.includes("sultanas") || name.includes("currants") || name.includes("dried cranberries") || name.includes("dried cherries") || name.includes("mixed peel") || name.includes("dried fruit") || name.includes("candied peel") || name.includes("glace cherry")) return "🟤";
  if (name.includes("pomegranate") || name.includes("pomegranate molasses")) return "🍎";

  // 🥜 Nuts & Seeds
  if (name.includes("almonds") || name.includes("ground almonds") || name.includes("flaked almonds") || name.includes("almond paste") || name.includes("almond essence") || name.includes("almond extract")) return "🥜";
  if (name.includes("walnuts")) return "🥜";
  if (name.includes("cashew") || name.includes("cashew nuts") || name.includes("cashews")) return "🥜";
  if (name.includes("pecan") || name.includes("pecan nuts")) return "🥜";
  if (name.includes("pistachio") || name.includes("ground pistachios") || name.includes("unsalted pistachio") || name.includes("pistachio paste")) return "🟢";
  if (name.includes("hazlenuts") || name.includes("shelled hazelnuts")) return "🥜";
  if (name.includes("peanuts") || name.includes("roasted peanut") || name.includes("peanut cookies") || name.includes("peanut brittle")) return "🥜";
  if (name.includes("chestnuts")) return "🌰";
  if (name.includes("pine nuts") || name.includes("pine nuts")) return "🌰";
  if (name.includes("poppy seeds") || name.includes("ground poppy seeds")) return "⚫";
  if (name.includes("sesame seed") || name.includes("sesame seeds")) return "⚫";
  if (name.includes("caraway seed") || name.includes("fennel seeds") || name.includes("mustard seeds") || name.includes("coriander seeds") || name.includes("cumin seeds")) return "⚫";

  // 🍶 Sauces & Condiments
  if (name.includes("soy sauce") || name.includes("dark soy sauce") || name.includes("light soy sauce") || name.includes("soya sauce")) return "🍶";
  if (name.includes("fish sauce") || name.includes("nam pla") || name.includes("thai fish sauce")) return "🐟";
  if (name.includes("oyster sauce")) return "🦪";
  if (name.includes("hoisin sauce")) return "🍯";
  if (name.includes("sriracha") || name.includes("hotsauce") || name.includes("tabasco") || name.includes("chilli sauce")) return "🌶️";
  if (name.includes("barbecue sauce") || name.includes("barbeque sauce")) return "🍖";
  if (name.includes("worcestershire sauce")) return "🧂";
  if (name.includes("mustard") || name.includes("dijon mustard") || name.includes("english mustard") || name.includes("wholegrain mustard")) return "🟡";
  if (name.includes("mayonnaise") || name.includes("mayo")) return "🥚";
  if (name.includes("ketchup") || name.includes("tomato ketchup")) return "🍅";
  if (name.includes("duck sauce") || name.includes("plum sauce")) return "🦆";
  if (name.includes("pico de gallo") || name.includes("salsa") || name.includes("green salsa")) return "🍅";
  if (name.includes("garlic sauce") || name.includes("garlic herb yoghurt sauce") || name.includes("smoky aïoli")) return "🧄";
  if (name.includes("tahini") || name.includes("tahini paste") || name.includes("chinese sesame sauce")) return "🥜";
  if (name.includes("harissa") || name.includes("harissa spice")) return "🌶️";
  if (name.includes("curry paste") || name.includes("thai red curry paste") || name.includes("thai green curry paste") || name.includes("massaman curry paste") || name.includes("panang curry paste") || name.includes("madras paste") || name.includes("biryani masala") || name.includes("garam masala") || name.includes("ras el hanout") || name.includes("kabse spice")) return "🍛";
  if (name.includes("piri-piri") || name.includes("peri-peri")) return "🌶️";
  if (name.includes("gochujang") || name.includes("doubanjiang")) return "🌶️";
  if (name.includes("chimmichurri") || name.includes("chimichurri sauce")) return "🌿";
  if (name.includes("vinaigrette") || name.includes("vinaigrette dressing")) return "🍾";
  if (name.includes("sherry") || name.includes("dry sherry") || name.includes("sweet sherry")) return "🍷";
  if (name.includes("mirin") || name.includes("sake") || name.includes("shaoxing wine") || name.includes("cooking wine") || name.includes("rice wine")) return "🍶";
  if (name.includes("red wine") || name.includes("white wine") || name.includes("dry white wine")) return "🍷";
  if (name.includes("brandy") || name.includes("grand marnier") || name.includes("dark rum")) return "🥃";
  if (name.includes("beer") || name.includes("stout") || name.includes("cider") || name.includes("cider vinegar")) return "🍺";

  // 🥣 Stocks & Broths
  if (name.includes("stock") || name.includes("broth") || name.includes("beef stock") || name.includes("chicken stock") || name.includes("vegetable stock") || name.includes("fish stock") || name.includes("seafood stock") || name.includes("lamb stock") || name.includes("shrimp stock") || name.includes("bouillon cubes") || name.includes("stock cube")) return "🥣";

  // 🥄 Spices (Powders)
  if (name.includes("cumin") || name.includes("ground cumin") || name.includes("cumin seeds")) return "⚫";
  if (name.includes("coriander") || name.includes("ground coriander") || name.includes("coriander seeds")) return "🌿";
  if (name.includes("cinnamon") || name.includes("cinnamon stick") || name.includes("ground cinnamon")) return "🥢";
  if (name.includes("nutmeg") || name.includes("ground nutmeg")) return "🟤";
  if (name.includes("cloves") || name.includes("ground clove")) return "⚫";
  if (name.includes("cardamom") || name.includes("ground cardomom") || name.includes("cardamom pods")) return "🟢";
  if (name.includes("turmeric") || name.includes("turmeric powder") || name.includes("ground turmeric")) return "🟡";
  if (name.includes("ginger") || name.includes("ground ginger")) return "🫚";
  if (name.includes("paprika") || name.includes("smoked paprika")) return "🌶️";
  if (name.includes("allspice") || name.includes("allspice berries") || name.includes("ground allspice")) return "🟤";
  if (name.includes("juniper berries")) return "🔵";
  if (name.includes("sumac")) return "🔴";
  if (name.includes("saffron")) return "🌼";
  if (name.includes("vanilla") || name.includes("vanilla extract") || name.includes("vanilla bean paste") || name.includes("vanilla pod") || name.includes("vanilla sugar")) return "🍦";
  if (name.includes("five spice") || name.includes("five spice powder") || name.includes("chinese five spice powder")) return "⭐";
  if (name.includes("curry powder") || name.includes("jamaican curry powder")) return "🍛";
  if (name.includes("speculaas spice mix")) return "🍪";

  // 🍯 Sweeteners
  if (name.includes("sugar") || name.includes("caster sugar") || name.includes("granulated sugar") || name.includes("brown sugar") || name.includes("dark brown sugar") || name.includes("light brown soft sugar") || name.includes("demerara sugar") || name.includes("muscovado sugar") || name.includes("golden caster sugar") || name.includes("powdered sugar") || name.includes("icing sugar") || name.includes("confectioners sugar") || name.includes("palm sugar") || name.includes("coco sugar") || name.includes("sugar syrup") || name.includes("caramelized sugar sauce") || name.includes("golden syrup") || name.includes("maple syrup")) return "🍚";
  if (name.includes("honey") || name.includes("clear honey")) return "🍯";
  if (name.includes("molasses") || name.includes("black treacle")) return "🟤";

  // 🍪 Dessert Ingredients
  if (name.includes("chocolate") || name.includes("dark chocolate") || name.includes("milk chocolate") || name.includes("white chocolate") || name.includes("plain chocolate") || name.includes("cocoa") || name.includes("cocoa powder") || name.includes("unsweetened cocoa") || name.includes("chocolate chips") || name.includes("dark chocolate chips") || name.includes("white chocolate chips") || name.includes("cacao")) return "🍫";
  if (name.includes("biscuits") || name.includes("digestive biscuits") || name.includes("graham cracker crumbs") || name.includes("oreo cream biscuits")) return "🍪";
  if (name.includes("ice cream")) return "🍨";
  if (name.includes("custard") || name.includes("custard powder")) return "🍮";
  if (name.includes("jelly") || name.includes("gelatine leafs") || name.includes("unflavoured gelatin") || name.includes("red wine jelly") || name.includes("blackcurrant jam") || name.includes("raspberry jam") || name.includes("apricot jam") || name.includes("plum jam") || name.includes("jam") || name.includes("marmalade")) return "🍓";
  if (name.includes("meringue nests") || name.includes("meringue")) return "🍰";
  if (name.includes("rice krispies") || name.includes("cereal") || name.includes("grape nut cereal")) return "🥣";
  if (name.includes("mars bar") || name.includes("chocolate bar")) return "🍫";
  if (name.includes("toffee popcorn") || name.includes("popcorn")) return "🍿";
  if (name.includes("pretzels")) return "🥨";

  // 🧂 Basic Seasonings
  if (name.includes("salt") || name.includes("sea salt") || name.includes("kosher salt") || name.includes("celery salt") || name.includes("onion salt") || name.includes("seasoning") || name.includes("all-purpose seasoning") || name.includes("sazon")) return "🧂";
  if (name.includes("pepper") || name.includes("black pepper") || name.includes("white pepper") || name.includes("sichuan pepper") || name.includes("szechuan peppercorns") || name.includes("ground pepper") || name.includes("cracked black pepper")) return "⚫";

  // 🥄 Baking Ingredients
  if (name.includes("baking powder")) return "🧪";
  if (name.includes("bicarbonate of soda") || name.includes("baking soda")) return "🧪";
  if (name.includes("yeast") || name.includes("fast action yeast") || name.includes("instant yeast")) return "🍞";
  if (name.includes("cream of tartar")) return "⚪";

  // 🧊 Special/Cultural Ingredients
  if (name.includes("tamarind") || name.includes("tamarind paste") || name.includes("tamarind pulp") || name.includes("tamarind ball")) return "🟤";
  if (name.includes("lemongrass") || name.includes("lemongrass stalks")) return "🌿";
  if (name.includes("galangal") || name.includes("galangal paste")) return "🫚";
  if (name.includes("kaffir lime leaves") || name.includes("lime leaves") || name.includes("makrut lime leaves")) return "🍃";
  if (name.includes("shrimp paste")) return "🦐";
  if (name.includes("knafeh") || name.includes("kataifi")) return "🍰";
  if (name.includes("turkish delight")) return "🍬";
  if (name.includes("rose water") || name.includes("orange blossom water")) return "🌹";
  if (name.includes("bryndza cheese")) return "🧀";
  if (name.includes("västerbottensost cheese") || name.includes("cheese curds")) return "🧀";
  if (name.includes("liquid cheese")) return "🧀";
  if (name.includes("malai")) return "🥛";
  if (name.includes("sevaiiya") || name.includes("vermicelli")) return "🍝";
  if (name.includes("paneer")) return "🧀";
  if (name.includes("fenugreek")) return "🌿";
  if (name.includes("asafoetida") || name.includes("hing")) return "⚫";
  if (name.includes("acha") || name.includes("pickle")) return "🥒";
  if (name.includes("callaloo")) return "🥬";
  if (name.includes("ackee")) return "🍎";
  if (name.includes("casabe") || name.includes("cassaba") || name.includes("yautia") || name.includes("white yam")) return "🥔";
  if (name.includes("skirty steak")) return "🥩";
  if (name.includes("dried leaves of summer savoury")) return "🌿";
  if (name.includes("polish kabanos")) return "🌭";

  // 🥄 Generic fallback
  return "🥄";
};