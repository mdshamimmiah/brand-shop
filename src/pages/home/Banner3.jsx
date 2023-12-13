import banner3 from '../../assets/banner3.png'

const Banner3 = () => {
    return (
        <div  data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
            <div className="hero min-h-screen bg-base-200 mx-auto">
                <img src={banner3} alt="" />
            </div>
        </div>
    );
};

export default Banner3;