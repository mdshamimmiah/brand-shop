import banner2 from '../../assets/banner2.jpg'

const Banner2 = () => {
    return (
        <div  data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
            <div className="hero min-h-screen bg-base-200 mx-auto">
                <img src={banner2} alt="" />
            </div>
        </div>
    );
};

export default Banner2;