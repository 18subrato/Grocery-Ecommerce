import { createContext, useContext, useEffect, useState } from "react";
import { dummyProducts } from '../assets/assets'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ShopContext = createContext();


const ShopContextProvider = ({ children }) => {
    const currency = '\u20B9';
    const navigate = useNavigate();
    const [user,setUser] = useState(localStorage.getItem('Login') ? JSON.parse(localStorage.getItem('Login')) : null);
    const [products, setProducts] = useState([]);            
    const [cartItems, setCartItems] = useState([]);         
    const [userAddress, setUserAddress] = useState(null);
    const [search,setSearch] = useState('');
    async function fetchProducts() {
        setProducts(dummyProducts)
    }

    function addToCart(addProduct) {
        const existingProduct = cartItems.find((item) => item.id === addProduct._id);
        if (existingProduct) {
            setCartItems(cartItems.map((item) => item.id === addProduct._id ? { ...item, quantity: item.quantity + 1 } : item))

        } else {
            setCartItems([...cartItems, { id: addProduct._id, name: addProduct.name, price: addProduct.price, quantity: 1, image: addProduct.image[0] }]);
        }
           toast.success('Added to Cart');
    }

    function updateQuantity(removeProduct) {
        const existingProduct = cartItems.find((item) => item.id === removeProduct._id);
        if (existingProduct && existingProduct.quantity > 1) {
            setCartItems(cartItems.map((item) => item.id === removeProduct._id ? { ...item, quantity: item.quantity - 1 } : item));
        } else {
            const filtered = cartItems.filter((item) => item.id !== removeProduct._id)
            setCartItems(filtered);
        }
        toast.success('Quantity Updated')
    }



    function removeFromCart(id) {
        setCartItems(cartItems.filter((item) => item.id !== id));
        toast.success('Removed from Cart');
    }

    function getCartCount(id) {
        const existingProduct = cartItems.find((item) => item.id === id);
        if (existingProduct) {
            return existingProduct.quantity;
        } else {
            return cartItems.length;
        }
    }
    getCartCount();

    function getCartAmount(){
        const totalAmount = cartItems.reduce((acc,curElem)=>{
            return acc+(curElem.price * curElem.quantity);
        },0)

        return Math.floor(totalAmount);
    }
    useEffect(() => {
        fetchProducts();
    }, [])

    


    const value = { products, currency, navigate, addToCart, getCartCount, cartItems, updateQuantity, removeFromCart, search, setSearch, user, setUser, getCartAmount, userAddress, setUserAddress };
    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
}

export default ShopContextProvider;

export const useShopContext = () => {
    return useContext(ShopContext);
}