// Main.js
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaCheck } from "react-icons/fa";
import "./Main.css";
import Categories from "../categories/Categories";
import Review from "../Review/Review";
import Popularproducts from "../Popularproducts/Popularproducts";
//import axios from "axios";

const Main = () => {
  const slides = [
    {
      id: 1,
      title: "Feel the Freshness",
      description: "Experience the best quality.",
      bgColor: "#f8b400",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZMKcHj_tKUoFUmcR1G18DsKsEcuhR1WpfkhdoMvkziKWlNj_EP1Igmt_ZHjJlO_d4l1U&usqp=CAU",
    },
    {
      id: 2,
      title: "Organic and Healthy",
      description: "Pure, natural, and organic.",
      bgColor: "#4caf50",
      image:
        "https://indianexpress.com/wp-content/uploads/2018/03/oragnic-food.jpg",
    },
    {
      id: 3,
      title: "Farm Fresh Products",
      description: "From our farms to your table.",
      bgColor: "#ff6347",
      image:
        "https://foodchainmagazine.com/wp-content/uploads/sites/10/2023/11/Farm-fresh-image-800x445.jpeg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0); // Holds the index of the current slide

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  //const [slides, setSlides] = useState([]); // Holds the fetched slide data
  //const [currentSlide, setCurrentSlides] = useState(0); // Holds the index of the current slide

  /* useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:2024/api/admin/getslides"
        );
        setSlides(response.data); // Assuming response.data is an array of slides
      } catch (error) {
        console.error("Error fetching slides:", error);
      }
    };

    fetchProducts();
  }, []);

  const nextSlide = () => {
    setCurrentSlides((prev) => (prev + 1) % slides.length); // Loop back to the first slide
  };

  const prevSlide = () => {
    setCurrentSlides((prev) => (prev === 0 ? slides.length - 1 : prev - 1)); // Loop back to the last slide
  };*/

  const categories = [
    {
      name: "Citrus Fruits",
      image:
        "https://www.thespruceeats.com/thmb/FqFQLMtA8PhdZWyw167fVBOx200=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/citrus_hero1-34ada1a25b254f43864ebc62864195cd.jpg",
    },
    {
      name: "Berries & Nuts",
      image:
        "https://media.gettyimages.com/id/182187173/photo/isolated-berries.jpg?s=612x612&w=0&k=20&c=iBBvIdL39XuHATGIlNkKn6nAHfE_BTWkHiOs49IWlFU=",
    },
    {
      name: "Tropical",
      image:
        "https://thumbs.dreamstime.com/z/tropical-fruits-2460967.jpg?ct=jpeg",
    },
    {
      name: "Frozen",
      image:
        "https://img2.exportersindia.com/product_images/bc-small/2023/3/11757315/watermark/frozen-fruits-1677665907-6784365.jpeg",
    },
    {
      name: "Dessert",
      image:
        "https://www.tasteofhome.com/wp-content/uploads/2018/01/Ice-Cream-Sandwich-Dessert_EXPS_FT22_27091_ST_09_07_1.jpg?fit=300,300&webp=1",
    },
    {
      name: "Ice Cream",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg/220px-Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg",
    },
  ];

  /*const product = {
    discounted: [
      {
        id: 1,
        name: "Handmade red wine",
        originalPrice: "$83.99",
        salePrice: "$41.99",
        status: "Expired",
        inStock: true,
        image: "wine.png",
      },
      {
        id: 2,
        name: "Split kiwi",
        originalPrice: "$11.49",
        salePrice: "$9.99",
        status: "Expired",
        inStock: true,
        image: "kiwi.png",
      },
      // ... add more products as needed
    ],
  };*/
  const brands = [
    {
      id: 1,
      name: "Brand 1",
      logo: "https://i.pinimg.com/originals/52/2a/7e/522a7e57d16d86e8193df73e674d1f7a.png",
    },
    {
      id: 2,
      name: "Brand 2",
      logo: "https://png.pngtree.com/png-clipart/20220911/original/pngtree-shopping-logo-deisgn-modern-style-with-bag-png-image_8549828.png",
    },
    {
      id: 3,
      name: "Brand 3",
      logo: "https://png.pngtree.com/png-clipart/20220125/original/pngtree-grocery-store-logo-design-png-png-image_7223805.png",
    },
    {
      id: 4,
      name: "Brand 4",
      logo: "https://i.pinimg.com/originals/c3/8a/4a/c38a4af073fb0bd939efedac69d73265.png",
    },
    {
      id: 5,
      name: "Brand 5",
      logo: "https://www.logolynx.com/images/logolynx/38/3875581ae5de82cfac8b26e0a58b87ce.png",
    },
    {
      id: 2,
      name: "Brand 2",
      logo: "https://png.pngtree.com/png-clipart/20220911/original/pngtree-shopping-logo-deisgn-modern-style-with-bag-png-image_8549828.png",
    },
    {
      id: 3,
      name: "Brand 3",
      logo: "https://png.pngtree.com/png-clipart/20220125/original/pngtree-grocery-store-logo-design-png-png-image_7223805.png",
    },
    {
      id: 4,
      name: "Brand 4",
      logo: "https://i.pinimg.com/originals/c3/8a/4a/c38a4af073fb0bd939efedac69d73265.png",
    },
    // Add more brands if needed
  ];

  const promos = [
    {
      id: 1,
      backgroundColor: "#FFD700",
      label: "EXTRA 10% OFF – LIMITED TIME ONLY!",
      title: "Your One-Stop Shop for Freshness and Quality",
      options: ["FRUITS", "VEGETABLES", "SEAFOOD"],
      textColor: "#8B4513",
      labelColor: "#FF4500",
    },
    {
      id: 2,
      backgroundImage:
        "https://t4.ftcdn.net/jpg/00/65/70/65/360_F_65706597_uNm2SwlPIuNUDuMwo6stBd81e25Y8K8s.jpg", // Replace with actual URL
      label: "FRUITS",
      title: "Pure Refreshment in Every Sip of Our Juices",
      buttonText: "See More Products",
      buttonColor: "#00A572",
      textColor: "#FFFFFF",
    },
  ];

  return (
    <div className="App">
      {/* Carousel with Side Columns */}
      <div className="main-section">
        {slides.length > 0 && (
          <div className="carousel">
            <div>
              <img
                className="carousel-slide"
                src={slides[currentSlide].image}
                alt="Slide"
              />
              <h2>{slides[currentSlide].title}</h2>
              <p>{slides[currentSlide].description}</p>
              <button className="carousel-button">Shop Now</button>
            </div>
            <button className="carousel-control left" onClick={prevSlide}>
              <FaArrowLeft />
            </button>
            <button className="carousel-control right" onClick={nextSlide}>
              <FaArrowRight />
            </button>
          </div>
        )}
        <div className="side-columns">
          <div className="side-column">
            <img
              src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4"
              alt="Featured Product 1"
            />
          </div>
          <div className="side-column">
            <img
              src="https://images.meesho.com/images/products/296126349/mvcva_512.webp"
              alt="Featured Product 2"
            />
          </div>
        </div>
      </div>

      <div className="marquee-container">
        <div className="marquee-text">
          <span className="special-text">10% discount</span> for new memberships{" "}
          <span className="special-text">10% discount</span> for new memberships{" "}
          <span className="special-text">10% discount</span> for new memberships{" "}
          <span className="special-text">10% discount</span> for new memberships{" "}
          <span className="special-text">10% discount</span> for new memberships{" "}
          <span className="special-text">10% discount</span> for new memberships
        </div>
      </div>

      {/* Categories Section */}
      <div className="category-section">
        <div className="category-row">
          <h2>Most Searched Categories</h2>
          <button className="Category_Button">
            All Categories <FaArrowRight />
          </button>
        </div>
        <div className="categories">
          {categories.map((category, index) => (
            <div key={index} className="category-item">
              <img src={category.image} alt={category.name} />
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="containerbigger">
        <div className="labels-row">
          <span className="label-container1">Trend products</span>
          <span className="label-container2">
            Extra 10% Off – Limited Time Only!
          </span>
        </div>
        <h1>Refreshing Drinks, Feel the Freshness!</h1>
        <div className="options-row">
          <ul className="option">
            <li>T-shirts</li>
            <li>Blazers</li>
            <li>Skirts</li>
            <li>Jeans</li>
          </ul>
          <button className="arrow-button">
            Check Products <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Popular Products Section */}
      <Categories />

      {/* Product Reviews Section */}
      <Review />

      {/* Highlight Section */}
      <div className="promo-container">
        {promos.map((promo) => (
          <div
            key={promo.id}
            className="promo-section"
            style={{
              backgroundColor: promo.backgroundColor || "transparent",
              backgroundImage: promo.backgroundImage
                ? `url(${promo.backgroundImage})`
                : "none",
              color: promo.textColor,
            }}
          >
            <div
              className="promo-label"
              style={{ backgroundColor: promo.labelColor || "transparent" }}
            >
              {promo.label}
            </div>
            <h2 className="promo-title">{promo.title}</h2>

            {promo.options && (
              <ul className="promo-options">
                {promo.options.map((option, index) => (
                  <li key={index}>
                    <FaCheck className="check-icon" /> {option}
                  </li>
                ))}
              </ul>
            )}

            {promo.buttonText && (
              <button
                className="promo-button"
                style={{ backgroundColor: promo.buttonColor }}
              >
                {promo.buttonText}
              </button>
            )}
          </div>
        ))}
      </div>

      <Popularproducts />

      <div className="container">
        <div className="left-div">
          <span className="labeltext">Extra 10% Off – Limited Time Only!</span>
          <h2>Timeless Style: The Ultimate Men's Wardrobe Essentials</h2>
          <ul className="list">
            <li>FRUITS</li>
            <li>VEGETABLES</li>
            <li>SEAFOOD</li>
          </ul>
        </div>
        <div className="right-div">
          <h4>Breakfast</h4>
          <h2>Experience the Warmth of Freshly Baked Goodness</h2>
          <p>
            Quench your thirst with our refreshinf beverages, prefect for any
            time of the day
          </p>
          <button className="MoreProductsbtn">See More Products</button>
        </div>
      </div>

      {/* Search by Brand Section */}

      <div className="brand-section">
        <div className="searchbrand">
          <h2>Search by Brand</h2>
          <button className="all-brands-btn">All Brands ➔</button>
        </div>
        <div className="brands">
          {brands.map((brand) => (
            <div key={brand.id} className="brand-logo">
              <img src={brand.logo} alt={brand.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
