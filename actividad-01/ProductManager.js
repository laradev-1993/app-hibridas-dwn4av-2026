class ProductManager{
    constructor(){
        this.products = [];
    }

    addProduct(product){
        if(!product.id || !product.name || !product.description || !product.price || !product.stock){
            console.log('El producto NO pudo agregarse');
            return;
        }

        const producto = this.products.find(p => p.id === product.id);
        if(producto){
            console.log('El producto ya existe');
            return;
        } 

        this.products.push(product);
    }

    getProducts(){
        return this.products;
    }

    getProductById(id){
        const productXid = this.products.find(p => p.id === id);
        if(!productXid){
            console.log('Not found');
        }
        return productXid;
    }
}