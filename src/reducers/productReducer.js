const initialState = {
    producList: [{
    "title": "Apple iPhone 7 Plus 32 GB (Apple Türkiye Garantili)",
    "category": "phone",
    "images": ["https://productimages.hepsiburada.net/s/18/280-413/9801258663986.jpg?v1", "https://productimages.hepsiburada.net/s/18/280-413/9801258696754.jpg?v1", "https://productimages.hepsiburada.net/s/18/280-413/9801258729522.jpg?v1", "https://productimages.hepsiburada.net/s/18/280-413/9801258762290.jpg?v1"],
    "brand": "apple",
    "price": 4241.49,
    "cpu": "1.3GHz Apple A6",
    "camera": "8mp (3264x2448)",
    "size": "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
    "weight": "132 grams (4.7 ounces) with battery",
    "display": "4.0 326 pixel density",
    "battery": "1480 mAh",
    "memory": "16GB, 32GB and RAM 1 GB",
    "id": 0,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    "qty":1,
    "inCart":false
}, {
    "title": "Huawei Mate 20 Lite 64 GB (Huawei Türkiye Garantili)",
    "category": "phone",
    "images": ["https://productimages.hepsiburada.net/s/21/280-413/9933217792050.jpg?v1", "https://productimages.hepsiburada.net/s/21/280-413/9933217628210.jpg?v1", "https://productimages.hepsiburada.net/s/21/280-413/9933217660978.jpg?v1", "https://productimages.hepsiburada.net/s/21/280-413/9933217693746.jpg?v1"],
    "brand": "huawei",
    "price": 1823.66,
    "cpu": "1.3GHz Apple A6",
    "camera": "8mp (3264x2448)",
    "size": "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
    "weight": "132 grams (4.7 ounces) with battery",
    "display": "4.0 326 pixel density",
    "battery": "1480 mAh",
    "memory": "16GB, 32GB and RAM 1 GB",
    "id": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    "qty":1,
    "inCart":false
}, {
    "title": "Huawei P20 Lite 64 GB (Huawei Türkiye Garantili)",
    "category": "phone",
    "images": ["https://productimages.hepsiburada.net/s/19/280-413/9826975907890.jpg?v1", "https://productimages.hepsiburada.net/s/19/280-413/9826975940658.jpg?v1", "https://productimages.hepsiburada.net/s/19/280-413/9826975973426.jpg?v1", "https://productimages.hepsiburada.net/s/19/280-413/9826976006194.jpg?v1"],
    "brand": "huawei",
    "price": 7429.4,
    "cpu": "1.3GHz Apple A6",
    "camera": "8mp (3264x2448)",
    "size": "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
    "weight": "132 grams (4.7 ounces) with battery",
    "display": "4.0 326 pixel density",
    "battery": "1480 mAh",
    "memory": "16GB, 32GB and RAM 1 GB",
    "id": 2,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    "qty":1,
    "inCart":false
}, {
    "title": "Meizu 16TH 64 GB (Meizu Türkiye Garantili)",
    "category": "phone",
    "images": ["https://productimages.hepsiburada.net/s/24/280-413/10094991409202.jpg?v1", "https://productimages.hepsiburada.net/s/24/280-413/10094991441970.jpg?v1", "https://productimages.hepsiburada.net/s/24/280-413/10094991474738.jpg?v1", "https://productimages.hepsiburada.net/s/24/280-413/10094991507506.jpg?v1"],
    "brand": "meizu",
    "price": 5664.2,
    "cpu": "1.3GHz Apple A6",
    "camera": "8mp (3264x2448)",
    "size": "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
    "weight": "132 grams (4.7 ounces) with battery",
    "display": "4.0 326 pixel density",
    "battery": "1480 mAh",
    "memory": "16GB, 32GB and RAM 1 GB",
    "id": 3,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    "qty":1,
    "inCart":false
}, {
    "title": "Meizu X8 64 GB (Meizu Türkiye Garantili)",
    "category": "phone",
    "images": ["https://productimages.hepsiburada.net/s/25/280-413/10108030091314.jpg?v1", "https://productimages.hepsiburada.net/s/24/280-413/10082391818290.jpg?v1", "https://productimages.hepsiburada.net/s/24/280-413/10082391851058.jpg?v1", "https://productimages.hepsiburada.net/s/24/280-413/10082391883826.jpg?v1"],
    "brand": "meizu",
    "price": 4596.,
    "cpu": "1.3GHz Apple A6",
    "camera": "8mp (3264x2448)",
    "size": "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
    "weight": "132 grams (4.7 ounces) with battery",
    "display": "4.0 326 pixel density",
    "battery": "1480 mAh",
    "memory": "16GB, 32GB and RAM 1 GB",
    "id": 4,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    "qty":1,
    "inCart":false
}, {
    "title": "Samsung Galaxy A7 2018 64 GB (Samsung Türkiye Garantili)",
    "category": "phone",
    "images": ["https://productimages.hepsiburada.net/s/22/280-413/9946187399218.jpg?v1", "https://productimages.hepsiburada.net/s/22/280-413/9946187431986.jpg?v1", "https://productimages.hepsiburada.net/s/22/280-413/9946187464754.jpg?v1", "https://productimages.hepsiburada.net/s/22/280-413/9946187497522.jpg?v1"],
    "brand": "samsung",
    "price": 4108.0,
    "cpu": "1.3GHz Apple A6",
    "camera": "8mp (3264x2448)",
    "size": "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
    "weight": "132 grams (4.7 ounces) with battery",
    "display": "4.0 326 pixel density",
    "battery": "1480 mAh",
    "memory": "16GB, 32GB and RAM 1 GB",
    "id": 5,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    "qty":1,
    "inCart":false
}, {
    "title": "Samsung Galaxy J6 Plus 32 GB (Samsung Türkiye Garantili)",
    "category": "phone",
    "images": ["https://productimages.hepsiburada.net/s/22/280-413/9941129494578.jpg?v1", "https://productimages.hepsiburada.net/s/22/280-413/9941129527346.jpg?v1", "https://productimages.hepsiburada.net/s/22/280-413/9941129560114.jpg?v1", "https://productimages.hepsiburada.net/s/22/280-413/9941129592882.jpg?v1"],
    "brand": "samsung",
    "price": 4260.95,
    "cpu": "1.3GHz Apple A6",
    "camera": "8mp (3264x2448)",
    "size": "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
    "weight": "132 grams (4.7 ounces) with battery",
    "display": "4.0 326 pixel density",
    "battery": "1480 mAh",
    "memory": "16GB, 32GB and RAM 1 GB",
    "id": 6,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    "qty":1,
    "inCart":false
}, {
    "title": "Vestel Venus Z20 (Vestel Garantili)",
    "category": "phone",
    "images": ["https://productimages.hepsiburada.net/s/19/280-413/9841497047090.jpg?v1", "https://productimages.hepsiburada.net/s/19/280-413/9841497079858.jpg?v1", "https://productimages.hepsiburada.net/s/19/280-413/9841497112626.jpg?v1", "https://productimages.hepsiburada.net/s/19/280-413/9841497145394.jpg?v1"],
    "brand": "vestel",
    "price": 4730.9,
    "cpu": "1.3GHz Apple A6",
    "camera": "8mp (3264x2448)",
    "size": "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
    "weight": "132 grams (4.7 ounces) with battery",
    "display": "4.0 326 pixel density",
    "battery": "1480 mAh",
    "memory": "16GB, 32GB and RAM 1 GB",
    "id": 7,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    "qty":1,
    "inCart":false
}, {
    "title": "Xiaomi Mi 8 Lite 128 GB (İthalatçı Garantili)",
    "category": "phone",
    "images": ["https://productimages.hepsiburada.net/s/22/280-413/9957349523506.jpg?v1", "https://productimages.hepsiburada.net/s/22/280-413/9957349556274.jpg?v1", "https://productimages.hepsiburada.net/s/22/280-413/9957349589042.jpg?v1", "https://productimages.hepsiburada.net/s/22/280-413/9957349621810.jpg?v1"],
    "brand": "xiaomi",
    "price": 5565.7,
    "cpu": "1.3GHz Apple A6",
    "camera": "8mp (3264x2448)",
    "size": "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
    "weight": "132 grams (4.7 ounces) with battery",
    "display": "4.0 326 pixel density",
    "battery": "1480 mAh",
    "memory": "16GB, 32GB and RAM 1 GB",
    "id": 8,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    "qty":1,
    "inCart":false
}, {
    "title": "Xiaomi Mi 8 Lite 64 GB (İthalatçı Garantili)",
    "category": "phone",
    "images": ["https://productimages.hepsiburada.net/s/23/280-413/10051147202610.jpg?v1", "https://productimages.hepsiburada.net/s/23/280-413/10051147235378.jpg?v1", "https://productimages.hepsiburada.net/s/23/280-413/10051147268146.jpg?v1", "https://productimages.hepsiburada.net/s/23/280-413/10051147300914.jpg?v1"],
    "brand": "xiaomi",
    "price": 5830.0,
    "cpu": "1.3GHz Apple A6",
    "camera": "8mp (3264x2448)",
    "size": "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
    "weight": "132 grams (4.7 ounces) with battery",
    "display": "4.0 326 pixel density",
    "battery": "1480 mAh",
    "memory": "16GB, 32GB and RAM 1 GB",
    "id": 9,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    "qty":1,
    "inCart":false
}, {
    "title": "Apple iPhone 7 32 GB (Apple Türkiye Garantili)",
    "category": "phone",
    "images": ["https://productimages.hepsiburada.net/s/1/280-413/9502147641394.jpg?v1", "https://productimages.hepsiburada.net/s/1/280-413/9502147674162.jpg?v1", "https://productimages.hepsiburada.net/s/1/280-413/9502147706930.jpg?v1", "https://productimages.hepsiburada.net/s/1/280-413/9502147739698.jpg?v1"],
    "brand": "apple",
    "price": 1525.62,
    "cpu": "1.3GHz Apple A6",
    "camera": "8mp (3264x2448)",
    "size": "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
    "weight": "132 grams (4.7 ounces) with battery",
    "display": "4.0 326 pixel density",
    "battery": "1480 mAh",
    "memory": "16GB, 32GB and RAM 1 GB",
    "id": 10,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    "qty":1,
    "inCart":false
}, {
    "title": "Samsung Galaxy S10 Plus 128 GB (Samsung Türkiye Garantili)",
    "category": "phone",
    "images": ["https://productimages.hepsiburada.net/s/25/280-413/10107992703026.jpg?v1", "https://productimages.hepsiburada.net/s/25/280-413/10107992735794.jpg?v1", "https://productimages.hepsiburada.net/s/25/280-413/10107992768562.jpg?v1", "https://productimages.hepsiburada.net/s/25/280-413/10107992801330.jpg?v1"],
    "brand": "samsung",
    "price": 3429.34,
    "cpu": "1.3GHz Apple A6",
    "camera": "8mp (3264x2448)",
    "size": "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
    "weight": "132 grams (4.7 ounces) with battery",
    "display": "4.0 326 pixel density",
    "battery": "1480 mAh",
    "memory": "16GB, 32GB and RAM 1 GB",
    "id": 11,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    "qty":1,
    "inCart":false
}, {
    "title": "Samsung Galaxy S10 128 GB (Samsung Türkiye Garantili)",
    "category": "phone",
    "images": ["https://productimages.hepsiburada.net/s/25/280-413/10107307425842.jpg?v1", "https://productimages.hepsiburada.net/s/25/280-413/10107307458610.jpg?v1", "https://productimages.hepsiburada.net/s/25/280-413/10107307491378.jpg?v1", "https://productimages.hepsiburada.net/s/25/280-413/10107307524146.jpg?v1"],
    "brand": "samsung",
    "price": 1017.78,
    "cpu": "1.3GHz Apple A6",
    "camera": "8mp (3264x2448)",
    "size": "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
    "weight": "132 grams (4.7 ounces) with battery",
    "display": "4.0 326 pixel density",
    "battery": "1480 mAh",
    "memory": "16GB, 32GB and RAM 1 GB",
    "id": 12,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    "qty":1,
    "inCart":false
}, {
    "title": "Samsung Galaxy S10e 128 GB (Samsung Türkiye Garantili)",
    "category": "phone",
    "images": ["https://productimages.hepsiburada.net/s/25/280-413/10107307032626.jpg?v1", "https://productimages.hepsiburada.net/s/25/280-413/10107307065394.jpg?v1", "https://productimages.hepsiburada.net/s/25/280-413/10107307098162.jpg?v1", "https://productimages.hepsiburada.net/s/25/280-413/10107307130930.jpg?v1"],
    "brand": "samsung",
    "price": 3235.2,
    "cpu": "1.3GHz Apple A6",
    "camera": "8mp (3264x2448)",
    "size": "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
    "weight": "132 grams (4.7 ounces) with battery",
    "display": "4.0 326 pixel density",
    "battery": "1480 mAh",
    "memory": "16GB, 32GB and RAM 1 GB",
    "id": 13,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    "qty":1,
    "inCart":false
}, {
    "title": "Samsung Galaxy M20 32 GB (Samsung Türkiye Garantili)",
    "category": "phone",
    "images": ["https://productimages.hepsiburada.net/s/25/280-413/10094999240754.jpg?v1", "https://productimages.hepsiburada.net/s/25/280-413/10094999273522.jpg?v1", "https://productimages.hepsiburada.net/s/25/280-413/10094999306290.jpg?v1", "https://productimages.hepsiburada.net/s/25/280-413/10094999339058.jpg?v1"],
    "brand": "samsung",
    "price": 5850.57,
    "cpu": "1.3GHz Apple A6",
    "camera": "8mp (3264x2448)",
    "size": "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
    "weight": "132 grams (4.7 ounces) with battery",
    "display": "4.0 326 pixel density",
    "battery": "1480 mAh",
    "memory": "16GB, 32GB and RAM 1 GB",
    "id": 14,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    "qty":1,
    "inCart":false
}, {
    "title": "Samsung Galaxy S8 (Samsung Türkiye Garantili)",
    "category": "phone",
    "images": ["https://productimages.hepsiburada.net/s/3/280-413/9604775739442.jpg?v1", "https://productimages.hepsiburada.net/s/4/280-413/9665566703666.jpg?v1", "https://productimages.hepsiburada.net/s/4/280-413/9665566736434.jpg?v1", "https://productimages.hepsiburada.net/s/4/280-413/9665566769202.jpg?v1"],
    "brand": "samsung",
    "price": 3207.28,
    "cpu": "1.3GHz Apple A6",
    "camera": "8mp (3264x2448)",
    "size": "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
    "weight": "132 grams (4.7 ounces) with battery",
    "display": "4.0 326 pixel density",
    "battery": "1480 mAh",
    "memory": "16GB, 32GB and RAM 1 GB",
    "id": 15,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    "qty":1,
    "inCart":false
}, {
    "title": "Huawei P Smart 2019 64 GB (Huawei Türkiye Garantili)",
    "category": "phone",
    "images": ["https://productimages.hepsiburada.net/s/23/280-413/10059934859314.jpg?v1", "https://productimages.hepsiburada.net/s/23/280-413/10059934892082.jpg?v1", "https://productimages.hepsiburada.net/s/23/280-413/10059934924850.jpg?v1", "https://productimages.hepsiburada.net/s/23/280-413/10059934957618.jpg?v1"],
    "brand": "huawei",
    "price": 5288.5,
    "cpu": "1.3GHz Apple A6",
    "camera": "8mp (3264x2448)",
    "size": "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
    "weight": "132 grams (4.7 ounces) with battery",
    "display": "4.0 326 pixel density",
    "battery": "1480 mAh",
    "memory": "16GB, 32GB and RAM 1 GB",
    "id": 16,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    "qty":1,
    "inCart":false
}, {
    "title": "Xiaomi Mi 8 128 GB (İthalatçı Garantili)",
    "category": "phone",
    "images": ["https://productimages.hepsiburada.net/s/20/280-413/9873948540978.jpg?v1", "https://productimages.hepsiburada.net/s/20/280-413/9873948573746.jpg?v1", "https://productimages.hepsiburada.net/s/20/280-413/9873948606514.jpg?v1", "https://productimages.hepsiburada.net/s/20/280-413/9873948639282.jpg?v1"],
    "brand": "xiaomi",
    "price": 1354.6,
    "cpu": "1.3GHz Apple A6",
    "camera": "8mp (3264x2448)",
    "size": "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
    "weight": "132 grams (4.7 ounces) with battery",
    "display": "4.0 326 pixel density",
    "battery": "1480 mAh",
    "memory": "16GB, 32GB and RAM 1 GB",
    "id": 17,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    "qty":1,
    "inCart":false
}, {
    "title": "Apple iPhone 6S Plus 32 GB (Apple Türkiye Garantili)",
    "category": "phone",
    "images": ["https://productimages.hepsiburada.net/s/1/280-413/9489589993522.jpg?v1", "https://productimages.hepsiburada.net/s/1/280-413/9489589927986.jpg?v1", "https://productimages.hepsiburada.net/s/1/280-413/9489589960754.jpg?v1"],
    "brand": "apple",
    "price": 5467.0,
    "cpu": "1.3GHz Apple A6",
    "camera": "8mp (3264x2448)",
    "size": "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
    "weight": "132 grams (4.7 ounces) with battery",
    "display": "4.0 326 pixel density",
    "battery": "1480 mAh",
    "memory": "16GB, 32GB and RAM 1 GB",
    "id": 18,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    "qty":1,
    "inCart":false
}, {
    "title": "Meizu 16 64 GB (Meizu Türkiye Garantili)",
    "category": "phone",
    "images": ["https://productimages.hepsiburada.net/s/24/280-413/10082399387698.jpg?v1", "https://productimages.hepsiburada.net/s/24/280-413/10082399420466.jpg?v1", "https://productimages.hepsiburada.net/s/24/280-413/10082399453234.jpg?v1", "https://productimages.hepsiburada.net/s/24/280-413/10082399486002.jpg?v1"],
    "brand": "meizu",
    "price": 1173.35,
    "cpu": "1.3GHz Apple A6",
    "camera": "8mp (3264x2448)",
    "size": "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
    "weight": "132 grams (4.7 ounces) with battery",
    "display": "4.0 326 pixel density",
    "battery": "1480 mAh",
    "memory": "16GB, 32GB and RAM 1 GB",
    "id": 19,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    "qty":1,
    "inCart":false
}, {
    "title": "Vestel Venüs E3 (Vestel Türkiye Garantili)",
    "category": "phone",
    "images": ["https://productimages.hepsiburada.net/s/20/280-413/9885707108402.jpg?v1", "https://productimages.hepsiburada.net/s/20/280-413/9885707141170.jpg?v1", "https://productimages.hepsiburada.net/s/20/280-413/9885707173938.jpg?v1"],
    "brand": "vestel",
    "price": 2371.83,
    "cpu": "1.3GHz Apple A6",
    "camera": "8mp (3264x2448)",
    "size": "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
    "weight": "132 grams (4.7 ounces) with battery",
    "display": "4.0 326 pixel density",
    "battery": "1480 mAh",
    "memory": "16GB, 32GB and RAM 1 GB",
    "id": 20,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    "qty":1,
    "inCart":false
}, {
    "title": "Asus Zenfone Max Pro ZB602KL 64 GB (Asus Türkiye Garantili)",
    "category": "phone",
    "images": ["https://productimages.hepsiburada.net/s/21/280-413/9924255121458.jpg?v1", "https://productimages.hepsiburada.net/s/21/280-413/9924255154226.jpg?v1", "https://productimages.hepsiburada.net/s/21/280-413/9924255186994.jpg?v1"],
    "brand": "asus",
    "price": 2603.5,
    "cpu": "1.3GHz Apple A6",
    "camera": "8mp (3264x2448)",
    "size": "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
    "weight": "132 grams (4.7 ounces) with battery",
    "display": "4.0 326 pixel density",
    "battery": "1480 mAh",
    "memory": "16GB, 32GB and RAM 1 GB",
    "id": 21,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    "qty":1,
    "inCart":false
}, {
    "title": "Samsung Galaxy Note 9 128 GB (Samsung Türkiye Garantili)",
    "category": "phone",
    "images": ["https://productimages.hepsiburada.net/s/20/280-413/9902572142642.jpg?v1", "https://productimages.hepsiburada.net/s/20/280-413/9902572175410.jpg?v1", "https://productimages.hepsiburada.net/s/20/280-413/9902572208178.jpg?v1", "https://productimages.hepsiburada.net/s/20/280-413/9902572240946.jpg?v1"],
    "brand": "samsung",
    "price": 1165.02,
    "cpu": "1.3GHz Apple A6",
    "camera": "8mp (3264x2448)",
    "size": "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
    "weight": "132 grams (4.7 ounces) with battery",
    "display": "4.0 326 pixel density",
    "battery": "1480 mAh",
    "memory": "16GB, 32GB and RAM 1 GB",
    "id": 22,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    "qty":1,
    "inCart":false
}, {
    "title": "Huawei Mate 20 Lite Dual Sim 64 GB (İthalatçı Garantili)",
    "category": "phone",
    "images": ["https://productimages.hepsiburada.net/s/21/280-413/9933217792050.jpg?v1", "https://productimages.hepsiburada.net/s/21/280-413/9933217660978.jpg?v1", "https://productimages.hepsiburada.net/s/21/280-413/9933217693746.jpg?v1", "https://productimages.hepsiburada.net/s/21/280-413/9933217726514.jpg?v1"],
    "brand": "huawei",
    "price": 2693.44,
    "cpu": "1.3GHz Apple A6",
    "camera": "8mp (3264x2448)",
    "size": "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
    "weight": "132 grams (4.7 ounces) with battery",
    "display": "4.0 326 pixel density",
    "battery": "1480 mAh",
    "memory": "16GB, 32GB and RAM 1 GB",
    "id": 23,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspertur!",
    "qty":1,
    "inCart":false
}],
    cartList: [
   
    ],
    currentItem:null,
    searchList:[],

}
const productReducer = (state = initialState, action) => {
    
    console.log(action.payload);

    switch (action.type) {
        case "FETCH_PRODUCTS":
            return {
                ...state,
                producList: action.payload.producList
            }
        case "ADD_TO_CART":
           
            const item = state.producList.find(
        (product) => product.id === action.payload.id
      );
      


      const inCart = state.cartList.find((item) =>
        item.id === action.payload.id ? true : false
      );
      
 

      return {
        ...state,
        cartList: inCart
          ? state.cartList.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1,}
                : item,
            )
          : [...state.cartList, {...item}],

          producList:state.producList.map((data)=>data.id==action.payload.id ? {...data,inCart:true}:{...data}),
          searchList:state.searchList.map((data)=>data.id==action.payload.id ? {...data,inCart:true}:{...data})
      };
      
        case "REMOVE_FROM_CART":
    
            return {
                ...state,
                cartList: state.cartList.filter(item=>item.id!==action.payload.id),
                producList:state.producList.map((data)=>data.id==action.payload.id ? {...data,inCart:false}:{...data,inCart:data.inCart})
               
            }
            case"UPDATE_THE_QTY":
                return{
                    ...state,
                    cartList:state.cartList.map((item)=>item.id==action.payload.id ? {...item,qty:+action.payload.value}:{...item} )
                }
                case"VIEW_ITEM":
                return{
                    ...state,
                    currentItem:action.payload
                   
                }
                case "SEARCH_ITEMS":
                    var itemSearch=state.producList.filter((item)=>item.title.toLowerCase().includes(action.payload.searchterm.toLowerCase()))
                return{
                    ...state,
                    searchList:itemSearch
                    
                    

                    

                }
                
              

        default:
            return { ...state }
    }
}

export default productReducer;