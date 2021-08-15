const faker = require("faker");
const fs = require("fs");

faker.locale = "vi";

const randomCategoryList = (n) => {
    if (n <= 0) return []
    const categoryList = [];

    Array.from(new Array(n)).forEach(() => {
        const category = {
            id: faker.datatype.uuid(),
            name: faker.commerce.department()
        }
        categoryList.push(category)
    });

    return categoryList;
}

const randomProductList = (categoryList, n) => {
    if (n <= 0) return [];
    const productList = [];
    for (const category of categoryList) {
        Array.from(new Array(n)).forEach(() => {
            const product = {
                categoryId: category.id,
                name: faker.animal.bird(),
                price: faker.datatype.number(),
                desciption: faker.lorem.paragraph()
            }
            productList.push(product);
        })
    }

    
    return productList;
}

(() => {
    const customCategory = randomCategoryList(4);
    const customProduct = randomProductList(customCategory, 3);
    const db = {
        categories: customCategory,
        products: customProduct,
        profile: {
            name: 'Yến'
        }
    }

    fs.writeFile("./mock_api/db.json", JSON.stringify(db), () => {
        console.log("Generate data successfully");
      });
})();