import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './layout/MainLayout';
import Home from '../pages/home/Home';
import AddProduct from '../pages/home/addProduct/AddProduct';
import Apple from '../component/apple/Apple';

import MyCard from '../pages/myCard/MyCard';
import UpdateProduct from '../component/updateProduct/UpdateProduct';
import ErrorPage from '../component/errorPage/ErrorPage';
import Ponno from '../component/ponno/Ponno';
import Login from '../firebase/Login';
import PrivateRoute from '../firebase/PrivateRoute';
import Register from '../firebase/Register';
import Samsung from '../component/samsung/Samsung';
import SamsungDetails from '../component/samsung/SamsungDetails';
import Walton from '../component/walton/Walton';
import WaltonDetails from '../component/walton/WaltonDetails';
import Sony from '../component/Sony/Sony'
import SonyDetails from '../component/Sony/SonyDetails';
import Hp from '../component/Hp/Hp';
import HpDetails from '../component/Hp/HpDetails';
import Lg from '../component/Lg/Lg';
import LgDetails from '../component/Lg/LgDetails';





const myCreateRoute = createBrowserRouter([
    {

        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,

        children: [

            {

                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/apple',
                element: <PrivateRoute><Apple></Apple></PrivateRoute>,
                loader: () => fetch('https://brand-shop-server-six-beta.vercel.app/product')
            },
            {
                path: '/samsung',
                element: <PrivateRoute><Samsung></Samsung></PrivateRoute>,
                loader: () => fetch('https://brand-shop-server-six-beta.vercel.app/product')
            },

            {
                path: '/Samsung/:id',
                element: <SamsungDetails></SamsungDetails>,
                loader: ({ params }) => fetch(`https://brand-shop-server-six-beta.vercel.app/product/${params.id}`)

            },

            {
                path: '/walton',
                element: <PrivateRoute><Walton></Walton>
                </PrivateRoute>,
                loader: () => fetch('https://brand-shop-server-six-beta.vercel.app/product')
            },
            {
                path: '/Walton/:id',
                element: <WaltonDetails></WaltonDetails>,
                loader: ({ params }) => fetch(`https://brand-shop-server-six-beta.vercel.app/product/${params.id}`)

            },
            {
                path: '/sony',
                element: <PrivateRoute><Sony></Sony></PrivateRoute>,
                loader: () => fetch('https://brand-shop-server-six-beta.vercel.app/product')

            },

            {
                path: '/Sony/:id',
                element: <SonyDetails></SonyDetails>,
                loader: ({ params }) => fetch(`https://brand-shop-server-six-beta.vercel.app/product/${params.id}`)

            },


            {
                path: '/hp',
                element:<PrivateRoute><Hp></Hp></PrivateRoute>,
                loader: () => fetch('https://brand-shop-server-six-beta.vercel.app/product')

            },

            {
                path: '/Hp/:id',
                element:<HpDetails></HpDetails>,
                loader: ({ params }) => fetch(`https://brand-shop-server-six-beta.vercel.app/product/${params.id}`)

            },

            {
                path: '/lg',
                element:<PrivateRoute><Lg></Lg></PrivateRoute>,
                loader: () => fetch('https://brand-shop-server-six-beta.vercel.app/product'),
            },


            {
                path: '/Lg/:id',
                element:<LgDetails></LgDetails>,
                loader: ({ params }) => fetch(`https://brand-shop-server-six-beta.vercel.app/product/${params.id}`)

            },
            



            {
                path: '/login',
                element: <Login></Login>,

            },
            {
                path: '/register',
                element: <Register></Register>,

            },
            {
                path: '/myCard',
                element:<PrivateRoute> <MyCard></MyCard>,</PrivateRoute>,
                loader: () => fetch('https://brand-shop-server-six-beta.vercel.app/myCard'),
                
                
               
            },

            {
                path: '/updateProduct/:id',
                element: <UpdateProduct></UpdateProduct>,
                loader: ({ params }) => fetch(`https://brand-shop-server-six-beta.vercel.app/product/${params.id}`)
            },
            {
                path: '/ponno/:id',
                element: <Ponno></Ponno>,
                loader: ({ params }) => fetch(`https://brand-shop-server-six-beta.vercel.app/product/${params.id}`)

            }
        ]
    }
])

export default myCreateRoute;