import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './ProductList.css';
import CartItem from './CartItem';
import { addItem } from './CartSlice';

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description: "Produces oxygen at night, improving air quality.",
          cost: "$15"
        },
        {
          name: "Spider Plant",
          image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
          description: "Filters formaldehyde and xylene from the air.",
          cost: "$12"
        },
        {
          name: "Peace Lily",
          image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
          description: "Removes mold spores and purifies the air.",
          cost: "$18"
        },
        {
          name: "Boston Fern",
          image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
          description: "Adds humidity and removes toxins.",
          cost: "$20"
        },
        {
          name: "Rubber Plant",
          image: "https://cdn.pixabay.com/photo/2014/10/10/21/36/ficus-483709_1280.jpg",
          description: "Easy to care for and removes toxins.",
          cost: "$17"
        },
        {
          name: "Aloe Vera",
          image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
          description: "Purifies air and has healing properties.",
          cost: "$14"
        }
      ]
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        {
          name: "Lavender",
          image: "https://cdn.pixabay.com/photo/2020/06/04/17/36/lavender-5259716_1280.jpg",
          description: "Calming scent, helps with relaxation.",
          cost: "$20"
        },
        {
          name: "Jasmine",
          image: "https://cdn.pixabay.com/photo/2015/08/09/00/27/jasmine-880971_1280.jpg",
          description: "Sweet fragrance, perfect for bedrooms.",
          cost: "$18"
        },
        {
          name: "Rosemary",
          image: "https://cdn.pixabay.com/photo/2015/12/13/00/11/rosemary-1090419_1280.jpg",
          description: "Aromatic herb with culinary uses.",
          cost: "$15"
        },
        {
          name: "Mint",
          image: "https://cdn.pixabay.com/photo/2017/07/12/12/46/peppermint-2496773_1280.jpg",
          description: "Refreshing scent and great for teas.",
          cost: "$12"
        },
        {
          name: "Lemon Balm",
          image: "https://cdn.pixabay.com/photo/2015/05/04/12/46/lemon-balm-752234_1280.jpg",
          description: "Citrusy scent that uplifts mood.",
          cost: "$14"
        },
        {
          name: "Hyacinth",
          image: "https://cdn.pixabay.com/photo/2016/03/09/09/43/hyacinth-1245865_1280.jpg",
          description: "Intensely fragrant spring bloomer.",
          cost: "$22"
        }
      ]
    },
    {
      category: "Insect Repellent Plants",
      plants: [
        {
          name: "Oregano",
          image: "https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg",
          description: "Contains compounds that repel insects.",
          cost: "$10"
        },
        {
          name: "Marigold",
          image: "https://cdn.pixabay.com/photo/2016/08/28/23/24/sunflower-1627193_1280.jpg",
          description: "Natural insect repellent, adds color.",
          cost: "$8"
        },
        {
          name: "Geraniums",
          image: "https://cdn.pixabay.com/photo/2017/05/08/13/15/spring-2295434_1280.jpg",
          description: "Repels mosquitoes with citronella scent.",
          cost: "$14"
        },
        {
          name: "Basil",
          image: "https://cdn.pixabay.com/photo/2016/01/13/17/48/basil-1138920_1280.jpg",
          description: "Repels flies and mosquitoes.",
          cost: "$9"
        },
        {
          name: "Catnip",
          image: "https://cdn.pixabay.com/photo/2015/07/02/21/16/cat-831181_1280.jpg",
          description: "Repels mosquitoes better than DEET.",
          cost: "$13"
        },
        {
          name: "Petunias",
          image: "https://cdn.pixabay.com/photo/2016/09/06/10/31/petunia-1648249_1280.jpg",
          description: "Natural pest control for gardens.",
          cost: "$11"
        }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prev) => ({
      ...prev,
      [plant.name]: true
    }));
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const calculateTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div>
      <div className="navbar">
        <div className="tag">
          <div className="luxury">
            <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
            <a href="/" style={{ textDecoration: 'none' }}>
              <div>
                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
              </div>
            </a>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className="cart" onClick={handleCartClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="68" width="68">
              <circle cx="80" cy="216" r="12"></circle>
              <circle cx="184" cy="216" r="12"></circle>
              <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,180,176H84a15.9,15.9,0,0,1-15.3-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
            <span className="cart-quantity">{calculateTotalQuantity()}</span>
          </div>
        </div>
      </div>
      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category, index) => (
            <div key={index}>
              <h1><center>{category.category}</center></h1>
              <div className="product-list">
                {category.plants.map((plant, plantIndex) => (
                  <div className="product-card" key={plantIndex}>
                    <img className="product-image" src={plant.image} alt={plant.name} />
                    <div className="product-title">{plant.name}</div>
                    <div className="product-price">{plant.cost}</div>
                    <div className="product-description">{plant.description}</div>
                    <button
                      className={`product-button ${addedToCart[plant.name] ? 'added' : ''}`}
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedToCart[plant.name]}
                    >
                      {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;