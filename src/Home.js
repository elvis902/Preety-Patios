import React,{useState, useEffect} from 'react'
import './Home.css'
import Product from './Product'
import {database} from './firebase'
import { ref, onValue, off} from "firebase/database";
import { useStateValue } from './ServiceProvider';
import {auth} from './firebase'

function Home() {
    const [products, setProducts] = useState([{}])
    const [basketProductIds, setBasketProductIds] = useState([]);
    const [{basket, user}, dispatch] = useStateValue()
    
    useEffect(()=>{
        if(!user) return;

        const path = 'users/'+user.uid + "/basket";
        const userRef = ref(database, path);
        onValue(userRef, (snapshot)=>{
            let basketProductIdList = [];
            snapshot.forEach(snap =>{
                basketProductIdList.push(snap.val())
            });
            setBasketProductIds(basketProductIdList);
        })

        return () =>{
            const path = 'users/'+user.uid + "/basket";
            const userRef = ref(database, path);
            off(userRef)
        }
    },[user])

    useEffect(()=>{
        const productsRef = ref(database, 'adds/');
        onValue(productsRef, (snapshot) => {
            let productList = [];
            snapshot.forEach(snap =>{
                productList.push(snap.val())
            });
            setProducts(productList);
          });

         return ()=>{
            const productsRef = ref(database, 'adds/');
            off(productsRef)
         }
    }, [])

    useEffect(()=>{
        if(!user) return;

        const path = 'users/'+user.uid;
        const userRef = ref(database, path);
        onValue(userRef, (snapshot)=> {
            const userInfo = snapshot.val(); 
            dispatch({
                type: "SET_USER_INFO",
                userinfo: userInfo
            })

            return ()=>{
                off(userRef)
            }
     });
    },[user])

    useEffect(()=>{
        if(!user) return;
        let basketProductsList = [];
        products.forEach(product => {
            if(basketProductIds.includes(product.id))
            {
                basketProductsList.push(product)
            }
        })
        dispatch({
            type: "LOAD_BASKET",
            basketProductsList: basketProductsList
        })

    },[products, basketProductIds, user])
    
    return (
        <div className='home'>
            <h1>Featured Product</h1>

            <div className='home__row'>
                {
                     products.map( product => {
                        return (
                          <Product key={product.id} product={product}/>
                        ) 
                       })
                }
            </div>
            {/* <div className='home__row'>
            <Product
                    id="123654"
                    title="Nutrient-rich general purpose potting soil mix - 5 kg"
                    price={399}
                    rating={4}
                    image="https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-soil-and-fertilizers-nutrient-rich-general-purpose-potting-soil-mix-5-kg-16969046098060_600x600.jpg?v=1634224986"
                />
                 <Product
                    id="123654"
                    title="Aloe vera - Succulent Plant"
                    price={249}
                    rating={5}
                    image="https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-aloe-vera-succulent-plant-16968585871500_869x869.jpg?v=1634213151"
                />
                 <Product
                    id="123654"
                    title="Piper Betel, Maghai Paan - Plant"
                    price={349}
                    rating={5}
                    image="https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-piper-betel-maghai-paan-plant-16969203187852_600x600.jpg?v=1634226202"
                />
            </div>
            <div className='home__row'>
            <Product
                    id="123654"
                    title="Top 5 Fruits Plants to Grow in Pot"
                    price={1199}
                    rating={5}
                    image="https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-combo-packs-plants-top-5-fruits-plants-to-grow-in-pot-16969389408396_600x600.jpg?v=1634230318"
                />
            </div> */}
        </div>
    )
}

export default Home
