import { Product } from "./Product";



const RecommendationsEmi = () => {
    const products = [
        {
            image: "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
            name: "Apple AirPods",
            price: 95.00,
            description: "Enjoy a seamless audio experience with the Apple AirPods."
        },
        {
            image: "https://images.unsplash.com/photo-1579811216948-6f57c19376a5?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Apple Watch Pro",
            price: 199.00,
            description: "Stay connected, active, and healthy with the Apple Watch."
        },
        {
            image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Apple MacBook",
            price: 999.00,
            description: "Experience the power and performance of the Apple MacBook."
        }
    ];


    return (<>
        <div className="flex flex-wrap">
            {products.map((product, index) => (
                <Product
                    key={index}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                />
            ))}
        </div>
    </>);
}

export default RecommendationsEmi;