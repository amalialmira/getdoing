import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
    {
        imgUrl:"https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2F5cc12ad5-84cc-4c57-a9b7-8af97998c704?alt=media&token=f4b37f93-42fa-4cf6-830e-2e4d32afaf61",
        url:"https://getgoing.co.id/hasil-pencarian/Prancis/Paris",
        city: "Paris",
        country: "Prancis"
    },
    {
        imgUrl:"https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2FBern-City(1).png?alt=media&token=4d7ec828-93dd-4a46-89d7-630e349135ea",
        url:"https://getgoing.co.id/hasil-pencarian/Swiss/Bern",
        city: "Bern",
        country: "Swiss"
    },
    {
        imgUrl:"https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2F82baab12-2d5f-4e42-9ae0-438bcdc1224d?alt=media&token=b8ae1420-250a-4869-b1cc-01fb66a367ae",
        url:"https://getgoing.co.id/hasil-pencarian/Belanda/Amsterdam",
        city: "Amsterdam",
        country: "Belanda"
    },
    {
        imgUrl:"https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/tripPlanner%2F1706723624lucas-davies-iP8ElEhqHeY-unsplash.jpg?alt=media&token=c191c6ec-c7d7-4c46-a3ba-7152dc06d3c2",
        url:"https://getgoing.co.id/hasil-pencarian/Inggris/London",
        city: "London",
        country: "Inggris"
    },
    {
        imgUrl:"https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2FUntitled%20design%20(19)-min.png?alt=media&token=84487726-2ddc-4ce8-838f-070b8e3d78e7",
        url:"https://getgoing.co.id/hasil-pencarian/Italia/Roma",
        city: "Roma",
        country: "Italia"
    },
    {
        imgUrl:"https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2FGallery%201.png?alt=media&token=05b1d2ee-8140-4dd2-840d-98c5223d7d82",
        url:"https://getgoing.co.id/hasil-pencarian/Swiss/zurich",
        city: "Zurich",
        country: "Swiss"
    },
    {
        imgUrl:"https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2FUntitled%20design%20(21)-min%20(1).png?alt=media&token=97a44f3f-3efd-4d7d-96be-a5764a79b37f",
        url:"https://getgoing.co.id/hasil-pencarian/Ceko/Praha",
        city: "Praha",
        country: "Ceko"
    },
    {
        imgUrl:"https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2FUntitled%20design%20(22)-min.png?alt=media&token=671d26df-88cd-4018-9ee4-261085dc4299",
        url:"https://getgoing.co.id/hasil-pencarian/jerman/berlin",
        city: "Berlin",
        country: "Jerman"
    },
    {
        imgUrl:"https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/tripPlanner%2F1695136431neil-martin-nFo5hbJTM8A-unsplash.jpg?alt=media&token=a0182101-fa13-4502-9b80-2afdfd813270",
        url:"https://getgoing.co.id/hasil-pencarian/Inggris/Liverpool",
        city: "Liverpool",
        country: "Inggris"
    },
    {
        imgUrl:"https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2F2845db6f-60f5-4cae-8150-eb36790fdb82?alt=media&token=e563b344-e9eb-4e22-8536-24ee73bae5a8",
        url:"https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2F2845db6f-60f5-4cae-8150-eb36790fdb82?alt=media&token=e563b344-e9eb-4e22-8536-24ee73bae5a8",
        city: "Istanbul",
        country: "Turki"
    },
    
]

const CityCard = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };

    return (
        <div style={{ fontFamily: "Poppins" }} className="px-20 py-5 m-auto overflow-visible">
            <div className="mt-2 gap-10 slider-container mb-10">
                <Slider {...settings}>
                    {data.map((city, idx) => (
                        <div key={idx} className="px-2 overflow-visible pt-5">
                            <div className="relative w-full h-96 cursor-pointer hover:-translate-y-2 transition-all mb-5">
                                <img
                                    src={city.imgUrl}
                                    className="w-full h-full object-cover rounded-2xl"
                                />

                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black to-transparent opacity-75" />

                                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
                                    <p className="text-white text-3xl font-bold text-start bg-opacity-50 rounded-md">
                                        {city.city}
                                    </p>
                                    <p className="text-white text-md text-start bg-opacity-50 rounded-md">
                                        {city.country}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default CityCard;