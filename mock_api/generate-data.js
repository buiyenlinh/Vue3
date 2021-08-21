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
                desciption: faker.lorem.paragraph(),
                imageUrl: faker.image.nature()
            }
            productList.push(product);
        })
    }

    
    return productList;
}

const randomPostList = (n) => {
    if (n <= 0) return []

    const postList = []
    Array.from(new Array(n)).forEach(() => {
        const post = {
            postId: faker.datatype.uuid(),
            postName: faker.random.words(),
            postContent: faker.lorem.paragraphs()
        }
        postList.push(post)
    })
    return postList;
}

const randomLogin = () => {
    const account = {
        phone: '0987654321',
        password: '12345678'
    }
    return account;
}

(() => {
    const customCategory = randomCategoryList(4);
    const customProduct = randomProductList(customCategory, 3);
    const customPostList = randomPostList(4);
    const login = randomLogin();
    const db = {
        categories: customCategory,
        products: customProduct,
        postList: customPostList,
        login: login,
        profile: {
            name: 'Yến'
        }
    }

    fs.writeFile("./mock_api/db.json", JSON.stringify(db), () => {
        console.log("Generate data successfully");
      });
})();