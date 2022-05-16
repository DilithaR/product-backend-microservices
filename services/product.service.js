const Product = require('../models/product.model');

const addProduct = async (request, response) => {

    const product = new Product(request.body);

    console.log(product);


    await product.save((error, product) => {
        if(error){
            response.status(500).json({ error: error.message });
            console.log(error.message)
        }
        else{
            response.status(200).
            json({
                success: true,
                product: product
            })
        }
    });
}

const getProduct = async(request, response) => {
    try {
        Product.findById(request.params.id, (error, data) => {
            if (error) {
                response.status(500).json({error: error.message});
            } else {
                response.status(200).json({
                    success: true,
                    product: data
                })
            }
        })
    } catch (e) {
        console.log(e);
    }
}
const getProducts = async (request, response) => {

    try{
        const product = await Product.find();
        response.status(200).
        json({
            success: true,
            product: product
        })
    } catch (error) {
        response.status(404).json({
            success: false,
            error: error.message
        });
    }
}

//change
const updateProduct = async (request, response) => {
    const product = new Product(request.body);

    await Product.findByIdAndUpdate(request.body._id,product,
        (error,product) => {
            if(error){
                console.log(error);
                response.status(500).json({ error: error.message });
            }
            else{
                response.status(200).
                json({
                    success: true,
                    product: product
                })
            }
        });
}

const deleteProduct = async (request, response) => {
    await Product.findByIdAndRemove(request.params.id,(error,product) => {
        if(error){
            response.status(500).json({ error: error.message });
        }
        else{
            response.status(200).
            json({
                success: true,
                product: product
            })
        }
    })
}




module.exports = {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
}
