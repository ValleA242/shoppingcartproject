// provides access to product info. In this case we would be populating Amazon data. We'll figure this out when we get into the code base for Give Gab 

const productArray = [
    {
        id: "1",
        title: "coffee",
        price: "4.50"

    },

    {
        id: "2",
        title: "dog food",
        price: "50"

    },

    {
        id: "3",
        title: "TShirt Pack",
        price: "10"

    },
]

function getProductData(id) {

    let productData = productArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log('Product does not exist for ID: ' + id);
        return 'Undefined'
    }

    return productData;

}

export { productArray };
