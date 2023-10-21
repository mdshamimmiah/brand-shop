
import { useLoaderData } from "react-router-dom";

import MyCardDataLoad from "./MyCardDataLoad";


const MyCard = () => {

    const cart = useLoaderData();
    // const [addToCard, setAddToCard] = useState(cart);
    
    // const { user } = useContext(AuthContext);
    // const email = user?.email;

    // useEffect(() => {
    //     const file = cart?.filter(card => card.email == email)
    //     setAddToCard(file);
    // }, [cart])


    return (
        <div>
            
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5">
        
            {

                cart?.map(data => <MyCardDataLoad key={data._id} MyCard={data}></MyCardDataLoad> )
            }
        </div>

        </div>
    );
};

export default MyCard;