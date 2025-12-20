module.exports = [
"[project]/lib/translations.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "languages",
    ()=>languages,
    "t",
    ()=>t,
    "translateProductName",
    ()=>translateProductName,
    "translations",
    ()=>translations
]);
const languages = [
    {
        code: "english",
        name: "English",
        nativeName: "English"
    },
    {
        code: "hindi",
        name: "Hindi",
        nativeName: "हिन्दी"
    },
    {
        code: "marathi",
        name: "Marathi",
        nativeName: "मराठी"
    },
    {
        code: "telugu",
        name: "Telugu",
        nativeName: "తెలుగు"
    },
    {
        code: "tamil",
        name: "Tamil",
        nativeName: "தமிழ்"
    },
    {
        code: "bengali",
        name: "Bengali",
        nativeName: "বাংলা"
    },
    {
        code: "kannada",
        name: "Kannada",
        nativeName: "ಕನ್ನಡ"
    },
    {
        code: "malayalam",
        name: "Malayalam",
        nativeName: "മലയാളം"
    },
    {
        code: "gujarati",
        name: "Gujarati",
        nativeName: "ગુજરાતી"
    },
    {
        code: "punjabi",
        name: "Punjabi",
        nativeName: "ਪੰਜਾਬੀ"
    },
    {
        code: "odia",
        name: "Odia",
        nativeName: "ଓଡ଼ିଆ"
    },
    {
        code: "urdu",
        name: "Urdu",
        nativeName: "اردو"
    },
    {
        code: "nepali",
        name: "Nepali",
        nativeName: "नेपाली"
    },
    {
        code: "sinhala",
        name: "Sinhala",
        nativeName: "සිංහල"
    },
    {
        code: "arabic",
        name: "Arabic",
        nativeName: "العربية"
    }
];
const baseTranslations = {
    appName: "SuperMartGPT",
    searchProducts: "Search products...",
    categories: "Categories",
    fruits: "Fruits",
    vegetables: "Vegetables",
    dailyEssentials: "Daily Essentials",
    snacks: "Snacks",
    personalCare: "Personal Care",
    household: "Household",
    language: "Language",
    typeMessage: "Type your message...",
    send: "Send",
    askAboutThis: "Ask SuperMartGPT About This",
    noResults: "No products found",
    searching: "Searching...",
    welcome: "Hello! I'm SuperMartGPT. How can I help you today?",
    menu: "Menu",
    popularProducts: "Popular Products",
    offers: "Special Offers",
    listening: "Listening...",
    translatedFrom: "Translated from",
    demoMessage: "You can ask me about products, compare prices, find deals, or get recommendations. Try asking about fruits, vegetables, or daily essentials!",
    relatedProducts: "Related products you might like",
    inputPlaceholder: "Ask about products, prices, or deals...",
    sidebarFooterText: "Search for products or select a category to get started",
    cart: "Shopping Cart",
    bestsellers: "Bestsellers in your area",
    addToCart: "Add to Cart",
    placeOrder: "Place Order",
    orderPlaced: "Order Placed!",
    orderId: "Order ID",
    orderConfirmation: "Thank you for your order!",
    cartEmpty: "Your cart is empty",
    total: "Total"
};
const productNames = {
    english: {
        "Red Apple": "Red Apple",
        Banana: "Banana",
        Orange: "Orange",
        Mango: "Mango",
        Grapes: "Grapes",
        Tomato: "Tomato",
        Potato: "Potato",
        Onion: "Onion",
        Carrot: "Carrot",
        Spinach: "Spinach",
        "Milk 1L": "Milk 1L",
        Bread: "Bread",
        "Eggs 12pc": "Eggs 12pc",
        Butter: "Butter",
        Cheese: "Cheese",
        Chips: "Chips",
        Cookies: "Cookies",
        Popcorn: "Popcorn",
        "Nuts Mix": "Nuts Mix",
        Crackers: "Crackers",
        Shampoo: "Shampoo",
        "Soap Bar": "Soap Bar",
        Toothpaste: "Toothpaste",
        Lotion: "Lotion",
        Deodorant: "Deodorant",
        Detergent: "Detergent",
        "Dish Soap": "Dish Soap",
        "Paper Towels": "Paper Towels",
        "Trash Bags": "Trash Bags",
        Cleaner: "Cleaner",
        "Organic Milk": "Organic Milk",
        "Fresh Bread": "Fresh Bread",
        "Premium Eggs": "Premium Eggs",
        "Greek Yogurt": "Greek Yogurt",
        "Orange Juice": "Orange Juice",
        Avocados: "Avocados",
        "Amul Milk": "Amul Milk",
        "Aashirvaad Atta 5kg": "Aashirvaad Atta 5kg",
        "Maggi 70g": "Maggi 70g",
        "Parle-G 800g": "Parle-G 800g"
    },
    hindi: {
        "Red Apple": "लाल सेब",
        Banana: "केला",
        Orange: "संतरा",
        Mango: "आम",
        Grapes: "अंगूर",
        Tomato: "टमाटर",
        Potato: "आलू",
        Onion: "प्याज",
        Carrot: "गाजर",
        Spinach: "पालक",
        "Milk 1L": "दूध 1L",
        Bread: "ब्रेड",
        "Eggs 12pc": "अंडे 12pc",
        Butter: "मक्खन",
        Cheese: "पनीर",
        Chips: "चिप्स",
        Cookies: "कुकीज़",
        Popcorn: "पॉपकॉर्न",
        "Nuts Mix": "मिक्स नट्स",
        Crackers: "क्रैकर्स",
        Shampoo: "शैंपू",
        "Soap Bar": "साबुन",
        Toothpaste: "टूथपेस्ट",
        Lotion: "लोशन",
        Deodorant: "डियोडोरेंट",
        Detergent: "डिटर्जेंट",
        "Dish Soap": "बर्तन साबुन",
        "Paper Towels": "कागज तौलिए",
        "Trash Bags": "कचरा बैग",
        Cleaner: "क्लीनर",
        "Organic Milk": "जैविक दूध",
        "Fresh Bread": "ताज़ा ब्रेड",
        "Premium Eggs": "प्रीमियम अंडे",
        "Greek Yogurt": "ग्रीक दही",
        "Orange Juice": "संतरे का रस",
        Avocados: "एवोकाडो",
        "Amul Milk": "अमूल दूध",
        "Aashirvaad Atta 5kg": "आशीर्वाद आटा 5kg",
        "Maggi 70g": "मैगी 70g",
        "Parle-G 800g": "पार्ले-जी 800g"
    },
    marathi: {
        "Red Apple": "लाल सफरचंद",
        Banana: "केळं",
        Orange: "संत्रे",
        Mango: "आंबा",
        Grapes: "द्राक्षे",
        Tomato: "टोमॅटो",
        Potato: "बटाटा",
        Onion: "कांदा",
        Carrot: "गाजर",
        Spinach: "पालक",
        "Milk 1L": "दूध 1L",
        Bread: "ब्रेड",
        "Eggs 12pc": "अंडी 12pc",
        Butter: "लोणी",
        Cheese: "चीज",
        Chips: "चिप्स",
        Cookies: "कुकीज",
        Popcorn: "पॉपकॉर्न",
        "Nuts Mix": "मिक्स नट्स",
        Crackers: "क्रॅकर्स",
        Shampoo: "शाम्पू",
        "Soap Bar": "साबण",
        Toothpaste: "टूथपेस्ट",
        Lotion: "लोशन",
        Deodorant: "डिओडोरंट",
        Detergent: "डिटर्जंट",
        "Dish Soap": "भांडी साबण",
        "Paper Towels": "कागदी टॉवेल",
        "Trash Bags": "कचरा पिशव्या",
        Cleaner: "क्लीनर",
        "Organic Milk": "सेंद्रिय दूध",
        "Fresh Bread": "ताजी ब्रेड",
        "Premium Eggs": "प्रीमियम अंडी",
        "Greek Yogurt": "ग्रीक दही",
        "Orange Juice": "संत्र्याचा रस",
        Avocados: "अॅव्होकॅडो",
        "Amul Milk": "अमूल दूध",
        "Aashirvaad Atta 5kg": "आशीर्वाद आटा 5kg",
        "Maggi 70g": "मॅगी 70g",
        "Parle-G 800g": "पार्ले-जी 800g"
    },
    bengali: {
        "Red Apple": "লাল আপেল",
        Banana: "কলা",
        Orange: "কমলা",
        Mango: "আম",
        Grapes: "আঙুর",
        Tomato: "টমেটো",
        Potato: "আলু",
        Onion: "পেঁয়াজ",
        Carrot: "গাজর",
        Spinach: "পালং শাক",
        "Milk 1L": "দুধ 1L",
        Bread: "রুটি",
        "Eggs 12pc": "ডিম 12pc",
        Butter: "মাখন",
        Cheese: "পনির",
        Chips: "চিপস",
        Cookies: "কুকিজ",
        Popcorn: "পপকর্ন",
        "Nuts Mix": "বাদাম মিশ্রণ",
        Crackers: "ক্র্যাকার্স",
        Shampoo: "শ্যাম্পু",
        "Soap Bar": "সাবান",
        Toothpaste: "টুথপেস্ট",
        Lotion: "লোশন",
        Deodorant: "ডিওডোরেন্ট",
        Detergent: "ডিটারজেন্ট",
        "Dish Soap": "বাসন সাবান",
        "Paper Towels": "কাগজের তোয়ালে",
        "Trash Bags": "ময়লার ব্যাগ",
        Cleaner: "ক্লিনার",
        "Organic Milk": "জৈব দুধ",
        "Fresh Bread": "পুতি রুটি",
        "Premium Eggs": "প্রিমিয়াম ডিম",
        "Greek Yogurt": "গ্রিক দই",
        "Orange Juice": "কমলার রস",
        Avocados: "অ্যাভোকাডো",
        "Amul Milk": "আমুল দুধ",
        "Aashirvaad Atta 5kg": "আশীর্বাদ আটা 5kg",
        "Maggi 70g": "ম্যাগি 70g",
        "Parle-G 800g": "পার্লে-জি 800g"
    },
    telugu: {
        "Red Apple": "ఎర్ర యాపిల్",
        Banana: "అరటి",
        Orange: "నారింజ",
        Mango: "మామిడి",
        Grapes: "ద్రాక్ష",
        Tomato: "టమోటా",
        Potato: "బంగాళాదుంప",
        Onion: "ఉల్లిపాయ",
        Carrot: "క్యారెట్",
        Spinach: "పాలకూర",
        "Milk 1L": "పాలు 1L",
        Bread: "బ్రెడ్",
        "Eggs 12pc": "గుడ్లు 12pc",
        Butter: "వెన్న",
        Cheese: "చీజ్",
        Chips: "చిప్స్",
        Cookies: "కుకీస్",
        Popcorn: "పాప్‌కార్న్",
        "Nuts Mix": "నట్స్ మిక్స్",
        Crackers: "క్రాకర్స్",
        Shampoo: "షాంపూ",
        "Soap Bar": "సబ్బు",
        Toothpaste: "టూత్‌పేస్ట్",
        Lotion: "లోషన్",
        Deodorant: "డియోడరెంట్",
        Detergent: "డిటర్జెంట్",
        "Dish Soap": "గిన్నెల సబ్బు",
        "Paper Towels": "కాగితపు తువ్వాళ్లు",
        "Trash Bags": "చెత్త సంచులు",
        Cleaner: "క్లీనర్",
        "Organic Milk": "సేంద్రీయ పాలు",
        "Fresh Bread": "తాజా బ్రెడ్",
        "Premium Eggs": "ప్రీమియం గుడ్లు",
        "Greek Yogurt": "గ్రీక్ పెరుగు",
        "Orange Juice": "నారింజ రసం",
        Avocados: "అవకాడో",
        "Amul Milk": "అమూల్ పాలు",
        "Aashirvaad Atta 5kg": "ఆశీర్వాద్ ఆటా 5kg",
        "Maggi 70g": "మ్యాగీ 70g",
        "Parle-G 800g": "పార్లే-జి 800g"
    },
    tamil: {
        "Red Apple": "சிவப்பு ஆப்பிள்",
        Banana: "வாழைப்பழம்",
        Orange: "ஆரஞ்சு",
        Mango: "மாம்பழம்",
        Grapes: "திராட்சை",
        Tomato: "தக்காளி",
        Potato: "உருளைக்கிழங்கு",
        Onion: "வெங்காயம்",
        Carrot: "கேரட்",
        Spinach: "கீரை",
        "Milk 1L": "பால் 1L",
        Bread: "ரொட்டி",
        "Eggs 12pc": "முட்டை 12pc",
        Butter: "வெண்ணெய்",
        Cheese: "சீஸ்",
        Chips: "சிப்ஸ்",
        Cookies: "குக்கீஸ்",
        Popcorn: "பாப்கார்ன்",
        "Nuts Mix": "கலவை நட்ஸ்",
        Crackers: "கிராக்கர்ஸ்",
        Shampoo: "ஷாம்பு",
        "Soap Bar": "சோப்பு",
        Toothpaste: "பற்பசை",
        Lotion: "லோஷன்",
        Deodorant: "διοδωρεντ",
        Detergent: "டிடர்ஜெண்ட்",
        "Dish Soap": "பாத்திர சோப்பு",
        "Paper Towels": "காகித துண்டுகள்",
        "Trash Bags": "குப்பை பைகள்",
        Cleaner: "கிளீனர்",
        "Organic Milk": "இயற்கை பால்",
        "Fresh Bread": "புதிய ரொட்டி",
        "Premium Eggs": "பிரீமியம் முட்டை",
        "Greek Yogurt": "கிரேக்க தயிர்",
        "Orange Juice": "ஆரஞ்சு ஜூஸ்",
        Avocados: "அவகாடோ",
        "Amul Milk": "அமூல் பால்",
        "Aashirvaad Atta 5kg": "ஆசீர்வாதம் ஆட்டா 5kg",
        "Maggi 70g": "மேகி 70g",
        "Parle-G 800g": "பார்லே-ஜி 800g"
    },
    gujarati: {
        "Red Apple": "લાલ સફરજન",
        Banana: "કેળું",
        Orange: "નારંગી",
        Mango: "કેરી",
        Grapes: "દ્રાક્ષ",
        Tomato: "ટામેટું",
        Potato: "બટાકા",
        Onion: "ડુંગળી",
        Carrot: "ગાજર",
        Spinach: "પાલક",
        "Milk 1L": "દૂધ 1L",
        Bread: "બ્રેડ",
        "Eggs 12pc": "ઈંડા 12pc",
        Butter: "માખણ",
        Cheese: "ચીઝ",
        Chips: "ચિપ્સ",
        Cookies: "કૂકીઝ",
        Popcorn: "પોપકોર્ન",
        "Nuts Mix": "મિક્સ નટ્સ",
        Crackers: "ક્રેકર્સ",
        Shampoo: "શેમ્પૂ",
        "Soap Bar": "સાબુ",
        Toothpaste: "ટૂથપેસ્ટ",
        Lotion: "લોશન",
        Deodorant: "ડીઓડોરન્ટ",
        Detergent: "ડીટર્જન્ટ",
        "Dish Soap": "વાસણ સાબુ",
        "Paper Towels": "કાગળ ટુવાલ",
        "Trash Bags": "કચરા બેગ",
        Cleaner: "ક્લીનર",
        "Organic Milk": "ઓર્ગેનિક દૂધ",
        "Fresh Bread": "તાજી બ્રેડ",
        "Premium Eggs": "પ્રીમિયમ ઈંડા",
        "Greek Yogurt": "ગ્રીક દહીં",
        "Orange Juice": "નારંગીનો રસ",
        Avocados: "એવોકાડો",
        "Amul Milk": "અમૂલ દૂધ",
        "Aashirvaad Atta 5kg": "આશીર્વાદ આટા 5kg",
        "Maggi 70g": "મેગી 70g",
        "Parle-G 800g": "પાર્લે-જી 800g"
    },
    kannada: {
        "Red Apple": "ಕೆಂಪು ಸೇಬು",
        Banana: "ಬಾಳೆಹಣ್ಣು",
        Orange: "ಕಿತ್ತಳೆ",
        Mango: "ಮಾವು",
        Grapes: "ದ್ರಾಕ್ಷಿ",
        Tomato: "ಟೊಮೆಟೊ",
        Potato: "ಆಲೂಗಡ್ಡೆ",
        Onion: "ಈರುಳ್ಳಿ",
        Carrot: "ಕ್ಯಾರೆಟ್",
        Spinach: "ಪಾಲಕ್",
        "Milk 1L": "ಹಾಲು 1L",
        Bread: "ಬ್ರೆಡ್",
        "Eggs 12pc": "ಮೊಟ್ಟೆ 12pc",
        Butter: "ಬೆಣ್ಣೆ",
        Cheese: "ಚೀಸ್",
        Chips: "ಚಿಪ್ಸ್",
        Cookies: "ಕುಕೀಸ್",
        Popcorn: "ಪಾಪ್‌ಕಾರ್ನ್",
        "Nuts Mix": "ಬೀಜಗಳ ಮಿಶ್ರಣ",
        Crackers: "ಕ್ರ್ಯಾಕರ್ಸ್",
        Shampoo: "ಶಾಂಪೂ",
        "Soap Bar": "ಸೋಪ್",
        Toothpaste: "ಟೂತ್‌ಪೇಸ್ಟ್",
        Lotion: "ಲೋಷನ್",
        Deodorant: "ಡಿಯೋಡರೆಂಟ್",
        Detergent: "ಡಿಟರ್ಜೆಂಟ್",
        "Dish Soap": "ಪಾತ್ರೆ ಸೋಪ್",
        "Paper Towels": "ಕಾಗದ ಟವೆಲ್",
        "Trash Bags": "ಕಸದ ಚೀಲ",
        Cleaner: "ಕ್ಲೀನರ್",
        "Organic Milk": "ಸಾವಯವ ಹಾಲು",
        "Fresh Bread": "ತಾಜಾ ಬ್ರೆಡ್",
        "Premium Eggs": "ಪ್ರೀಮಿಯಂ ಮೊಟ್ಟೆ",
        "Greek Yogurt": "ಗ್ರೀಕ್ ಮೊಸರು",
        "Orange Juice": "ಕಿತ್ತಳೆ ರಸ",
        Avocados: "ಅವಕಾಡೊ",
        "Amul Milk": "ಅಮೂಲ್ ಹಾಲು",
        "Aashirvaad Atta 5kg": "ಆಶೀರ್ವಾದ ಆಟಾ 5kg",
        "Maggi 70g": "ಮ್ಯಾಗಿ 70g",
        "Parle-G 800g": "ಪಾರ್ಲೆ-ಜಿ 800g"
    },
    malayalam: {
        "Red Apple": "ചുവന്ന ആപ്പിൾ",
        Banana: "വാഴപ്പഴം",
        Orange: "ഓറഞ്ച്",
        Mango: "മാങ്ങ",
        Grapes: "മുന്തിരി",
        Tomato: "തക്കാളി",
        Potato: "ഉരുളക്കിഴങ്ങ്",
        Onion: "സവാള",
        Carrot: "കാരറ്റ്",
        Spinach: "ചീര",
        "Milk 1L": "പാൽ 1L",
        Bread: "പാൻ",
        "Eggs 12pc": "മുട്ട 12pc",
        Butter: "വെണ്ണ",
        Cheese: "ചീസ്",
        Chips: "ചിപ്സ്",
        Cookies: "കുക്കീസ്",
        Popcorn: "പോപ്കോൺ",
        "Nuts Mix": "നട്ട് മിശ്രണം",
        Crackers: "ക്രാക്കർസ്",
        Shampoo: "ശാംപു",
        "Soap Bar": "സാബൻ",
        Toothpaste: "ടൂത്പേസ്റ്റ്",
        Lotion: "ലോഷൻ",
        Deodorant: "ഡിയോഡറന്റ്",
        Detergent: "ഡിറ്റർജന്റ്",
        "Dish Soap": "പാത്രം സാബൻ",
        "Paper Towels": "പേപ്പർ ടവലുകൾ",
        "Trash Bags": "മാലിന്യ ബാഗുകൾ",
        Cleaner: "ക്ലീനർ",
        "Organic Milk": "ജൈവ പാൽ",
        "Fresh Bread": "പുതിയ പാൻ",
        "Premium Eggs": "പ്രിമിയം മുട്ട",
        "Greek Yogurt": "ഗ്രീക് തൈരി",
        "Orange Juice": "ഓറഞ്ച് ജ്യൂസ്",
        Avocados: "അവോകാഡോ",
        "Amul Milk": "അമൂൽ പാൽ",
        "Aashirvaad Atta 5kg": "ആശീർവാദം ആട്ട 5kg",
        "Maggi 70g": "മാഗി 70g",
        "Parle-G 800g": "പാർലെ-ജി 800g"
    },
    punjabi: {
        "Red Apple": "ਲਾਲ ਸੇਬ",
        Banana: "ਕੇਲਾ",
        Orange: "ਸੰਤਰਾ",
        Mango: "ਆਮ",
        Grapes: "ਅਙ੍ਗੂਰ",
        Tomato: "ਟਮਾਟਰ",
        Potato: "ਆਲੂ",
        Onion: "ਪਿਆਜ",
        Carrot: "ਗਾਜਰ",
        Spinach: "ਪਾਲਕ",
        "Milk 1L": "ਦੁੱਧ 1L",
        Bread: "ਰੋਟੀ",
        "Eggs 12pc": "ਅੰਡੇ 12pc",
        Butter: "ਮੱਖਣ",
        Cheese: "ਪਨੀਰ",
        Chips: "ਚਿਪਸ",
        Cookies: "ਕੁਕੀਜ",
        Popcorn: "ਪੌਪਕਾਰਨ",
        "Nuts Mix": "ਮਿਕਸ ਗ੍ਰੀ",
        Crackers: "ਕ੍ਰੈਕਰ",
        Shampoo: "ਸ਼ੈਮਪੂ",
        "Soap Bar": "ਸਾਬੁਨ",
        Toothpaste: "ਦੰਦ ਮੰਜਨ",
        Lotion: "ਲੋਸ਼ਨ",
        Deodorant: "ਡਿਓਡੋਰੈਂਟ",
        Detergent: "ਡਿਟਰਜੈਂਟ",
        "Dish Soap": "ਵਰਤਨ ਸਾਬੁਨ",
        "Paper Towels": "ਕਾਗਜ਼ ਤੌਲੀਏ",
        "Trash Bags": "ਕੂੜਾ ਬੈਗ",
        Cleaner: "ਕਲੀਨਰ",
        "Organic Milk": "ਜੈਵਿਕ ਦੁੱਧ",
        "Fresh Bread": "ਤਾਜ਼ੀ ਰੋਟੀ",
        "Premium Eggs": "ਪ੍ਰੀਮੀਅਮ ਅੰਡੇ",
        "Greek Yogurt": "ਗ੍ਰੀਕ ਦਹੀ",
        "Orange Juice": "ਸੰਤਰੇ ਦਾ ਜ਼ੂਸ",
        Avocados: "ਐਵੋਕਾਡੋ",
        "Amul Milk": "ਅਮੂਲ ਦੁੱਧ",
        "Aashirvaad Atta 5kg": "ਆਸ਼ੀਰਵਾਦ ਆਟਾ 5kg",
        "Maggi 70g": "ਮੈਗੀ 70g",
        "Parle-G 800g": "ਪਾਰਲੇ-ਜੀ 800g"
    },
    odia: {
        "Red Apple": "ଲାଲ ଆପେଲ",
        Banana: " କଦଳୀ",
        Orange: "କମଳା",
        Mango: "ଅମ୍ବ",
        Grapes: "ଅଙ୍ଗୁର",
        Tomato: "ଟମାଟୋ",
        Potato: "ଆଲୁ",
        Onion: "ପିଆଜ",
        Carrot: "ଗାଜର",
        Spinach: "ପାଳଂଗ",
        "Milk 1L": "କ୍ଷୀର 1L",
        Bread: "ରୁଟୁ",
        "Eggs 12pc": "ଅଣ୍ଡା 12pc",
        Butter: "ମାଖନ",
        Cheese: "ଛେନା",
        Chips: "ଚିପସ",
        Cookies: "କୁକିଜ",
        Popcorn: "ମକ୍କା ଫୁଲ",
        "Nuts Mix": "ମିଶ୍ରିତ ବାଦାମ",
        Crackers: "ମଇଦା ବିସକୁଟ",
        Shampoo: "ଶ୍ୟାମ୍ପୁ",
        "Soap Bar": "ସାବୁନ",
        Toothpaste: "ଦନ୍ତକ୍ରିମ",
        Lotion: "ଲୋସନ",
        Deodorant: "ଦୁର୍ଗନ୍ଧ ନାଶକ",
        Detergent: "ବିସର୍ଜନ ଶକ୍ତି",
        "Dish Soap": "ପାତ୍ର ସାବୁନ",
        "Paper Towels": "କାଗଜ ରୁମାଲ",
        "Trash Bags": "ଚିରା ଗଚ୍ଛ",
        Cleaner: "ସଫାଲକାରୀ",
        "Organic Milk": "ଜୈବ କ୍ଷୀର",
        "Fresh Bread": "ତାଜା ରୁଟୁ",
        "Premium Eggs": "ଶ୍ରେଷ୍ଠ ଅଣ୍ଡା",
        "Greek Yogurt": "ଗ୍ରୀକ୍ ଦହି",
        "Orange Juice": "କମଳା ରସ",
        Avocados: "ଅ୍ୟାଭୋକାଡୋ",
        "Amul Milk": "ଅମୂଲ କ୍ଷୀର",
        "Aashirvaad Atta 5kg": "ଆଶୀର୍ବାଦ ଆଟା 5kg",
        "Maggi 70g": "ମ୍ୟାଗି 70g",
        "Parle-G 800g": "ପାର୍ଲେ-ଜି 800g"
    },
    urdu: {
        "Red Apple": "سرخ سیب",
        Banana: "کیلا",
        Orange: "نارنگی",
        Mango: "آم",
        Grapes: "انگور",
        Tomato: "ٹماٹر",
        Potato: "آلو",
        Onion: "پیاز",
        Carrot: "گاجر",
        Spinach: "پالک",
        "Milk 1L": "دودھ 1L",
        Bread: "روٹی",
        "Eggs 12pc": "انڈے 12pc",
        Butter: "مکھن",
        Cheese: "پنیر",
        Chips: "چپس",
        Cookies: "کوکیز",
        Popcorn: "پاپ کارن",
        "Nuts Mix": "میوے کا مکس",
        Crackers: "کریکرز",
        Shampoo: "شیمپو",
        "Soap Bar": "صابون",
        Toothpaste: "ٹوتھ پیسٹ",
        Lotion: "لوشن",
        Deodorant: "ڈیوڈورنٹ",
        Detergent: "ڈیٹرجنٹ",
        "Dish Soap": "برتن دھونے کا صابون",
        "Paper Towels": "کاغذی تولیے",
        "Trash Bags": "کوڑے کی تھیلیاں",
        Cleaner: "کلینر",
        "Organic Milk": "جاندار دودھ",
        "Fresh Bread": "تازہ روٹی",
        "Premium Eggs": "پریمیم انڈے",
        "Greek Yogurt": "یونانی دہی",
        "Orange Juice": "نارنگی کا رس",
        Avocados: "ایووکاڈو",
        "Amul Milk": "امول دودھ",
        "Aashirvaad Atta 5kg": "آشیرواڈ آٹا 5kg",
        "Maggi 70g": "میگی 70g",
        "Parle-G 800g": "پارلے-جی 800g"
    },
    nepali: {
        "Red Apple": "रातो स्याउ",
        Banana: "केरा",
        Orange: "सुन्तला",
        Mango: "आमा",
        Grapes: "अंगूर",
        Tomato: "टमाटर",
        Potato: "आलु",
        Onion: "प्याज",
        Carrot: "गाजर",
        Spinach: "पालक",
        "Milk 1L": "दूध 1L",
        Bread: "रोटी",
        "Eggs 12pc": "अंडा 12pc",
        Butter: "माखन",
        Cheese: "छीज",
        Chips: "चिप्स",
        Cookies: "कुकीज",
        Popcorn: "पप कर्न",
        "Nuts Mix": "मिक्स नट्स",
        Crackers: "क्र्याकर",
        Shampoo: "शैम्पु",
        "Soap Bar": "साबुन",
        Toothpaste: "दाँत मलहम",
        Lotion: "लोसन",
        Deodorant: "डिओडोरेन्ट",
        Detergent: "डिटर्जेन्ट",
        "Dish Soap": "भाँडो धुने साबुन",
        "Paper Towels": "कागजी तौलिया",
        "Trash Bags": "फोहर थैली",
        Cleaner: "क्लिनर",
        "Organic Milk": "जैविक दूध",
        "Fresh Bread": "ताजा रोटी",
        "Premium Eggs": "प्रिमियम अंडा",
        "Greek Yogurt": "ग्रिक दही",
        "Orange Juice": "सुन्तलाको रस",
        Avocados: "एभोकाडो",
        "Amul Milk": "अमूल दूध",
        "Aashirvaad Atta 5kg": "आशीर्वाद आटा 5kg",
        "Maggi 70g": "मैगी 70g",
        "Parle-G 800g": "पार्ले-जी 800g"
    },
    sinhala: {
        "Red Apple": "රතු ඇපල්",
        Banana: "කෙසෙල්",
        Orange: "තැඩි",
        Mango: "ඇට",
        Grapes: "ද්‍රාක්ෂා",
        Tomato: "තක්කාලි",
        Potato: "අර්කඩු",
        Onion: "නිadvent",
        Carrot: "ගැජරය",
        Spinach: "පාලක්",
        "Milk 1L": "කිරි 1L",
        Bread: "පාන්",
        "Eggs 12pc": "බිත්තර 12pc",
        Butter: "බටර්",
        Cheese: "චීස්",
        Chips: "චිප්ස්",
        Cookies: "කුකීස්",
        Popcorn: "පොප්කෝර්න්",
        "Nuts Mix": "견과류 මිශ්‍රණ",
        Crackers: "ක්‍රැකර්",
        Shampoo: "ෂ්‍යාම්පු",
        "Soap Bar": "සබන්",
        Toothpaste: "දන්තමය",
        Lotion: "ලෝෂන්",
        Deodorant: "ඩිඕඩරන්ට්",
        Detergent: "ඩිටර්ජන්ට්",
        "Dish Soap": "පාත්‍රවල සබන්",
        "Paper Towels": "කඩදාසි තුවාල",
        "Trash Bags": "කුණු බෙග්",
        Cleaner: "පරිෂ්කාරක",
        "Organic Milk": "ඉතින් කිරි",
        "Fresh Bread": "එතුඩු පාන්",
        "Premium Eggs": "ප්‍රිමියම් බිත්තර",
        "Greek Yogurt": "ග්‍රීක යෝගර්ට්",
        "Orange Juice": "තැඩි යුෂ",
        Avocados: "එවොකාඩෝ",
        "Amul Milk": "අමූල් කිරි",
        "Aashirvaad Atta 5kg": "ආශීර්වාද් ආටා 5kg",
        "Maggi 70g": "මැගි 70g",
        "Parle-G 800g": "පාර්ලේ-ජි 800g"
    },
    arabic: {
        "Red Apple": "تفاحة حمراء",
        Banana: "موز",
        Orange: "برتقال",
        Mango: "مانجو",
        Grapes: "عنب",
        Tomato: "طماطم",
        Potato: "بطاطا",
        Onion: "بصل",
        Carrot: "جزر",
        Spinach: "سبانخ",
        "Milk 1L": "حليب 1L",
        Bread: "خبز",
        "Eggs 12pc": "بيض 12pc",
        Butter: "زبدة",
        Cheese: "جبن",
        Chips: "رقائق",
        Cookies: "كعك",
        Popcorn: "فشار",
        "Nuts Mix": "مكسرات مختلطة",
        Crackers: "مملحات",
        Shampoo: "شامبو",
        "Soap Bar": "صابون",
        Toothpaste: "معجون أسنان",
        Lotion: "لوشن",
        Deodorant: "مزيل رائحة",
        Detergent: "منظف",
        "Dish Soap": "صابون الأطباق",
        "Paper Towels": "مناديل ورقية",
        "Trash Bags": "أكياس القمامة",
        Cleaner: "منظف",
        "Organic Milk": "حليب عضوي",
        "Fresh Bread": "خبز طازج",
        "Premium Eggs": "بيض فاخر",
        "Greek Yogurt": "زبادي يوناني",
        "Orange Juice": "عصير برتقال",
        Avocados: "أفوكادو",
        "Amul Milk": "حليب أمول",
        "Aashirvaad Atta 5kg": "عاشرفاد عطا 5kg",
        "Maggi 70g": "ماجي 70g",
        "Parle-G 800g": "بارلي-جي 800g"
    }
};
const translations = {
    english: baseTranslations,
    hindi: {
        appName: "SuperMartGPT",
        searchProducts: "उत्पाद खोजें...",
        categories: "श्रेणियाँ",
        fruits: "फल",
        vegetables: "सब्जियाँ",
        dailyEssentials: "दैनिक आवश्यकताएं",
        snacks: "नाश्ता",
        personalCare: "व्यक्तिगत देखभाल",
        household: "घरेलू",
        language: "भाषा",
        typeMessage: "अपना संदेश टाइप करें...",
        send: "भेजें",
        askAboutThis: "SuperMartGPT से इस बारे में पूछें",
        noResults: "कोई उत्पाद नहीं मिला",
        searching: "खोज रहे हैं...",
        welcome: "नमस्ते! मैं SuperMartGPT हूँ। मैं आपकी आज कैसे मदद कर सकता हूँ?",
        menu: "मेनू",
        popularProducts: "लोकप्रिय उत्पाद",
        offers: "विशेष ऑफर",
        listening: "सुन रहे हैं...",
        translatedFrom: "अनुवादित",
        demoMessage: "आप मुझसे उत्पादों के बारे में पूछ सकते हैं, कीमतों की तुलना कर सकते हैं, सौदे खोज सकते हैं, या सिफारिशें प्राप्त कर सकते हैं। फलों, सब्जियों, या दैनिक आवश्यकताओं के बारे में पूछने का प्रयास करें!",
        relatedProducts: "संबंधित उत्पाद जो आपको पसंद हो सकते हैं",
        inputPlaceholder: "उत्पादों, कीमतों या सौदों के बारे में पूछें...",
        sidebarFooterText: "शुरुआत करने के लिए उत्पादों के लिए खोजें या एक श्रेणी चुनें",
        cart: "शॉपिंग कार्ट",
        bestsellers: "आपके क्षेत्र में सर्वश्रेष्ठ विक्रेता",
        addToCart: "कार्ट में जोड़ें",
        placeOrder: "ऑर्डर करें",
        orderPlaced: "ऑर्डर सफल!",
        orderId: "ऑर्डर आईडी",
        orderConfirmation: "आपके ऑर्डर के लिए धन्यवाद!",
        cartEmpty: "आपकी कार्ट खाली है",
        total: "कुल"
    },
    marathi: {
        appName: "SuperMartGPT",
        searchProducts: "उत्पाद शोधा...",
        categories: "वर्ग",
        fruits: "फळे",
        vegetables: "भाजीपाला",
        dailyEssentials: "दैनिक गरजा",
        snacks: "नाश्ता",
        personalCare: "व्यक्तिगत देखभाल",
        household: "घरगुती",
        language: "भाषा",
        typeMessage: "आपले संदेश टाइप करा...",
        send: "पाठवा",
        askAboutThis: "SuperMartGPT ला याबद्दल विचारा",
        noResults: "कोणतेही उत्पाद सापडले नाहीत",
        searching: "शोध मध्ये...",
        welcome: "नमस्ते! मी SuperMartGPT आहे. आज मी तुम्हाला कसे मदत करू शकतो?",
        menu: "मेनू",
        popularProducts: "लोकप्रिय उत्पाद",
        offers: "विशेष ऑफर",
        listening: "ऐकत आहे...",
        translatedFrom: "अनुवादित",
        demoMessage: "आप मुझसे उत्पादों के बारे में पूछ सकते हैं, कीमतों की तुलना कर सकते हैं, सौदे खोज सकते हैं, किंवा सिफारिशें प्राप्त कर सकते हैं।",
        relatedProducts: "संबंधित उत्पाद जो आपको पसंद हो सकते हैं",
        inputPlaceholder: "उत्पादों, कीमतों किंवा ऑफर बद्दल विचारा...",
        sidebarFooterText: "सुरुवात करण्यासाठी उत्पादनांचे शोध घ्या किंवा श्रेणी निवडा",
        cart: "शॉपिंग कार्ट",
        bestsellers: "तुमच्या क्षेत्रातील बेस्टसेलर",
        addToCart: "कार्टमध्ये जोडा",
        placeOrder: "ऑर्डर द्या",
        orderPlaced: "ऑर्डर यशस्वी!",
        orderId: "ऑर्डर आयडी",
        orderConfirmation: "तुमच्या ऑर्डरबद्दल धन्यवाद!",
        cartEmpty: "तुमची कार्ट रिकामी आहे",
        total: "एकूण"
    },
    bengali: {
        appName: "SuperMartGPT",
        searchProducts: "পণ্য অনুসন্ধান করুন...",
        categories: "বিভাগ",
        fruits: "ফল",
        vegetables: "সবজি",
        dailyEssentials: "দৈনন্দিন প্রয়োজনীয়তা",
        snacks: "জলখাবার",
        personalCare: "ব্যক্তিগত যত্ন",
        household: "পরিবার",
        language: "ভাষা",
        typeMessage: "আপনার বার্তা টাইপ করুন...",
        send: "পাঠান",
        askAboutThis: "SuperMartGPT এর কাছে এই সম্পর্কে জিজ্ঞাসা করুন",
        noResults: "কোনো পণ্য পাওয়া যায়নি",
        searching: "অনুসন্ধান করছি...",
        welcome: "হ্যালো! আমি SuperMartGPT। আজ আমি আপনাকে কীভাবে সাহায্য করতে পারি?",
        menu: "মেনু",
        popularProducts: "জনপ্রিয় পণ্য",
        offers: "বিশেষ অফার",
        listening: "শুনছি...",
        translatedFrom: "অনুবাদ থেকে",
        demoMessage: "আপনি আমাকে পণ্য সম্পর্কে জিজ্ঞাসা করতে পারেন, মূল্য তুলনা করতে পারেন, ডিল খুঁজে পেতে পারেন বা সুপারিশ পেতে পারেন।",
        relatedProducts: "সম্পর্কিত পণ্য যা আপনি পছন্দ করতে পারেন",
        inputPlaceholder: "পণ্য, মূল্য বা অফার সম্পর্কে জিজ্ঞাসা করুন...",
        sidebarFooterText: "শুরু করতে পণ্য অনুসন্ধান করুন বা একটি বিভাগ নির্বাচন করুন",
        cart: "শপিং কার্ট",
        bestsellers: "আপনার এলাকায় বেস্টসেলার",
        addToCart: "কার্টে যোগ করুন",
        placeOrder: "অর্ডার দিন",
        orderPlaced: "অর্ডার সফল!",
        orderId: "অর্ডার আইডি",
        orderConfirmation: "আপনার অর্ডারের জন্য ধন্যবাদ!",
        cartEmpty: "আপনার কার্ট খালি",
        total: "মোট"
    },
    telugu: {
        appName: "SuperMartGPT",
        searchProducts: "ఉత్పత్తులను శోధించండి...",
        categories: "వర్గాలు",
        fruits: "ఫలాలు",
        vegetables: "కూరలు",
        dailyEssentials: "రోజువారీ అవసరాలు",
        snacks: "చిరుతిండులు",
        personalCare: "వ్యక్తిగత సంరక్షణ",
        household: "గృహస్థ",
        language: "భాష",
        typeMessage: "మీ సందేశం టైప్ చేయండి...",
        send: "పంపండి",
        askAboutThis: "SuperMartGPT కి దీని గురించి అడగండి",
        noResults: "ఉత్పత్తులు కనుగొనబడలేదు",
        searching: "వెతుక్కుంటున్నది...",
        welcome: "హలో! నేను SuperMartGPT. ఈ రోజు నేను మీకు ఎలా సహాయం చేయగలను?",
        menu: "మెను",
        popularProducts: "జనప్రియ ఉత్పత్తులు",
        offers: "ప్రత్యేక ఆఫర్‌లు",
        listening: "వింటున్నది...",
        translatedFrom: "నుండి అనువదించబడింది",
        demoMessage: "మీరు ఉత్పత్తుల గురించి నన్ను అడగవచ్చు, ధరలను పోల్చవచ్చు, డీల్‌లను కనుగొనవచ్చు లేదా సిఫారసులను పొందవచ్చు.",
        relatedProducts: "మీకు ఇష్టమైన సంబంధిత ఉత్పత్తులు",
        inputPlaceholder: "ఉత్పత్తులు, ధరలు లేదా సలహాల గురించి అడగండి...",
        sidebarFooterText: "ప్రారంభించడానికి ఉత్పత్తులను శోధించండి లేదా వర్గాన్ని ఎంచుకోండి",
        cart: "షాపింగ్ కార్ట్",
        bestsellers: "మీ ప్రాంతంలో బెస్ట్‌సెల్లర్లు",
        addToCart: "కార్ట్‌కు జోడించండి",
        placeOrder: "ఆర్డర్ ఇవ్వండి",
        orderPlaced: "ఆర్డర్ విజయవంతం!",
        orderId: "ఆర్డర్ ఐడి",
        orderConfirmation: "మీ ఆర్డర్‌కు ధన్యవాదాలు!",
        cartEmpty: "మీ కార్ట్ ఖాళీగా ఉంది",
        total: "మొత్తం"
    },
    tamil: {
        appName: "SuperMartGPT",
        searchProducts: "பொருட்களைத் தேடுங்கள்...",
        categories: "வகைகள்",
        fruits: "பழங்கள்",
        vegetables: "காய்கறிகள்",
        dailyEssentials: "தினசரி அத்தியாவசியங்கள்",
        snacks: "சிற்றுண்டி",
        personalCare: "ব্যক্তিগত যত்ன",
        household: "வீட்டு உபயோகங்கள்",
        language: "மொழி",
        typeMessage: "உங்கள் செய்தியை தட்டச்சு செய்யுங்கள்...",
        send: "அனுப்பு",
        askAboutThis: "SuperMartGPT இடம் இது பற்றி கேளுங்கள்",
        noResults: "பொருட்கள் எதுவும் கிடைக்கவில்லை",
        searching: "தேடுகிறது...",
        welcome: "வணக்கம்! நான் SuperMartGPT. இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?",
        menu: "மெனு",
        popularProducts: "பிரபலமான பொருட்கள்",
        offers: "சிறப்பு சலுகைகள்",
        listening: "கேட்டுக்கொண்டிருக்கிறது...",
        translatedFrom: "இலிருந்து மொழிபெயர்க்கப்பட்டது",
        demoMessage: "நீங்கள் பொருட்களைப் பற்றி என்னிடம் கேட்கலாம், விலைகளை ஒப்பிடலாம், டீல்கள் கண்டுபிடிக்கலாம் அல்லது சிஃபாரிசுகளைப் பெறலாம்.",
        relatedProducts: "உங்களுக்கு பிடிக்கக்கூடிய தொடர்புடைய பொருட்கள்",
        inputPlaceholder: "பொருட்கள், விலைகள் அல்லது சலுகைகள் பற்றி கேளுங்கள்...",
        sidebarFooterText: "தொடங்க பொருட்களைத் தேடுங்கள் அல்லது வகைப்பைத் தேர்ந்தெடுங்கள்",
        cart: "ஷாப்பிங் கார்ட்",
        bestsellers: "உங்கள் பகுதியில் பெஸ்ட்செல்லர்கள்",
        addToCart: "கார்ட்டில் சேர்",
        placeOrder: "ஆர்டர் செய்",
        orderPlaced: "ஆர்டர் வெற்றி!",
        orderId: "ஆர்டர் ஐடி",
        orderConfirmation: "உங்கள் ஆர்டருக்கு நன்றி!",
        cartEmpty: "உங்கள் கார்ட் காலியாக உள்ளது",
        total: "மொத்தம்"
    },
    gujarati: {
        appName: "SuperMartGPT",
        searchProducts: "ઉત્પાદનો શોધો...",
        categories: "શ્રેણીઓ",
        fruits: "ફળો",
        vegetables: "શાકભાજી",
        dailyEssentials: "રોજિંદા જરૂરિયાતો",
        snacks: "નાસ્તો",
        personalCare: "વ્યક્તિગત સંભાળ",
        household: "ઘરગથ્થુ",
        language: "ભાષા",
        typeMessage: "તમારો સંદેશ ટાઇપ કરો...",
        send: "મોકલો",
        askAboutThis: "SuperMartGPT થી આ વિશે પૂછો",
        noResults: "કોઇ ઉત્પાદનો મળ્યા નહીં",
        searching: "શોધી રહ્યા છીએ...",
        welcome: "હેલો! હું SuperMartGPT છું. આજે હું તમને કેવી રીતે મદદ કરી શકું?",
        menu: "મેનુ",
        popularProducts: "લોકપ્રિય ઉત્પાદનો",
        offers: "વિશેષ ઑફર",
        listening: "સાંભળી રહ્યા છીએ...",
        translatedFrom: "માંથી અનુવાદિત",
        demoMessage: "તમે મને ઉત્પાદનો વિશે પૂછી શકો છો, કિંમતો તુલના કરી શકો છો, ડીલ્સ શોધી શકો છો અથવા ભલામણો મેળવી શકો છો.",
        relatedProducts: "સંબંધિત ઉત્પાદનો તમને ગમશે",
        inputPlaceholder: "ઉત્પાદનો, કિંમતો અથવા ઓફર વિશે પૂછો...",
        sidebarFooterText: "શરૂ કરવા માટે ઉત્પાદનો શોધો અથવા શ્રેણી પસંદ કરો",
        cart: "શોપિંગ કાર્ટ",
        bestsellers: "તમારા વિસ્તારમાં બેસ્ટસેલર",
        addToCart: "કાર્ટમાં ઉમેરો",
        placeOrder: "ઓર્ડર આપો",
        orderPlaced: "ઓર્ડર સફળ!",
        orderId: "ઓર્ડર આઈડી",
        orderConfirmation: "તમારા ઓર્ડર માટે આભાર!",
        cartEmpty: "તમારી કાર્ટ ખાલી છે",
        total: "કુલ"
    },
    kannada: {
        appName: "SuperMartGPT",
        searchProducts: "ಉತ್ಪನ್ನಗಳನ್ನು ಹುಡುಕಿ...",
        categories: "ವರ್ಗಗಳು",
        fruits: "ತೆರೆನೆಗಳು",
        vegetables: "ತರಕಾರಿ",
        dailyEssentials: "ದೈನಂದಿನ ಅಗತ್ಯತೆಗಳು",
        snacks: "ತಿಂಡಿ",
        personalCare: "ವ್ಯಕ್ತಿಗತ ಆರೈಕೆ",
        household: "ಮನೆಯ ಕೆಲಸ",
        language: "ಭಾಷೆ",
        typeMessage: "ನಿಮ್ಮ ಸಂದೇಶವನ್ನು ಟೈಪ್ ಮಾಡಿ...",
        send: "ಕಳುಹಿಸಿ",
        askAboutThis: "SuperMartGPT ಗೆ ಇದರ ಬಗ್ಗೆ ಕೇಳಿ",
        noResults: "ಉತ್ಪನ್ನಗಳು ಕಂಡುಬಂದಿಲ್ಲ",
        searching: "ಹುಡುಕುತ್ತಿದೆ...",
        welcome: "ನಮಸ್ಕಾರ! ನಾನು SuperMartGPT. ಇಂದು ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?",
        menu: "ಮೆನು",
        popularProducts: "ಜನಪ್ರಿಯ ಉತ್ಪನ್ನಗಳು",
        offers: "ವಿಶೇಷ ಆಫರ್‌ಗಳು",
        listening: "ಕೇಳುತ್ತಿದೆ...",
        translatedFrom: "ನಿಂದ ಅನುವಾದಿತ",
        demoMessage: "ನೀವು ಉತ್ಪನ್ನಗಳ ಬಗ್ಗೆ ನನ್ನನ್ನು ಕೇಳಬಹುದು, ಬೆಲೆಗಳನ್ನು ಹೋಲಿಸಬಹುದು, ಒಪ್ಪಂದಗಳನ್ನು ಕಂಡುಹಿಡಿಯಬಹುದು ಅಥವಾ ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯಬಹುದು.",
        relatedProducts: "ಸಂಬಂಧಿತ ಉತ್ಪನ್ನಗಳು ನೀವು ಇಷ್ಟಪಡುತ್ತೀರಿ",
        inputPlaceholder: "ಉತ್ಪನ್ನಗಳು, ಬೆಲೆಗಳು ಅಥವಾ ಆಫರ್‌ಗಳ ಬಗ್ಗೆ ಕೇಳಿ...",
        sidebarFooterText: "ಪ್ರಾರಂಭಿಸಲು ಉತ್ಪನ್ನಗಳನ್ನು ಹುಡುಕಿ ಅಥವಾ ವರ್ಗವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ",
        cart: "ಶಾಪಿಂಗ್ ಕಾರ್ಟ್",
        bestsellers: "ನಿಮ್ಮ ಪ್ರದೇಶದಲ್ಲಿ ಬೆಸ್ಟ್‌ಸೆಲ್ಲರ್ಸ್",
        addToCart: "ಕಾರ್ಟ್‌ಗೆ ಸೇರಿಸಿ",
        placeOrder: "ಆರ್ಡರ್ ಮಾಡಿ",
        orderPlaced: "ಆರ್ಡರ್ ಯಶಸ್ವಿ!",
        orderId: "ಆರ್ಡರ್ ಐಡಿ",
        orderConfirmation: "ನಿಮ್ಮ ಆರ್ಡರ್‌ಗೆ ಧನ್ಯವಾದ!",
        cartEmpty: "ನಿಮ್ಮ ಕಾರ್ಟ್ ಖಾಲಿಯಾಗಿದೆ",
        total: "ಒಟ್ಟು"
    },
    malayalam: {
        appName: "SuperMartGPT",
        searchProducts: "ഉൽപ്പന്നങ്ങൾ തിരയുക...",
        categories: "വിഭാഗങ്ങൾ",
        fruits: "ഫലങ്ങൾ",
        vegetables: "പച്ചക്കറികൾ",
        dailyEssentials: "ദൈനന്ദിന ആവശ്യങ്ങൾ",
        snacks: "പലഹാരം",
        personalCare: "വ്യക്തിഗത പരിചരണം",
        household: "വീട്ടിലെ കാര്യങ്ങൾ",
        language: "ഭാഷ",
        typeMessage: "നിങ്ങളുടെ സന്ദേശം ടൈപ്പ് ചെയ്യുക...",
        send: "അയയ്ക്കുക",
        askAboutThis: "SuperMartGPT ൽ നിന്ന് ഇതിനെ കുറിച്ച് ചോദിക്കുക",
        noResults: "പൊരുത്തപ്പെടുന്ന ഉൽപ്പന്നങ്ങൾ കണ്ടെത്തിയില്ല",
        searching: "തിരയുന്നു...",
        welcome: "ഹലോ! ഞാൻ SuperMartGPT ആണ്. ഇന്ന് ഞാൻ നിങ്ങളെ എങ്ങനെ സഹായിക്കാം?",
        menu: "മെനു",
        popularProducts: "ജനപ്രിയ ഉൽപ്പന്നങ്ങൾ",
        offers: "പ്രത്യേക ഓഫറുകൾ",
        listening: "കേൾക്കുന്നു...",
        translatedFrom: "നിന്നും വിവർത്തനം ചെയ്യപ്പെട്ടു",
        demoMessage: "നിങ്ങൾ ഉൽപ്പന്നങ്ങളെ കുറിച്ച് എന്നോട് ചോദിക്കാം, വിലകൾ താരതമ്യം ചെയ്യാം, ഡീലുകൾ കണ്ടെത്താം അല്ലെങ്കിൽ ശുപാർശകൾ ലഭിക്കാം.",
        relatedProducts: "സംബന്ധിത ഉൽപ്പന്നങ്ങൾ നിങ്ങൾ ഇഷ്ടപ്പെടുകയാണ്",
        inputPlaceholder: "ഉൽപ്പന്നങ്ങൾ, വിലകൾ അല്ലെങ്കിൽ ഓഫറുകളെക്കുറിച്ച് ചോദിക്കുക...",
        sidebarFooterText: "ആരംഭിക്കാൻ ഉൽപ്പന്നങ്ങൾ തിരയുക അല്ലെങ്കിൽ വിഭാഗം തിരഞ്ഞെടുക്കുക",
        cart: "ഷോപ്പിംഗ് കാർട്ട്",
        bestsellers: "നിങ്ങളുടെ പ്രദേശത്തെ ബെസ്റ്റ്സെല്ലർ",
        addToCart: "കാർട്ടിൽ ചേർക്കുക",
        placeOrder: "ഓർഡർ ചെയ്യുക",
        orderPlaced: "ഓർഡർ വിജയകരം!",
        orderId: "ഓർഡർ ഐഡി",
        orderConfirmation: "നിങ്ങളുടെ ഓർഡറിന് നന്ദി!",
        cartEmpty: "നിങ്ങളുടെ കാർട്ട് ശൂന്യമാണ്",
        total: "ആകെ"
    },
    punjabi: {
        appName: "SuperMartGPT",
        searchProducts: "ਉਤਪਾਦ ਖੋਜੋ...",
        categories: "ਸ਼੍ਰੇਣੀਆਂ",
        fruits: "ਫਲ",
        vegetables: "ਸਬਜ਼ੀ",
        dailyEssentials: "ਰੋਜ਼ਾਨਾ ਦੀਆਂ ਗਤੀਵਿਧੀਆਂ",
        snacks: "ਸਨੈਕਸ",
        personalCare: "ਵਿਅਕਤੀਗਤ ਦੇਖਭਾਲ",
        household: "ਘਰੇਲੂ",
        language: "ਭਾਸ਼ਾ",
        typeMessage: "ਆਪਣਾ ਸੰਦੇਸ਼ ਟਾਈਪ ਕਰੋ...",
        send: "ਭੇਜੋ",
        askAboutThis: "SuperMartGPT ਤੋਂ ਇਸ ਬਾਰੇ ਪੁੱਛੋ",
        noResults: "ਕੋਈ ਉਤਪਾਦ ਨਹੀਂ ਮਿਲਿਆ",
        searching: "ਖੋਜ ਰਿਹਾ ਹੈ...",
        welcome: "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ SuperMartGPT ਹਾਂ। ਅੱਜ ਮੈਂ ਤੁਹਾਨੂੰ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ؟",
        menu: "ਮੀਨੂ",
        popularProducts: "ਪ੍ਰਸਿੱਧ ਉਤਪਾਦ",
        offers: "ਵਿਸ਼ੇਸ਼ ਆਫਰਾਂ",
        listening: "ਸੁਣ ਰਿਹਾ ਹੈ...",
        translatedFrom: "ਤੋਂ ਅਨੁਵਾਦ ਕੀਤਾ ਗਿਆ",
        demoMessage: "ਤੁਸੀਂ ਮੈਨੂੰ ਉਤਪਾਦਾਂ ਬਾਰੇ ਪੁੱਛ ਸਕਦੇ ਹੋ, ਕੀਮਤਾਂ ਦਾ ਤੁਲਨਾ ਕਰ ਸਕਦੇ ਹੋ, ਡੀਲ ਲੱਭ ਸਕਦੇ ਹੋ ਜਾਂ ਸਿਫਾਰਸ਼ਾਂ ਲੈ ਸਕਦੇ ਹੋ।",
        relatedProducts: "ਸਬੰਧਿਤ ਉਤਪਾਦ ਜੋ ਤੁਹਾਨੂੰ ਪਸੰਦ ਹੋ ਸਕਦੇ ਹਨ",
        inputPlaceholder: "ਉਤਪਾਦਾਂ, ਕੀਮਤਾਂ ਜਾਂ ਆਫਰਾਂ ਬਾਰੇ ਪੁੱਛੋ...",
        sidebarFooterText: "ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਉਤਪਾਦ ਖੋਜੋ ਜਾਂ ਸ਼੍ਰੇਣੀ ਚੁਣੋ",
        cart: "ਸ਼ਾਪਿੰਗ ਕਾਰਟ",
        bestsellers: "ਤੁਹਾਡੇ ਖੇਤਰ ਵਿੱਚ ਬੈਸਟਸੈਲਰ",
        addToCart: "ਕਾਰਟ ਵਿੱਚ ਪਾਓ",
        placeOrder: "ਆਰਡਰ ਕਰੋ",
        orderPlaced: "ਆਰਡਰ ਸਫ਼ਲ!",
        orderId: "ਆਰਡਰ ਆਈਡੀ",
        orderConfirmation: "ਤੁਹਾਡੇ ਆਰਡਰ ਲਈ ਧੰਨਵਾਦ!",
        cartEmpty: "ਤੁਹਾਡੀ ਕਾਰਟ ਖਾਲੀ ਹੈ",
        total: "ਕੁੱਲ"
    },
    odia: {
        appName: "SuperMartGPT",
        searchProducts: "ଉତ୍ପାଦ ଖୋଜନ୍ତୁ...",
        categories: "ବର୍ଗ",
        fruits: "ଫଳ",
        vegetables: "ପନିପରିବା",
        dailyEssentials: "ଦୈନିକ ଅବଶ୍ୟକତା",
        snacks: "ସ୍ନାକ୍ସ",
        personalCare: "ବ୍ୟକ୍ତିଗତ ଯତ୍ନ",
        household: "ଘରୋଇ",
        language: "ଭାଷା",
        typeMessage: "ଆପଣାର ସନ୍ଦେଶ ଟାଇପ୍ କରନ୍ତୁ...",
        send: "ପଠାନ୍ତୁ",
        askAboutThis: "SuperMartGPT କୁ ଏହା ବିଷୟରେ ପଚାରନ୍ତୁ",
        noResults: "କୌଣସି ଉତ୍ପାଦ ମିଳିଲା ନାହିଁ",
        searching: "ଖୋଜୁଛି...",
        welcome: "ନମସ୍କାର! ମୁଁ SuperMartGPT। ଆଜ ମୁଁ ଆପଣାକୁ କିପରି ସାହାଯ୍ୟ କରିପାରିବି?",
        menu: "ମେନୁ",
        popularProducts: "ଲୋକପ୍ରିୟ ଉତ୍ପାଦ",
        offers: "ବିଶେଷ ଅଫର",
        listening: "ଶୁଣୁଛି...",
        translatedFrom: "ରୁ ଅନୁବାଦିତ",
        demoMessage: "ଆପଣ ମୋତେ ଉତ୍ପାଦ ବିଷୟରେ ପଚାରିପାରେ, ମୂଲ୍ୟ ତୁଳନା କରିପାରେ, ଡିଲ୍ ଖୋଜିପାରେ ବା ସୁପାରିଶ ପାଇପାରେ।",
        relatedProducts: "ସଂପୃକ୍ତ ଉତ୍ପାଦ ଯାହାକୁ ଆପଣ ପସନ୍ଦ କରିପାରେ",
        inputPlaceholder: "ଉତ୍ପାଦ, ମୂଲ୍ୟ କିମ୍ବା ଅଫର ବିଷୟରେ ପଚାରନ୍ତୁ...",
        sidebarFooterText: "ଆରମ୍ଭ କରିବାକୁ ଉତ୍ପାଦ ଖୋଜନ୍ତୁ ବା ଏକ ବର୍ଗ ବାଛନ୍ତୁ",
        cart: "ସପିଂ କାର୍ଟ",
        bestsellers: "ଆପଣଙ୍କ ଅଞ୍ଚଳରେ ବେଷ୍ଟସେଲର",
        addToCart: "କାର୍ଟରେ ଯୋଡ଼ନ୍ତୁ",
        placeOrder: "ଅର୍ଡର କରନ୍ତୁ",
        orderPlaced: "ଅର୍ଡର ସଫଳ!",
        orderId: "ଅର୍ଡର ଆଇଡି",
        orderConfirmation: "ଆପଣଙ୍କ ଅର୍ଡର ପାଇଁ ଧନ୍ୟବାଦ!",
        cartEmpty: "ଆପଣଙ୍କ କାର୍ଟ ଖାଲି",
        total: "ମୋଟ"
    },
    urdu: {
        appName: "SuperMartGPT",
        searchProducts: "مصنوعات تلاش کریں...",
        categories: "زمرہ جات",
        fruits: "پھل",
        vegetables: "سبزیاں",
        dailyEssentials: "روزمرہ کی ضروریات",
        snacks: "اسنیکس",
        personalCare: "ذاتی دیکھ بھال",
        household: "گھریلو",
        language: "زبان",
        typeMessage: "اپنا پیغام ٹائپ کریں...",
        send: "بھیجیں",
        askAboutThis: "SuperMartGPT سے اس کے بارے میں پوچھیں",
        noResults: "کوئی مصنوعات نہیں ملے",
        searching: "تلاش کر رہے ہیں...",
        welcome: "السلام علیکم! میں SuperMartGPT ہوں۔ آج میں آپ کی مدد کیسے کر سکتا ہوں؟",
        menu: "مینو",
        popularProducts: "مقبول مصنوعات",
        offers: "خصوصی آفرز",
        listening: "سن رہے ہیں...",
        translatedFrom: "سے ترجمہ کیا گیا",
        demoMessage: "آپ مجھ سے مصنوعات کے بارے میں پوچھ سکتے ہیں، قیمتوں کا موازنہ کر سکتے ہیں، ڈیلز تلاش کر سکتے ہیں یا سفارشات حاصل کر سکتے ہیں۔",
        relatedProducts: "متعلقہ مصنوعات جو آپ کو پسند ہو سکتے ہیں",
        inputPlaceholder: "مصنوعات، قیمتوں یا آفرز کے بارے میں پوچھیں...",
        sidebarFooterText: "شروع کرنے کے لیے مصنوعات تلاش کریں یا کوئی زمرہ منتخب کریں",
        cart: "شاپنگ کارٹ",
        bestsellers: "آپ کے علاقے میں بیسٹ سیلر",
        addToCart: "کارٹ میں ڈالیں",
        placeOrder: "آرڈر کریں",
        orderPlaced: "آرڈر کامیاب!",
        orderId: "آرڈر آئی ڈی",
        orderConfirmation: "آپ کے آرڈر کا شکریہ!",
        cartEmpty: "آپ کی کارٹ خالی ہے",
        total: "کل"
    },
    nepali: {
        appName: "SuperMartGPT",
        searchProducts: "उत्पाद खोजुहोस्...",
        categories: "श्रेणीहरू",
        fruits: "फलफूल",
        vegetables: "तरकारी",
        dailyEssentials: "दैनिक आवश्यकताहरू",
        snacks: "खाना",
        personalCare: "व्यक्तिगत देखभाल",
        household: "घरेलु",
        language: "भाषा",
        typeMessage: "आफ्नो सन्देश टाइप गर्नुहोस्...",
        send: "पठाउनुहोस्",
        askAboutThis: "SuperMartGPT सँग यो बारे सोध्नुहोस्",
        noResults: "कोई पणय मिलेन",
        searching: "खोज गरिरहेको छ...",
        welcome: "नमस्ते! मेरो नाम SuperMartGPT हो। आज मैले तपाईंलाई कसरी मदद गर्न सक्छु?",
        menu: "मेनु",
        popularProducts: "लोकप्रिय उत्पादहरू",
        offers: "विशेष अफरहरू",
        listening: "सुन्दै छु...",
        translatedFrom: "बाट अनुवाद गरिएको",
        demoMessage: "तपाईं मलाई उत्पादहरू बारे सोध्न सक्नुहुन्छ, मूल्य तुलना गर्न सक्नुहुन्छ, सम्झौताहरू खोज्न सक्नुहुन्छ वा सिफारिसहरू पा्न सक्नुहुन्छ।",
        relatedProducts: "सम्बन्धित उत्पाद तपाई पनि लाई रोच्न सक्छ",
        inputPlaceholder: "उत्पाद, मूल्य वा अफर बद्दल सोध्नुहोस्...",
        sidebarFooterText: "सुरु गर्न उत्पाद खोजुहोस् वा श्रेणी छान्नुहोस्",
        cart: "शपिङ कार्ट",
        bestsellers: "तपाईंको क्षेत्रमा बेस्टसेलर",
        addToCart: "कार्टमा थप्नुहोस्",
        placeOrder: "अर्डर गर्नुहोस्",
        orderPlaced: "अर्डर सफल!",
        orderId: "अर्डर आईडी",
        orderConfirmation: "तपाईंको अर्डरको लागि धन्यवाद!",
        cartEmpty: "तपाईंको कार्ट खाली छ",
        total: "जम्मा"
    },
    sinhala: {
        appName: "SuperMartGPT",
        searchProducts: "නිෂ්පාදනයන් සොයන්න...",
        categories: "ප්‍රවර්ග",
        fruits: "පලතුරු",
        vegetables: "එළවත්",
        dailyEssentials: "දෛනික අත්‍යාවශ්‍යතා",
        snacks: "කෑම",
        personalCare: "ব්যක୍තිගත සංභාණ්ඩ",
        household: "ගෙදර",
        language: "භාෂාව",
        typeMessage: "ඔබගේ පණිවිඩය ඇතුල් කරන්න...",
        send: "යවන්න",
        askAboutThis: "SuperMartGPT වෙතින් මෙ ගැන විමසන්න",
        noResults: "නිෂ්පාදන හමු නොවිණි",
        searching: "සොයමින් පවතී...",
        welcome: "ස්වාගතයි! මම SuperMartGPT ඉතුරු. අද ඔබට කෙසේ සහාය දිය හැකිද?",
        menu: "මෙනු",
        popularProducts: "ජනප්‍රිය නිෂ්පාදනයන්",
        offers: "විශේෂ ඉදිරිපත් කිරීම්",
        listening: "සවන් දෙමින් පවතී...",
        translatedFrom: "වලින් පරිවර්තනය කරන ලද",
        demoMessage: "ඔබට මට නිෂ්පාදන ගැන විමසිය හැක, මිල සසඳිය හැක, ඩීල සොයා ගත හැක හෝ නිර්දේශ ලබා ගත හැක.",
        relatedProducts: "ඔබට ගැලපෙන සබැඳි නිෂ්පාදනයන්",
        inputPlaceholder: "නිෂ්පාදනයන්, මිල හෝ ඉදිරිපත් කිරීම් ගැන විමසන්න...",
        sidebarFooterText: "ආරම්භ කිරීමට නිෂ්පාදන සොයන්න හෝ ප්‍රවර්ගය තෝරා ගන්න",
        cart: "සාප්පු කරත්තය",
        bestsellers: "ඔබේ ප්‍රදේශයේ හොඳම විකුණුම්කරුවන්",
        addToCart: "කරත්තයට එකතු කරන්න",
        placeOrder: "ඇණවුම් කරන්න",
        orderPlaced: "ඇණවුම සාර්ථකයි!",
        orderId: "ඇණවුම් අංකය",
        orderConfirmation: "ඔබගේ ඇණවුමට ස්තුතියි!",
        cartEmpty: "ඔබේ කරත්තය හිස්",
        total: "එකතුව"
    },
    arabic: {
        appName: "SuperMartGPT",
        searchProducts: "البحث عن المنتجات...",
        categories: "الفئات",
        fruits: "الفواكه",
        vegetables: "الخضروات",
        dailyEssentials: "الضروريات اليومية",
        snacks: "الوجبات الخفيفة",
        personalCare: "العناية الشخصية",
        household: "المنزل",
        language: "اللغة",
        typeMessage: "اكتب رسالتك...",
        send: "إرسال",
        askAboutThis: "اسأل SuperMartGPT عن هذا",
        noResults: "لم يتم العثور على منتجات",
        searching: "جاري البحث...",
        welcome: "مرحبا! أنا SuperMartGPT. كيف يمكنني مساعدتك اليوم؟",
        menu: "القائمة",
        popularProducts: "المنتجات الشهيرة",
        offers: "العروض الخاصة",
        listening: "جاري الاستماع...",
        translatedFrom: "مترجم من",
        demoMessage: "يمكنك أن تسأل عن المنتجات، مقارنة الأسعار، العثور على الصفقات أو الحصول على التوصيات.",
        relatedProducts: "المنتجات ذات الصلة التي قد تعجبك",
        inputPlaceholder: "اسأل عن المنتجات أو الأسعار أو العروض...",
        sidebarFooterText: "ابحث عن المنتجات أو اختر فئة للبدء",
        cart: "عربة التسوق",
        bestsellers: "الأكثر مبيعاً في منطقتك",
        addToCart: "أضف إلى السلة",
        placeOrder: "تأكيد الطلب",
        orderPlaced: "تم الطلب بنجاح!",
        orderId: "رقم الطلب",
        orderConfirmation: "شكراً لطلبك!",
        cartEmpty: "عربة التسوق فارغة",
        total: "المجموع"
    }
};
function t(key, language) {
    return translations[language]?.[key] || translations.english[key] || key;
}
function translateProductName(productName, language) {
    const productTranslations = productNames[language];
    return productTranslations?.[productName] || productNames.english[productName] || productName;
}
}),
"[project]/components/language-selector.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageSelector",
    ()=>LanguageSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/translations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function LanguageSelector({ currentLanguage, onLanguageChange, compact = false }) {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const currentLang = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["languages"].find((l)=>l.code === currentLanguage);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        ref: dropdownRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: `flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border/60 hover:border-primary/40 hover:shadow-[0_0_12px_rgba(34,197,94,0.15)] transition-all duration-200 ${compact ? "text-sm" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                        className: "w-4 h-4 text-primary"
                    }, void 0, false, {
                        fileName: "[project]/components/language-selector.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-medium",
                        children: currentLang?.nativeName
                    }, void 0, false, {
                        fileName: "[project]/components/language-selector.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: `w-4 h-4 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`
                    }, void 0, false, {
                        fileName: "[project]/components/language-selector.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/language-selector.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-full mt-2 right-0 glass-card rounded-2xl shadow-xl z-50 min-w-52 overflow-hidden animate-fade-in-up",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["languages"].map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            onLanguageChange(lang.code);
                            setIsOpen(false);
                        },
                        className: `w-full px-4 py-3 text-left hover:bg-accent/50 transition-all duration-150 flex items-center justify-between ${currentLanguage === lang.code ? "bg-primary/10 text-primary" : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: lang.nativeName
                            }, void 0, false, {
                                fileName: "[project]/components/language-selector.tsx",
                                lineNumber: 55,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-muted-foreground text-sm",
                                children: lang.name
                            }, void 0, false, {
                                fileName: "[project]/components/language-selector.tsx",
                                lineNumber: 56,
                                columnNumber: 15
                            }, this)
                        ]
                    }, lang.code, true, {
                        fileName: "[project]/components/language-selector.tsx",
                        lineNumber: 45,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/language-selector.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/language-selector.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCategories",
    ()=>getCategories,
    "placeOrder",
    ()=>placeOrder,
    "recommendProducts",
    ()=>recommendProducts,
    "searchProducts",
    ()=>searchProducts,
    "sendChatMessage",
    ()=>sendChatMessage
]);
const BASE_URL = "";
async function searchProducts(query, language = "english") {
    try {
        const res = await fetch(`/api/products/search`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                query,
                language
            })
        });
        if (!res.ok) return [];
        const data = await res.json();
        return data.success ? data.data?.products || [] : [];
    } catch (error) {
        console.error("Search failed:", error);
        return [];
    }
}
async function recommendProducts(context) {
    try {
        const res = await fetch(`/api/products/recommend`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                context
            })
        });
        if (!res.ok) return [];
        const data = await res.json();
        return data.success ? data.data?.products || [] : [];
    } catch (error) {
        console.error("Recommend failed:", error);
        return [];
    }
}
async function getCategories() {
    try {
        const res = await fetch(`/api/categories`);
        if (!res.ok) return [];
        const data = await res.json();
        return data.success ? data.data?.categories || [] : [];
    } catch (error) {
        console.error("Categories failed:", error);
        return [];
    }
}
// Language name to code mapping for API calls
const languageCodeMap = {
    english: "en-US",
    hindi: "hi-IN",
    marathi: "mr-IN",
    bengali: "bn-IN",
    telugu: "te-IN",
    tamil: "ta-IN",
    gujarati: "gu-IN",
    kannada: "kn-IN",
    malayalam: "ml-IN",
    punjabi: "pa-IN",
    odia: "or-IN",
    urdu: "ur-PK",
    nepali: "ne-NP",
    sinhala: "si-LK",
    arabic: "ar-SA"
};
async function sendChatMessage(message, language) {
    // Default fallback response
    const fallbackResponse = {
        success: false,
        reply: "Unable to reach the server. Please try again.",
        relatedProducts: []
    };
    // Convert language name to code
    const langCode = languageCodeMap[language.toLowerCase()] || language;
    try {
        const response = await fetch(`/api/chat`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message,
                language: langCode
            })
        });
        // Handle non-OK responses
        if (!response.ok) {
            const errorText = await response.text().catch(()=>"Unknown error");
            console.error(`Chat API error ${response.status}: ${errorText}`);
            return {
                success: false,
                reply: "Backend error. Please try again.",
                relatedProducts: []
            };
        }
        // Parse JSON response
        let data;
        try {
            data = await response.json();
        } catch (parseError) {
            console.error("Failed to parse chat response:", parseError);
            return {
                success: false,
                reply: "Received invalid response from server.",
                relatedProducts: []
            };
        }
        // Handle old API format (with data wrapper)
        if (data.data) {
            return {
                success: true,
                reply: data.data.reply || "No response received.",
                relatedProducts: Array.isArray(data.data.relatedProducts) ? data.data.relatedProducts : []
            };
        }
        // Handle new API format (direct response)
        return {
            success: data.success !== false,
            reply: data.reply || "No response received.",
            relatedProducts: Array.isArray(data.relatedProducts) ? data.relatedProducts : []
        };
    } catch (error) {
        console.error("sendChatMessage failed:", error);
        return fallbackResponse;
    }
}
async function placeOrder(userId) {
    try {
        const res = await fetch(`/api/orders/place`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId
            })
        });
        return await res.json();
    } catch (e) {
        console.error("Place order failed:", e);
        return {
            success: false,
            orderId: null
        };
    }
}
}),
"[project]/components/product-card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCard",
    ()=>ProductCard,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-ssr] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/translations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$cart$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/cart-context.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function ProductCard({ product, language, onAskAbout, translatedName, translatedDescription }) {
    const cartContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$cart$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartContext"]);
    const addToCart = cartContext?.addToCart || (()=>{});
    const displayName = translatedName || product.name || "Product";
    const displayDescription = translatedDescription || product.description || "";
    const priceValue = typeof product.price === "number" ? product.price : parseFloat(product.price?.toString() || "0");
    const handleAddToCart = ()=>{
        addToCart({
            id: String(product.id),
            name: displayName,
            price: priceValue
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "glass-card rounded-2xl p-4 hover:shadow-lg transition-all duration-200 animate-fade-in-up border border-border/40",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "font-semibold text-sm text-foreground line-clamp-2 leading-tight",
                        children: displayName
                    }, void 0, false, {
                        fileName: "[project]/components/product-card.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    displayDescription && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-muted-foreground line-clamp-3 leading-relaxed",
                        children: displayDescription
                    }, void 0, false, {
                        fileName: "[project]/components/product-card.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-primary font-bold text-lg",
                        children: [
                            "₹",
                            priceValue.toFixed(2)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/product-card.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    product.category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center px-2 py-0.5 text-xs text-muted-foreground bg-muted/50 rounded-full w-fit",
                        children: product.category
                    }, void 0, false, {
                        fileName: "[project]/components/product-card.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/product-card.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onAskAbout,
                        className: "flex-1 flex items-center justify-center gap-2 px-3 py-2.5 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/components/product-card.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("askAboutThis", language)
                            }, void 0, false, {
                                fileName: "[project]/components/product-card.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sm:hidden",
                                children: "Ask"
                            }, void 0, false, {
                                fileName: "[project]/components/product-card.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/product-card.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleAddToCart,
                        className: "flex-1 flex items-center justify-center gap-2 px-3 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg text-sm font-medium hover:from-green-600 hover:to-green-700 transition-all shadow-sm hover:shadow-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/components/product-card.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("addToCart", language)
                            }, void 0, false, {
                                fileName: "[project]/components/product-card.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sm:hidden",
                                children: "Add"
                            }, void 0, false, {
                                fileName: "[project]/components/product-card.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/product-card.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/product-card.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/product-card.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = ProductCard;
}),
"[project]/lib/category-products.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "categoryProducts",
    ()=>categoryProducts,
    "popularProducts",
    ()=>popularProducts
]);
const categoryProducts = {
    Fruits: [
        {
            id: "f1",
            name: "Red Apple",
            price: 249
        },
        {
            id: "f2",
            name: "Banana",
            price: 49
        },
        {
            id: "f3",
            name: "Orange",
            price: 99
        },
        {
            id: "f4",
            name: "Mango",
            price: 149
        },
        {
            id: "f5",
            name: "Grapes",
            price: 199
        }
    ],
    Vegetables: [
        {
            id: "v1",
            name: "Tomato",
            price: 40
        },
        {
            id: "v2",
            name: "Potato",
            price: 30
        },
        {
            id: "v3",
            name: "Onion",
            price: 35
        },
        {
            id: "v4",
            name: "Carrot",
            price: 45
        },
        {
            id: "v5",
            name: "Spinach",
            price: 25
        }
    ],
    "Daily Essentials": [
        {
            id: "d1",
            name: "Milk 1L",
            price: 65
        },
        {
            id: "d2",
            name: "Bread",
            price: 45
        },
        {
            id: "d3",
            name: "Eggs 12pc",
            price: 85
        },
        {
            id: "d4",
            name: "Butter",
            price: 55
        },
        {
            id: "d5",
            name: "Cheese",
            price: 199
        }
    ],
    Snacks: [
        {
            id: "s1",
            name: "Chips",
            price: 30
        },
        {
            id: "s2",
            name: "Cookies",
            price: 45
        },
        {
            id: "s3",
            name: "Popcorn",
            price: 99
        },
        {
            id: "s4",
            name: "Nuts Mix",
            price: 299
        },
        {
            id: "s5",
            name: "Crackers",
            price: 60
        }
    ],
    "Personal Care": [
        {
            id: "p1",
            name: "Shampoo",
            price: 299
        },
        {
            id: "p2",
            name: "Soap Bar",
            price: 45
        },
        {
            id: "p3",
            name: "Toothpaste",
            price: 99
        },
        {
            id: "p4",
            name: "Lotion",
            price: 349
        },
        {
            id: "p5",
            name: "Deodorant",
            price: 199
        }
    ],
    Household: [
        {
            id: "h1",
            name: "Detergent",
            price: 399
        },
        {
            id: "h2",
            name: "Dish Soap",
            price: 99
        },
        {
            id: "h3",
            name: "Paper Towels",
            price: 149
        },
        {
            id: "h4",
            name: "Trash Bags",
            price: 199
        },
        {
            id: "h5",
            name: "Cleaner",
            price: 129
        }
    ]
};
const popularProducts = [
    {
        id: "pop1",
        name: "Organic Milk",
        price: 85,
        discount: 15
    },
    {
        id: "pop2",
        name: "Fresh Bread",
        price: 49,
        discount: 10
    },
    {
        id: "pop3",
        name: "Premium Eggs",
        price: 120,
        discount: 20
    },
    {
        id: "pop4",
        name: "Greek Yogurt",
        price: 75
    },
    {
        id: "pop5",
        name: "Orange Juice",
        price: 99,
        discount: 25
    },
    {
        id: "pop6",
        name: "Avocados",
        price: 199
    }
];
}),
"[project]/components/category-filters.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryFilters",
    ()=>CategoryFilters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$apple$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Apple$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/apple.js [app-ssr] (ecmascript) <export default as Apple>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$carrot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Carrot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/carrot.js [app-ssr] (ecmascript) <export default as Carrot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$milk$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Milk$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/milk.js [app-ssr] (ecmascript) <export default as Milk>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cookie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cookie$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cookie.js [app-ssr] (ecmascript) <export default as Cookie>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-ssr] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/translations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$category$2d$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/category-products.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$cart$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/cart-context.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const categories = [
    {
        key: "fruits",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$apple$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Apple$3e$__["Apple"], {
            className: "w-3.5 h-3.5"
        }, void 0, false, {
            fileName: "[project]/components/category-filters.tsx",
            lineNumber: 19,
            columnNumber: 26
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        key: "vegetables",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$carrot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Carrot$3e$__["Carrot"], {
            className: "w-3.5 h-3.5"
        }, void 0, false, {
            fileName: "[project]/components/category-filters.tsx",
            lineNumber: 20,
            columnNumber: 30
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        key: "dailyEssentials",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$milk$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Milk$3e$__["Milk"], {
            className: "w-3.5 h-3.5"
        }, void 0, false, {
            fileName: "[project]/components/category-filters.tsx",
            lineNumber: 21,
            columnNumber: 35
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        key: "snacks",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cookie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cookie$3e$__["Cookie"], {
            className: "w-3.5 h-3.5"
        }, void 0, false, {
            fileName: "[project]/components/category-filters.tsx",
            lineNumber: 22,
            columnNumber: 26
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        key: "personalCare",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
            className: "w-3.5 h-3.5"
        }, void 0, false, {
            fileName: "[project]/components/category-filters.tsx",
            lineNumber: 23,
            columnNumber: 32
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        key: "household",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
            className: "w-3.5 h-3.5"
        }, void 0, false, {
            fileName: "[project]/components/category-filters.tsx",
            lineNumber: 24,
            columnNumber: 29
        }, ("TURBOPACK compile-time value", void 0))
    }
];
function CategoryFilters({ language, selectedCategory, onCategoryClick, onAskAboutProduct }) {
    const [expandedCategory, setExpandedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const cartContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$cart$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartContext"]);
    const addToCart = cartContext?.addToCart || (()=>{});
    const handleCategoryClick = (key)=>{
        const categoryName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(key, "english");
        if (expandedCategory === categoryName) {
            setExpandedCategory(null);
        } else {
            setExpandedCategory(categoryName);
        }
        onCategoryClick(key);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 border-b border-sidebar-border/50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("categories", language)
            }, void 0, false, {
                fileName: "[project]/components/category-filters.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: categories.map(({ key, icon }, index)=>{
                    const categoryName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(key, "english");
                    const isExpanded = expandedCategory === categoryName;
                    const products = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$category$2d$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categoryProducts"][categoryName] || [];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 animate-fade-in-up",
                        style: {
                            animationDelay: `${index * 50}ms`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleCategoryClick(key),
                                className: `w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${isExpanded ? "bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white shadow-md" : "bg-white border border-border/60 hover:border-primary/40 hover:shadow-md"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            icon,
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(key, language)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/category-filters.tsx",
                                        lineNumber: 68,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/category-filters.tsx",
                                            lineNumber: 73,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/category-filters.tsx",
                                        lineNumber: 72,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/category-filters.tsx",
                                lineNumber: 60,
                                columnNumber: 15
                            }, this),
                            isExpanded && products.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2 p-2 bg-muted/30 rounded-xl animate-fade-in",
                                children: products.slice(0, 6).map((product, productIndex)=>{
                                    const displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translateProductName"])(product.name, language);
                                    const priceValue = typeof product.price === "number" ? product.price : parseFloat(product.price?.toString() || "0");
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>onAskAboutProduct(product),
                                        className: "p-3 rounded-xl border border-border/40 bg-white shadow-sm hover:shadow-md transition-all duration-200 flex flex-col cursor-pointer animate-fade-in-up",
                                        style: {
                                            animationDelay: `${productIndex * 50}ms`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-semibold text-sm text-foreground line-clamp-2",
                                                children: displayName
                                            }, void 0, false, {
                                                fileName: "[project]/components/category-filters.tsx",
                                                lineNumber: 92,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-primary font-bold text-base mt-1",
                                                children: [
                                                    "₹",
                                                    priceValue.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/category-filters.tsx",
                                                lineNumber: 95,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    addToCart({
                                                        id: String(product.id),
                                                        name: product.name,
                                                        price: priceValue
                                                    });
                                                },
                                                className: "mt-2 py-1.5 text-sm rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white font-medium hover:from-green-600 hover:to-green-700 transition-all flex items-center justify-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/category-filters.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 27
                                                    }, this),
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("addToCart", language)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/category-filters.tsx",
                                                lineNumber: 96,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, product.id, true, {
                                        fileName: "[project]/components/category-filters.tsx",
                                        lineNumber: 86,
                                        columnNumber: 23
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/category-filters.tsx",
                                lineNumber: 78,
                                columnNumber: 17
                            }, this)
                        ]
                    }, key, true, {
                        fileName: "[project]/components/category-filters.tsx",
                        lineNumber: 59,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/category-filters.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/category-filters.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/popular-products.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PopularProducts",
    ()=>PopularProducts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-ssr] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tag.js [app-ssr] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-ssr] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/translations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$category$2d$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/category-products.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$cart$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/cart-context.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function PopularProducts({ language, onAskAboutProduct }) {
    const cartContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$cart$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartContext"]);
    const addToCart = cartContext?.addToCart || (()=>{});
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 border-b border-sidebar-border/50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                        className: "w-4 h-4 text-orange-500"
                    }, void 0, false, {
                        fileName: "[project]/components/popular-products.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("popularProducts", language)
                    }, void 0, false, {
                        fileName: "[project]/components/popular-products.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/popular-products.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-thin",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$category$2d$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["popularProducts"].map((product, index)=>{
                    const displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translateProductName"])(product.name, language);
                    const priceValue = typeof product.price === "number" ? product.price : parseFloat(product.price?.toString() || "0");
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>onAskAboutProduct(product),
                        className: "flex-shrink-0 w-40 p-3 rounded-xl border border-border/40 bg-white shadow-sm hover:shadow-md transition-all duration-200 flex flex-col cursor-pointer animate-fade-in-up",
                        style: {
                            animationDelay: `${index * 50}ms`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-semibold text-sm text-foreground line-clamp-2 flex-1",
                                        children: displayName
                                    }, void 0, false, {
                                        fileName: "[project]/components/popular-products.tsx",
                                        lineNumber: 43,
                                        columnNumber: 17
                                    }, this),
                                    product.discount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex-shrink-0 ml-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-0.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                                className: "w-2.5 h-2.5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/popular-products.tsx",
                                                lineNumber: 48,
                                                columnNumber: 21
                                            }, this),
                                            product.discount,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/popular-products.tsx",
                                        lineNumber: 47,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/popular-products.tsx",
                                lineNumber: 42,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-primary font-bold text-lg mt-2",
                                children: [
                                    "₹",
                                    priceValue.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/popular-products.tsx",
                                lineNumber: 53,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    addToCart({
                                        id: String(product.id),
                                        name: product.name,
                                        price: priceValue
                                    });
                                },
                                className: "mt-2 py-1.5 text-sm rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white font-medium hover:from-green-600 hover:to-green-700 transition-all flex items-center justify-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/popular-products.tsx",
                                        lineNumber: 65,
                                        columnNumber: 17
                                    }, this),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("addToCart", language)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/popular-products.tsx",
                                lineNumber: 54,
                                columnNumber: 15
                            }, this)
                        ]
                    }, product.id, true, {
                        fileName: "[project]/components/popular-products.tsx",
                        lineNumber: 36,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/popular-products.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/popular-products.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/search-sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchSidebar",
    ()=>SearchSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/translations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$product$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/product-card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$category$2d$filters$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/category-filters.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$popular$2d$products$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/popular-products.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function SearchSidebar({ language, onAskAboutProduct }) {
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSearching, setIsSearching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (searchQuery)=>{
        if (!searchQuery.trim()) {
            setResults([]);
            return;
        }
        setIsSearching(true);
        try {
            const products = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["searchProducts"])(searchQuery, language);
            setResults(products);
        } catch  {
            setResults([]);
        } finally{
            setIsSearching(false);
        }
    }, [
        language
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const debounceTimer = setTimeout(()=>{
            handleSearch(query);
        }, 300);
        return ()=>clearTimeout(debounceTimer);
    }, [
        query,
        handleSearch
    ]);
    const handleCategoryClick = (category)=>{
        const categoryName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(category, language);
        setSelectedCategory(categoryName);
        setQuery(categoryName);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-b border-sidebar-border/50 shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            className: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                        }, void 0, false, {
                            fileName: "[project]/components/search-sidebar.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: query,
                            onChange: (e)=>setQuery(e.target.value),
                            placeholder: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("searchProducts", language),
                            className: "w-full pl-10 pr-4 py-2.5 bg-white border border-border/60 rounded-xl focus:outline-none focus:border-primary/40 input-modern transition-all text-sm"
                        }, void 0, false, {
                            fileName: "[project]/components/search-sidebar.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/search-sidebar.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/search-sidebar.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto min-h-0 pb-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$popular$2d$products$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopularProducts"], {
                        language: language,
                        onAskAboutProduct: onAskAboutProduct
                    }, void 0, false, {
                        fileName: "[project]/components/search-sidebar.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$category$2d$filters$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CategoryFilters"], {
                        language: language,
                        selectedCategory: selectedCategory,
                        onCategoryClick: handleCategoryClick,
                        onAskAboutProduct: onAskAboutProduct
                    }, void 0, false, {
                        fileName: "[project]/components/search-sidebar.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4",
                        children: isSearching ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center py-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-muted-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/components/search-sidebar.tsx",
                                        lineNumber: 84,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("searching", language)
                                    }, void 0, false, {
                                        fileName: "[project]/components/search-sidebar.tsx",
                                        lineNumber: 85,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/search-sidebar.tsx",
                                lineNumber: 83,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/search-sidebar.tsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, this) : results.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: results.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$product$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProductCard"], {
                                    product: product,
                                    language: language,
                                    onAskAbout: ()=>onAskAboutProduct(product)
                                }, product.id, false, {
                                    fileName: "[project]/components/search-sidebar.tsx",
                                    lineNumber: 91,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/search-sidebar.tsx",
                            lineNumber: 89,
                            columnNumber: 13
                        }, this) : query ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center justify-center py-8 text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground text-sm",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("noResults", language)
                            }, void 0, false, {
                                fileName: "[project]/components/search-sidebar.tsx",
                                lineNumber: 101,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/search-sidebar.tsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center justify-center py-8 text-center text-muted-foreground",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("sidebarFooterText", language)
                            }, void 0, false, {
                                fileName: "[project]/components/search-sidebar.tsx",
                                lineNumber: 105,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/search-sidebar.tsx",
                            lineNumber: 104,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/search-sidebar.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/search-sidebar.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/search-sidebar.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/product-preview.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductPreview",
    ()=>ProductPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-ssr] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/translations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$cart$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/cart-context.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function ProductPreview({ products, language, onAskAbout }) {
    const cartContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$cart$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartContext"]);
    const addToCart = cartContext?.addToCart || (()=>{});
    if (!products || products.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-3 pt-3 border-t border-border/30",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-muted-foreground/70 mb-2 font-medium",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("relatedProducts", language)
            }, void 0, false, {
                fileName: "[project]/components/product-preview.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 overflow-x-auto pb-1 scrollbar-thin",
                children: products.map((product, index)=>{
                    const displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translateProductName"])(product.name, language);
                    const priceValue = typeof product.price === "number" ? product.price : parseFloat(product.price?.toString() || "0");
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>onAskAbout(product),
                        className: "flex-shrink-0 p-3 rounded-xl border border-border/40 bg-white shadow-sm hover:shadow-md transition-all duration-200 flex flex-col cursor-pointer animate-fade-in-up min-w-[150px] max-w-[180px]",
                        style: {
                            animationDelay: `${index * 100}ms`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-semibold text-sm text-foreground line-clamp-2 min-h-[2.5rem]",
                                children: displayName
                            }, void 0, false, {
                                fileName: "[project]/components/product-preview.tsx",
                                lineNumber: 39,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-primary font-bold text-base mt-1",
                                children: [
                                    "₹",
                                    priceValue.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/product-preview.tsx",
                                lineNumber: 42,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    addToCart({
                                        id: String(product.id),
                                        name: product.name,
                                        price: priceValue
                                    });
                                },
                                className: "mt-2 py-1.5 text-sm rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white font-medium hover:from-green-600 hover:to-green-700 transition-all flex items-center justify-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/product-preview.tsx",
                                        lineNumber: 54,
                                        columnNumber: 17
                                    }, this),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("addToCart", language)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/product-preview.tsx",
                                lineNumber: 43,
                                columnNumber: 15
                            }, this)
                        ]
                    }, product.id, true, {
                        fileName: "[project]/components/product-preview.tsx",
                        lineNumber: 33,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/product-preview.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/product-preview.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/chat-message.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatMessage",
    ()=>ChatMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-ssr] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/translations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$product$2d$preview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/product-preview.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function ChatMessage({ message, currentLanguage, originalLanguage, relatedProducts, onAskAboutProduct, index = 0 }) {
    const isBot = message.role === "bot";
    // Show translation badge if current language differs from English and message is from bot
    const showTranslationBadge = isBot && currentLanguage && currentLanguage !== "english";
    const fromLanguage = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["languages"].find((l)=>l.code === "english");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex gap-3 animate-fade-in-up ${isBot ? "justify-start" : "justify-end"}`,
        style: {
            animationDelay: `${index * 100}ms`
        },
        children: [
            isBot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-9 h-9 rounded-full bg-gradient-to-br from-[#22C55E] to-[#16A34A] flex items-center justify-center flex-shrink-0 shadow-md hover:scale-110 transition-transform duration-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                    className: "w-4 h-4 text-white"
                }, void 0, false, {
                    fileName: "[project]/components/chat-message.tsx",
                    lineNumber: 40,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/chat-message.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-[85%] sm:max-w-2xl lg:max-w-3xl",
                children: [
                    showTranslationBadge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-5 right-0 flex items-center gap-1 px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-medium border border-blue-100 animate-fade-in",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                className: "w-3 h-3"
                            }, void 0, false, {
                                fileName: "[project]/components/chat-message.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Translated from ",
                                    fromLanguage?.nativeName
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chat-message.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chat-message.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `px-4 py-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 w-full ${isBot ? "bg-white/90 backdrop-blur-sm border border-border/50 text-foreground rounded-[20px] rounded-tl-[4px]" : "bg-gradient-to-br from-[#22c55e] to-[#16a34a] text-white rounded-[20px] rounded-tr-[4px]"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[15px] whitespace-pre-wrap leading-relaxed break-words",
                                children: message.content
                            }, void 0, false, {
                                fileName: "[project]/components/chat-message.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            isBot && relatedProducts && relatedProducts.length > 0 && onAskAboutProduct && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$product$2d$preview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProductPreview"], {
                                products: relatedProducts,
                                language: currentLanguage || "english",
                                onAskAbout: onAskAboutProduct
                            }, void 0, false, {
                                fileName: "[project]/components/chat-message.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chat-message.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/chat-message.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            !isBot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-9 h-9 rounded-full bg-gradient-to-br from-[#22C55E] to-[#16A34A] flex items-center justify-center flex-shrink-0 shadow-md hover:scale-110 transition-transform duration-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                    className: "w-4 h-4 text-white"
                }, void 0, false, {
                    fileName: "[project]/components/chat-message.tsx",
                    lineNumber: 68,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/chat-message.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat-message.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/typing-indicator.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TypingIndicator",
    ()=>TypingIndicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-ssr] (ecmascript) <export default as ShoppingBag>");
"use client";
;
;
function TypingIndicator() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-3 animate-fade-in-up",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-9 h-9 rounded-full bg-gradient-to-br from-[#22C55E] to-[#16A34A] flex items-center justify-center flex-shrink-0 shadow-md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                    className: "w-4 h-4 text-white"
                }, void 0, false, {
                    fileName: "[project]/components/typing-indicator.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/typing-indicator.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/90 backdrop-blur-sm border border-border/50 px-5 py-4 rounded-[20px] rounded-tl-[4px] shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "w-2 h-2 bg-primary/60 rounded-full typing-dot"
                        }, void 0, false, {
                            fileName: "[project]/components/typing-indicator.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "w-2 h-2 bg-primary/60 rounded-full typing-dot"
                        }, void 0, false, {
                            fileName: "[project]/components/typing-indicator.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "w-2 h-2 bg-primary/60 rounded-full typing-dot"
                        }, void 0, false, {
                            fileName: "[project]/components/typing-indicator.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/typing-indicator.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/typing-indicator.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/typing-indicator.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/voice-input-button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VoiceInputButton",
    ()=>VoiceInputButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-ssr] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic-off.js [app-ssr] (ecmascript) <export default as MicOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/translations.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function VoiceInputButton({ language, onTranscript, disabled, autoSend = true }) {
    const [isRecording, setIsRecording] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const mediaRecorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chunksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    // Map language to Whisper-compatible language code
    const getWhisperLangCode = (lang)=>{
        const langMap = {
            english: "en",
            hindi: "hi",
            marathi: "mr",
            bengali: "bn",
            telugu: "te",
            tamil: "ta",
            gujarati: "gu",
            kannada: "kn",
            malayalam: "ml",
            punjabi: "pa",
            odia: "or",
            urdu: "ur",
            nepali: "ne",
            sinhala: "si",
            arabic: "ar"
        };
        return langMap[lang] || "en";
    };
    const startRecording = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true
            });
            const mediaRecorder = new MediaRecorder(stream, {
                mimeType: MediaRecorder.isTypeSupported("audio/webm;codecs=opus") ? "audio/webm;codecs=opus" : "audio/webm"
            });
            mediaRecorderRef.current = mediaRecorder;
            chunksRef.current = [];
            mediaRecorder.ondataavailable = (event)=>{
                if (event.data.size > 0) {
                    chunksRef.current.push(event.data);
                }
            };
            mediaRecorder.onstop = async ()=>{
                // Stop all tracks
                stream.getTracks().forEach((track)=>track.stop());
                if (chunksRef.current.length === 0) {
                    console.warn("[VoiceInput] No audio data recorded");
                    return;
                }
                setIsProcessing(true);
                try {
                    const audioBlob = new Blob(chunksRef.current, {
                        type: "audio/webm"
                    });
                    const formData = new FormData();
                    formData.append("file", audioBlob, "recording.webm");
                    formData.append("language", getWhisperLangCode(language));
                    console.log("[VoiceInput] Sending audio to /api/voice");
                    const response = await fetch("/api/voice", {
                        method: "POST",
                        body: formData
                    });
                    const data = await response.json();
                    if (data.success && data.data?.text) {
                        console.log("[VoiceInput] Transcription:", data.data.text);
                        onTranscript(data.data.text);
                    } else {
                        console.error("[VoiceInput] Transcription failed:", data.error);
                    }
                } catch (error) {
                    console.error("[VoiceInput] Error processing audio:", error);
                } finally{
                    setIsProcessing(false);
                }
            };
            mediaRecorder.start();
            setIsRecording(true);
            console.log("[VoiceInput] Recording started");
        } catch (error) {
            console.error("[VoiceInput] Failed to start recording:", error);
            alert("Could not access microphone. Please check permissions.");
        }
    }, [
        language,
        onTranscript
    ]);
    const stopRecording = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
            console.log("[VoiceInput] Recording stopped");
        }
    }, []);
    const handleClick = ()=>{
        if (isRecording) {
            stopRecording();
        } else {
            startRecording();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: handleClick,
        disabled: disabled || isProcessing,
        className: `relative p-1.5 rounded-full transition-all duration-200 ${isRecording ? "bg-red-500 text-white" : isProcessing ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-primary hover:bg-primary/10"}`,
        "aria-label": isRecording ? "Stop recording" : "Voice input",
        children: isProcessing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
            className: "w-5 h-5 animate-spin"
        }, void 0, false, {
            fileName: "[project]/components/voice-input-button.tsx",
            lineNumber: 141,
            columnNumber: 9
        }, this) : isRecording ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__["MicOff"], {
                    className: "w-5 h-5 relative z-10"
                }, void 0, false, {
                    fileName: "[project]/components/voice-input-button.tsx",
                    lineNumber: 144,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "absolute inset-0 rounded-full animate-ping bg-red-500/50"
                }, void 0, false, {
                    fileName: "[project]/components/voice-input-button.tsx",
                    lineNumber: 146,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium text-red-500 z-10",
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("listening", language)
                }, void 0, false, {
                    fileName: "[project]/components/voice-input-button.tsx",
                    lineNumber: 147,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/components/voice-input-button.tsx",
            lineNumber: 152,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/voice-input-button.tsx",
        lineNumber: 127,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/bestseller-card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BestsellerCard",
    ()=>BestsellerCard,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-ssr] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/translations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$cart$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/cart-context.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function BestsellerCard({ product, translatedName, translatedDescription, language }) {
    const cartContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$cart$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartContext"]);
    const addToCart = cartContext?.addToCart || (()=>{});
    const displayName = translatedName || product.name || "Product";
    const displayDescription = translatedDescription || product.description || "";
    const priceValue = typeof product.price === "number" ? product.price : parseFloat(product.price?.toString() || "0");
    const handleAddToCart = ()=>{
        addToCart({
            id: String(product.id),
            name: displayName,
            price: priceValue
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white border border-border/40 rounded-xl p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "font-semibold text-sm text-foreground mb-2 line-clamp-2 min-h-[2.5rem] leading-tight",
                        children: displayName
                    }, void 0, false, {
                        fileName: "[project]/components/bestseller-card.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    displayDescription && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-muted-foreground line-clamp-3 mb-3 flex-1 leading-relaxed",
                        children: displayDescription
                    }, void 0, false, {
                        fileName: "[project]/components/bestseller-card.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this),
                    !displayDescription && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-h-[2rem]"
                    }, void 0, false, {
                        fileName: "[project]/components/bestseller-card.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/bestseller-card.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-primary font-bold text-lg mb-3",
                        children: [
                            "₹",
                            priceValue.toFixed(2)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/bestseller-card.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleAddToCart,
                        className: "w-full py-2 text-sm rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white font-medium hover:from-green-600 hover:to-green-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/components/bestseller-card.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("addToCart", language)
                            }, void 0, false, {
                                fileName: "[project]/components/bestseller-card.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/bestseller-card.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/bestseller-card.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/bestseller-card.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = BestsellerCard;
}),
"[project]/hooks/useBestsellers.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBestsellers",
    ()=>useBestsellers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function useBestsellers(languageCode) {
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let cancelled = false;
        async function fetchBestsellers() {
            setIsLoading(true);
            setError(null);
            try {
                const res = await fetch(`/api/products/bestsellers?lang=${encodeURIComponent(languageCode)}`, {
                    method: "GET",
                    cache: "no-store"
                });
                if (!res.ok) {
                    throw new Error(`HTTP ${res.status}`);
                }
                const data = await res.json();
                const bestsellers = Array.isArray(data?.bestsellers) ? data.bestsellers : [];
                console.log("[useBestsellers] Loaded:", bestsellers.length, "items");
                if (!cancelled) {
                    setItems(bestsellers);
                }
            } catch (e) {
                console.error("[useBestsellers] Error:", e);
                if (!cancelled) {
                    setError(e.message || "Failed to load bestsellers");
                }
            } finally{
                if (!cancelled) {
                    setIsLoading(false);
                }
            }
        }
        fetchBestsellers();
        return ()=>{
            cancelled = true;
        };
    }, [
        languageCode
    ]);
    return {
        items,
        isLoading,
        error
    };
}
}),
"[project]/components/bestsellers-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BestsellersSection",
    ()=>BestsellersSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/crown.js [app-ssr] (ecmascript) <export default as Crown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/translations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$language$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/language-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$bestseller$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/bestseller-card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useBestsellers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useBestsellers.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function BestsellersSection({ language: propLanguage }) {
    const { language: contextLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$language$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const language = propLanguage || contextLanguage;
    const langMap = {
        english: "en-US",
        hindi: "hi-IN",
        marathi: "mr-IN",
        telugu: "te-IN",
        tamil: "ta-IN",
        bengali: "bn-IN",
        kannada: "kn-IN",
        malayalam: "ml-IN",
        gujarati: "gu-IN",
        punjabi: "pa-IN",
        odia: "or-IN",
        urdu: "ur-PK",
        nepali: "ne-NP",
        sinhala: "si-LK",
        arabic: "ar-SA"
    };
    const langCode = langMap[language] ?? "en-US";
    const { items, isLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useBestsellers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBestsellers"])(langCode);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"], {
                        className: "w-5 h-5 text-yellow-500"
                    }, void 0, false, {
                        fileName: "[project]/components/bestsellers-section.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-foreground",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("bestsellers", language)
                    }, void 0, false, {
                        fileName: "[project]/components/bestsellers-section.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/bestsellers-section.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                            className: "w-6 h-6 text-primary animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/components/bestsellers-section.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground",
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("searching", language)
                        }, void 0, false, {
                            fileName: "[project]/components/bestsellers-section.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/bestsellers-section.tsx",
                    lineNumber: 49,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/bestsellers-section.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, this),
            error && !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm mb-4",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/bestsellers-section.tsx",
                lineNumber: 57,
                columnNumber: 9
            }, this),
            !isLoading && !error && items.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 bg-muted/30 rounded-lg text-center text-muted-foreground text-sm",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("noResults", language)
            }, void 0, false, {
                fileName: "[project]/components/bestsellers-section.tsx",
                lineNumber: 63,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3",
                children: items.map((product)=>{
                    const fallbackName = product.translatedName || product.name || "Product";
                    const fallbackDescription = product.translatedDescription || product.description || "";
                    const priceValue = typeof product.price === "number" ? product.price : Number(product.price ?? 0);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$bestseller$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BestsellerCard"], {
                        product: {
                            id: String(product.id),
                            name: fallbackName,
                            price: priceValue,
                            description: fallbackDescription
                        },
                        translatedName: fallbackName,
                        translatedDescription: fallbackDescription,
                        language: language
                    }, product.id, false, {
                        fileName: "[project]/components/bestsellers-section.tsx",
                        lineNumber: 75,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/bestsellers-section.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/bestsellers-section.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/chat-panel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatPanel",
    ()=>ChatPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/translations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2d$message$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chat-message.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$typing$2d$indicator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/typing-indicator.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$voice$2d$input$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/voice-input-button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$category$2d$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/category-products.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$bestsellers$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/bestsellers-section.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
function getRelatedProducts(message) {
    const lowerMessage = message.toLowerCase();
    // Check for category mentions
    const categoryKeywords = {
        fruit: "Fruits",
        fruits: "Fruits",
        apple: "Fruits",
        banana: "Fruits",
        mango: "Fruits",
        orange: "Fruits",
        vegetable: "Vegetables",
        vegetables: "Vegetables",
        tomato: "Vegetables",
        potato: "Vegetables",
        onion: "Vegetables",
        carrot: "Vegetables",
        milk: "Daily Essentials",
        bread: "Daily Essentials",
        eggs: "Daily Essentials",
        dairy: "Daily Essentials",
        snack: "Snacks",
        snacks: "Snacks",
        chips: "Snacks",
        cookies: "Snacks",
        shampoo: "Personal Care",
        soap: "Personal Care",
        toothpaste: "Personal Care",
        detergent: "Household",
        cleaner: "Household",
        household: "Household"
    };
    for (const [keyword, category] of Object.entries(categoryKeywords)){
        if (lowerMessage.includes(keyword)) {
            return (__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$category$2d$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categoryProducts"][category] || []).slice(0, 3);
        }
    }
    return [];
}
function getDemoMessages(language) {
    return [
        {
            id: "demo-1",
            role: "bot",
            content: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("welcome", language),
            relatedProducts: []
        },
        {
            id: "demo-2",
            role: "bot",
            content: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("demoMessage", language),
            relatedProducts: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$category$2d$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categoryProducts"]["Fruits"]?.slice(0, 3) || []
        }
    ];
}
function ChatPanel({ language, messages, setMessages, pendingProduct, clearPendingProduct }) {
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textareaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Auto-scroll to bottom when messages change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setTimeout(()=>{
            messagesEndRef.current?.scrollIntoView({
                behavior: "smooth"
            });
        }, 100);
        return ()=>clearTimeout(timer);
    }, [
        messages
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (pendingProduct) {
            const productQuestion = `Tell me about ${pendingProduct.name}`;
            setInput(productQuestion);
            textareaRef.current?.focus();
        }
    }, [
        pendingProduct
    ]);
    const handleVoiceTranscript = (transcript)=>{
        setInput(transcript);
        textareaRef.current?.focus();
    };
    const handleAskAboutProduct = (product)=>{
        setInput(`Tell me about ${product.name}`);
        textareaRef.current?.focus();
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!input.trim() || isLoading) return;
        const userMessage = {
            id: Date.now().toString(),
            role: "user",
            content: input.trim()
        };
        setMessages((prev)=>[
                ...prev,
                userMessage
            ]);
        setInput("");
        clearPendingProduct();
        setIsLoading(true);
        const botMessageId = (Date.now() + 1).toString();
        try {
            console.log("📤 Sending chat message:", userMessage.content);
            // sendChatMessage NEVER throws - it always returns a valid ChatResponse
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendChatMessage"])(userMessage.content, language);
            console.log("📥 Response received:", response);
            // Safely extract reply (always has a value due to sendChatMessage design)
            const botReply = response?.reply || "Sorry, I couldn't respond. Please try again!";
            // Safely extract related products
            const responseProducts = response?.relatedProducts || [];
            const relatedProducts = responseProducts.map((p)=>({
                    id: `product-${Date.now()}-${Math.random()}`,
                    name: p.name || "Product",
                    price: typeof p.price === "number" ? p.price : parseFloat(String(p.price)) || 0
                }));
            // If no related products from API, try to find local ones
            const finalProducts = relatedProducts.length > 0 ? relatedProducts : getRelatedProducts(userMessage.content);
            const botMessage = {
                id: botMessageId,
                role: "bot",
                content: botReply,
                relatedProducts: finalProducts
            };
            setMessages((prev)=>[
                    ...prev,
                    botMessage
                ]);
        } catch (error) {
            // This catch block should rarely be reached since sendChatMessage doesn't throw
            console.error("❌ Unexpected chat error:", error);
            const fallbackProducts = getRelatedProducts(userMessage.content);
            const fallbackMessage = {
                id: botMessageId,
                role: "bot",
                content: "Sorry, I'm having trouble responding. Please try again!",
                relatedProducts: fallbackProducts
            };
            setMessages((prev)=>[
                    ...prev,
                    fallbackMessage
                ]);
        } finally{
            setIsLoading(false);
        }
    };
    const handleKeyDown = (e)=>{
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };
    const showBestsellers = messages.length === 2 && messages[0]?.id === "demo-1";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full overflow-hidden w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto overflow-x-hidden p-4 sm:p-6 space-y-6 min-h-0 w-full scroll-smooth",
                children: [
                    messages.map((message, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2d$message$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatMessage"], {
                            message: message,
                            currentLanguage: language,
                            relatedProducts: message.relatedProducts,
                            onAskAboutProduct: handleAskAboutProduct,
                            index: index
                        }, message.id, false, {
                            fileName: "[project]/components/chat-panel.tsx",
                            lineNumber: 203,
                            columnNumber: 11
                        }, this)),
                    showBestsellers && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-fade-in-up",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$bestsellers$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BestsellersSection"], {
                            language: language
                        }, void 0, false, {
                            fileName: "[project]/components/chat-panel.tsx",
                            lineNumber: 214,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/chat-panel.tsx",
                        lineNumber: 213,
                        columnNumber: 11
                    }, this),
                    isLoading && messages[messages.length - 1]?.role === "user" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$typing$2d$indicator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TypingIndicator"], {}, void 0, false, {
                        fileName: "[project]/components/chat-panel.tsx",
                        lineNumber: 217,
                        columnNumber: 73
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: messagesEndRef
                    }, void 0, false, {
                        fileName: "[project]/components/chat-panel.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/chat-panel.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shrink-0 p-4 sm:p-6 pt-2 pb-6 sm:pb-8 bg-gradient-to-t from-background via-background to-transparent w-full border-t border-border/30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "flex items-end gap-3 max-w-4xl mx-auto w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    ref: textareaRef,
                                    value: input,
                                    onChange: (e)=>setInput(e.target.value),
                                    onKeyDown: handleKeyDown,
                                    placeholder: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("inputPlaceholder", language),
                                    rows: 1,
                                    className: "w-full px-5 py-3.5 pr-20 bg-white border border-border/60 rounded-[30px] resize-none focus:outline-none focus:border-primary/40 focus:shadow-md input-modern transition-all duration-200 max-h-32 text-[16px]",
                                    style: {
                                        minHeight: "52px"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/chat-panel.tsx",
                                    lineNumber: 225,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$voice$2d$input$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VoiceInputButton"], {
                                        language: language,
                                        onTranscript: handleVoiceTranscript,
                                        disabled: isLoading
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat-panel.tsx",
                                        lineNumber: 236,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/chat-panel.tsx",
                                    lineNumber: 235,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/chat-panel.tsx",
                            lineNumber: 224,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: !input.trim() || isLoading,
                            className: "p-3.5 btn-gradient text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none disabled:hover:shadow-none hover:scale-105 active:scale-95 transition-all duration-150 hover:shadow-lg",
                            "aria-label": (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("send", language),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/components/chat-panel.tsx",
                                lineNumber: 245,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/chat-panel.tsx",
                            lineNumber: 239,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/chat-panel.tsx",
                    lineNumber: 223,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/chat-panel.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat-panel.tsx",
        lineNumber: 199,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/cart-drawer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartDrawer",
    ()=>CartDrawer,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-ssr] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-ssr] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$cart$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/cart-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/translations.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
// Additional translation keys for cart
const cartTranslations = {
    english: {
        startAdding: "Start adding products!",
        placing: "Placing..."
    },
    hindi: {
        startAdding: "उत्पाद जोड़ना शुरू करें!",
        placing: "ऑर्डर कर रहे हैं..."
    },
    marathi: {
        startAdding: "उत्पाद जोडणे सुरू करा!",
        placing: "ऑर्डर करत आहे..."
    },
    bengali: {
        startAdding: "পণ্য যোগ করা শুরু করুন!",
        placing: "অর্ডার করা হচ্ছে..."
    },
    telugu: {
        startAdding: "ఉత్పత్తులను జోడించడం ప్రారంభించండి!",
        placing: "ఆర్డర్ చేస్తోంది..."
    },
    tamil: {
        startAdding: "பொருட்களைச் சேர்க்க ஆரம்பியுங்கள்!",
        placing: "ஆர்டர் செய்கிறது..."
    },
    gujarati: {
        startAdding: "ઉત્પાદનો ઉમેરવાનું શરૂ કરો!",
        placing: "ઓર્ડર આપી રહ્યા છીએ..."
    },
    kannada: {
        startAdding: "ಉತ್ಪನ್ನಗಳನ್ನು ಸೇರಿಸಲು ಪ್ರಾರಂಭಿಸಿ!",
        placing: "ಆರ್ಡರ್ ಮಾಡುತ್ತಿದೆ..."
    },
    malayalam: {
        startAdding: "ഉൽപ്പന്നങ്ങൾ ചേർക്കാൻ ആരംഭിക്കുക!",
        placing: "ഓർഡർ ചെയ്യുന്നു..."
    },
    punjabi: {
        startAdding: "ਉਤਪਾਦ ਜੋੜਨਾ ਸ਼ੁਰੂ ਕਰੋ!",
        placing: "ਆਰਡਰ ਕਰ ਰਿਹਾ ਹੈ..."
    },
    odia: {
        startAdding: "ଉତ୍ପାଦ ଯୋଡ଼ିବା ଆରମ୍ଭ କରନ୍ତୁ!",
        placing: "ଅର୍ଡର କରୁଛି..."
    },
    urdu: {
        startAdding: "مصنوعات ڈالنا شروع کریں!",
        placing: "آرڈر کر رہے ہیں..."
    },
    nepali: {
        startAdding: "उत्पाद थप्न सुरू गर्नुहोस्!",
        placing: "अर्डर गर्दैछ..."
    },
    sinhala: {
        startAdding: "නිෂ්පාදන එකතු කිරීම ආරම්භ කරන්න!",
        placing: "ඇණවුම් කරමින්..."
    },
    arabic: {
        startAdding: "ابدأ بإضافة المنتجات!",
        placing: "جاري تقديم الطلب..."
    }
};
function CartDrawer({ isOpen, onClose, language }) {
    const cartContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$cart$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartContext"]);
    const [orderPlaced, setOrderPlaced] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [orderId, setOrderId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isPlacing, setIsPlacing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Safe access to cart context methods
    const cartItems = cartContext?.cartItems || [];
    const removeFromCart = cartContext?.removeFromCart || (()=>{});
    const updateQuantity = cartContext?.updateQuantity || (()=>{});
    const clearCart = cartContext?.clearCart || (()=>{});
    const getTotalPrice = cartContext?.getTotalPrice || (()=>0);
    const safeItems = cartItems || [];
    const total = typeof getTotalPrice === "function" ? getTotalPrice() : 0;
    const handlePlaceOrder = async ()=>{
        if (isPlacing || safeItems.length === 0) return;
        setIsPlacing(true);
        setError(null);
        try {
            // Prepare cart items for the API
            const orderItems = safeItems.map((item)=>({
                    productId: item.productId,
                    name: item.name,
                    price: item.price || 0,
                    quantity: item.quantity
                }));
            console.log("[CartDrawer] Placing order with items:", orderItems);
            const res = await fetch("/api/orders/place", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userId: "user1",
                    cartItems: orderItems,
                    totalAmount: total
                })
            });
            const data = await res.json();
            console.log("[CartDrawer] Order response:", data);
            if (data?.success && data?.orderId) {
                setOrderId(data.orderId);
                setOrderPlaced(true);
                clearCart();
                // Auto close after 3 seconds
                setTimeout(()=>{
                    setOrderPlaced(false);
                    setOrderId("");
                    onClose();
                }, 3000);
            } else {
                console.error("[CartDrawer] Place order failed:", data);
                setError(data?.error || "Failed to place order");
            }
        } catch (err) {
            console.error("[CartDrawer] Error placing order:", err);
            setError("Error placing order. Please try again.");
        } finally{
            setIsPlacing(false);
        }
    };
    const extraTranslations = cartTranslations[language] || cartTranslations.english;
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/components/cart-drawer.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-50 flex flex-col animate-slide-in-right",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-4 border-b border-border/50 shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                        className: "w-5 h-5 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/components/cart-drawer.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-semibold text-foreground",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("cart", language)
                                    }, void 0, false, {
                                        fileName: "[project]/components/cart-drawer.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this),
                                    safeItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2 py-0.5 bg-primary/10 text-primary text-xs font-semibold rounded-full",
                                        children: safeItems.length
                                    }, void 0, false, {
                                        fileName: "[project]/components/cart-drawer.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/cart-drawer.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-2 hover:bg-accent rounded-xl transition-all duration-200",
                                "aria-label": "Close cart",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/cart-drawer.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/cart-drawer.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/cart-drawer.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-4",
                        children: orderPlaced ? /* Order Success UI */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center justify-center h-full text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-4xl",
                                        children: "✔️"
                                    }, void 0, false, {
                                        fileName: "[project]/components/cart-drawer.tsx",
                                        lineNumber: 142,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/cart-drawer.tsx",
                                    lineNumber: 141,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-semibold text-foreground mb-2",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("orderPlaced", language)
                                }, void 0, false, {
                                    fileName: "[project]/components/cart-drawer.tsx",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground mb-1",
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("orderId", language),
                                        ": ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono font-semibold text-primary",
                                            children: orderId
                                        }, void 0, false, {
                                            fileName: "[project]/components/cart-drawer.tsx",
                                            lineNumber: 148,
                                            columnNumber: 43
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/cart-drawer.tsx",
                                    lineNumber: 147,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("orderConfirmation", language)
                                }, void 0, false, {
                                    fileName: "[project]/components/cart-drawer.tsx",
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/cart-drawer.tsx",
                            lineNumber: 140,
                            columnNumber: 13
                        }, this) : safeItems.length === 0 ? /* Empty Cart UI */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center justify-center h-full text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-6xl mb-4 block",
                                    children: "🛒"
                                }, void 0, false, {
                                    fileName: "[project]/components/cart-drawer.tsx",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold text-lg text-foreground mb-2",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("cartEmpty", language)
                                }, void 0, false, {
                                    fileName: "[project]/components/cart-drawer.tsx",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: extraTranslations.startAdding
                                }, void 0, false, {
                                    fileName: "[project]/components/cart-drawer.tsx",
                                    lineNumber: 157,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/cart-drawer.tsx",
                            lineNumber: 154,
                            columnNumber: 13
                        }, this) : /* Cart Items List */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm mb-3",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/components/cart-drawer.tsx",
                                    lineNumber: 163,
                                    columnNumber: 17
                                }, this),
                                safeItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3 p-3 bg-white border border-border/50 rounded-xl hover:shadow-md transition-shadow",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-medium text-sm text-foreground line-clamp-2",
                                                    children: item.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/cart-drawer.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-primary font-bold text-lg mt-1",
                                                    children: [
                                                        "₹",
                                                        typeof item.price === "number" ? item.price.toFixed(2) : item.price ?? "-"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/cart-drawer.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mt-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>updateQuantity(item.productId, item.quantity - 1),
                                                            className: "p-1.5 hover:bg-accent rounded-lg transition-colors border border-border/50",
                                                            "aria-label": "Decrease quantity",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/cart-drawer.tsx",
                                                                lineNumber: 185,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/cart-drawer.tsx",
                                                            lineNumber: 180,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-semibold w-8 text-center",
                                                            children: item.quantity
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/cart-drawer.tsx",
                                                            lineNumber: 187,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>updateQuantity(item.productId, item.quantity + 1),
                                                            className: "p-1.5 hover:bg-accent rounded-lg transition-colors border border-border/50",
                                                            "aria-label": "Increase quantity",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/cart-drawer.tsx",
                                                                lineNumber: 193,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/cart-drawer.tsx",
                                                            lineNumber: 188,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>removeFromCart(item.productId),
                                                            className: "ml-auto p-1.5 hover:bg-red-50 text-red-500 rounded-lg transition-colors",
                                                            "aria-label": "Remove item",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/cart-drawer.tsx",
                                                                lineNumber: 200,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/cart-drawer.tsx",
                                                            lineNumber: 195,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/cart-drawer.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/cart-drawer.tsx",
                                            lineNumber: 172,
                                            columnNumber: 19
                                        }, this)
                                    }, item.id, false, {
                                        fileName: "[project]/components/cart-drawer.tsx",
                                        lineNumber: 168,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/cart-drawer.tsx",
                            lineNumber: 161,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/cart-drawer.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    !orderPlaced && safeItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-border/50 p-4 shrink-0 bg-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-foreground",
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("total", language),
                                            ":"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/cart-drawer.tsx",
                                        lineNumber: 214,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary font-bold text-xl",
                                        children: [
                                            "₹",
                                            total.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/cart-drawer.tsx",
                                        lineNumber: 215,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/cart-drawer.tsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handlePlaceOrder,
                                disabled: isPlacing,
                                className: "w-full py-3 bg-gradient-to-r from-primary to-[#16A34A] text-white rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
                                children: isPlacing ? extraTranslations.placing : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("placeOrder", language)
                            }, void 0, false, {
                                fileName: "[project]/components/cart-drawer.tsx",
                                lineNumber: 217,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/cart-drawer.tsx",
                        lineNumber: 212,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/cart-drawer.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = CartDrawer;
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SuperMartGPT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-ssr] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-ssr] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$language$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/language-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$cart$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/cart-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/translations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$language$2d$selector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/language-selector.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$search$2d$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/search-sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2d$panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chat-panel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cart$2d$drawer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/cart-drawer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
"use client";
;
;
;
;
;
;
;
;
;
;
;
function SuperMartGPT() {
    const { language, setLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$language$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const { getTotalItems } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$cart$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCart"])();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSidebarOpen, setIsSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCartOpen, setIsCartOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pendingProduct, setPendingProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Generate welcome message function
    const generateWelcomeMessage = async (lang)=>{
        const welcomeMessages = [
            {
                id: "demo-1",
                role: "bot",
                content: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("welcome", lang),
                relatedProducts: []
            },
            {
                id: "demo-2",
                role: "bot",
                content: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("demoMessage", lang),
                relatedProducts: []
            }
        ];
        setMessages(welcomeMessages);
    };
    // Initialize welcome message on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (messages.length === 0) {
            generateWelcomeMessage(language);
        }
    }, []);
    // Regenerate welcome messages when language changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (messages.length > 0 && messages[0]?.id === "demo-1") {
            generateWelcomeMessage(language);
        }
    }, [
        language
    ]);
    const handleAskAboutProduct = (product)=>{
        setPendingProduct(product);
    };
    const clearPendingProduct = ()=>{
        setPendingProduct(null);
    };
    const cartItemCount = getTotalItems();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen flex flex-col overflow-hidden w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex items-center justify-between px-4 py-3 bg-white/80 backdrop-blur-md border-b border-border/50 shadow-[0_2px_10px_rgba(0,0,0,0.05)] sticky top-0 z-30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsSidebarOpen(true),
                                className: "p-2 hover:bg-accent rounded-xl transition-all duration-200",
                                "aria-label": (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("menu", language),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#22C55E] to-[#16A34A] shadow-md",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                            className: "w-5 h-5 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-xl font-semibold text-foreground tracking-tight",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("appName", language)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden sm:block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$language$2d$selector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LanguageSelector"], {
                                    currentLanguage: language,
                                    onLanguageChange: setLanguage,
                                    compact: true
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsCartOpen(true),
                                className: "relative p-2 hover:bg-accent rounded-xl transition-all duration-200",
                                "aria-label": (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("cart", language),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this),
                                    cartItemCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center",
                                        children: cartItemCount > 9 ? "9+" : cartItemCount
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sm:hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$language$2d$selector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LanguageSelector"], {
                                    currentLanguage: language,
                                    onLanguageChange: setLanguage,
                                    compact: true
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex overflow-hidden w-full relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "flex-1 min-w-0 flex flex-col overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2d$panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatPanel"], {
                        language: language,
                        messages: messages,
                        setMessages: setMessages,
                        pendingProduct: pendingProduct,
                        clearPendingProduct: clearPendingProduct
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            isSidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity",
                        onClick: ()=>setIsSidebarOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-white/95 backdrop-blur-md z-50 shadow-2xl flex flex-col h-full transform transition-transform duration-300 ease-in-out",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between p-4 border-b border-border/50 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-semibold text-foreground",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("menu", language)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsSidebarOpen(false),
                                        className: "p-2 hover:bg-accent rounded-xl transition-all duration-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 143,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 border-b border-border/50 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-semibold text-muted-foreground mb-2 block uppercase tracking-wider",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("language", language)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$language$2d$selector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LanguageSelector"], {
                                        currentLanguage: language,
                                        onLanguageChange: (lang)=>{
                                            setLanguage(lang);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-h-0 overflow-y-auto pb-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$search$2d$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SearchSidebar"], {
                                    language: language,
                                    onAskAboutProduct: (product)=>{
                                        handleAskAboutProduct(product);
                                        setIsSidebarOpen(false);
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 160,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 136,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cart$2d$drawer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartDrawer"], {
                isOpen: isCartOpen,
                onClose: ()=>setIsCartOpen(false),
                language: language
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_5cc7acf5._.js.map