// DesignsPage.js
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import ReactDOM from 'react-dom';
import { Header } from '../../shared/components/Header/Header';
import { Footer } from "../../shared/components/Footer/Footer";
import { DesignCard } from "../../shared/components/DesignCard/DesignCard"
import { SelectFilter } from "../../shared/components/SelectFilter/SelectFilter";
import { Input } from "../../shared/components/Input/Input";
import { Button } from '../../shared/components/Button/Button';
import { Form } from '../../shared/components/Form/Form';

import './DesignsPage.scss'

export function DesignsPage() {
    const [selectedStyle, setSelectedStyle] = useState("0");
    const [selectedYear, setSelectedYear] = useState("0");
    const [loading, setLoading] = useState(true);

    let navigate = useNavigate();

    const getDesigns = async (style = "0", revers = "0") => {
        try {
            setLoading(true);
            let response = await fetch(
                `http://localhost:3000/api/GetAllDesign${style}${revers}`
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            } else {
                let designs = await response.json();

                let container = document.querySelector('.designsPage__designs_container');

                container.innerHTML = '';

                let designCards = designs.map(async (design) => {
                    let designerResponse = await fetch(`http://localhost:3000/api/GetIntraUser/${design.id}`);
                    let designerData = await designerResponse.json();

                    let photoResponse = await fetch(`http://localhost:3000/api/GetDesignPhoto/${design.photo_id}`);
                    let photoData = await photoResponse.json();

                    return (
                        <DesignCard
                            DesignerName={designerData.name}
                            DesignImage={photoData.photos[0]}
                            DesignName={design.name}
                            DesignPrice={design.price}
                            onClick={() => navigate(`/infDesign/${design.id}`)}
                        />
                    );
                });

                Promise.all(designCards).then((completedCards) => {
                    if (container) {
                        ReactDOM.render(completedCards, container);
                        setLoading(false);
                    }
                });
            }
        } catch (error) {
            console.error('Ошибка:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getDesigns(selectedStyle, selectedYear);
    }, [selectedStyle, selectedYear]);

    const handleStyleChange = (value) => {
        setSelectedStyle(value);
    };

    const handleYearChange = (value) => {
        setSelectedYear(value);
    };

    const handleResetFilters = () => {
        setSelectedStyle("0");
        setSelectedYear("0");
    };

    return (
        <div className="designsPage__body">
            <Header />
            <SelectFilter
                optionWordName="Style"
                optionWord="modern"
                optionWord2="minimalism"
                value={selectedStyle}
                onChange={handleStyleChange}
            />
            <SelectFilter
                optionWordName="Year"
                optionWord="earlier"
                optionWord2="later"
                value={selectedYear}
                onChange={handleYearChange}
            />

            <div className="designsPage__body__container">
                <button onClick={handleResetFilters}>Reset Filters</button>
                <div className="designsPage__designs_container"></div>
            </div>
            <Footer />
        </div>
    );
}


// import React, { useState, useEffect } from "react"
// import { useNavigate } from "react-router-dom";
// import ReactDOM from 'react-dom';
// import { Header } from '../../shared/components/Header/Header';
// import { Footer } from "../../shared/components/Footer/Footer";
// import { DesignCard } from "../../shared/components/DesignCard/DesignCard"
// import { SelectFilter } from "../../shared/components/SelectFilter/SelectFilter";
// import { Input } from "../../shared/components/Input/Input";
// import { Button } from '../../shared/components/Button/Button';
// import { Form } from '../../shared/components/Form/Form';


// import toast from 'react-hot-toast';

// import './DesignsPage.scss'

// export function DesignsPage() {
//     const [selectedStyle, setSelectedStyle] = useState(`http://localhost:3000/api/GetAllDesign0`);
//     const [selectedYear, setSelectedYear] = useState();

//     let navigate = useNavigate();
//     useEffect(() => {
//         async function getDesigns(style=0, revers=0) {
//             try {
//                 let response = await fetch(`http://localhost:3000/api/GetAllDesign${style}${revers}`);

//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 } else {
//                     let designs = await response.json();

//                     let container = document.querySelector('.designsPage__designs_container');

//                     container.innerHTML = '';

//                     let designCards = designs.map(async (design) => {
//                         let designerResponse = await fetch(`http://localhost:3000/api/GetIntraUser/${design.id}`);
//                         let designerData = await designerResponse.json();

//                         let photoResponse = await fetch(`http://localhost:3000/api/GetDesignPhoto/${design.photo_id}`);
//                         let photoData = await photoResponse.json();

//                         return (
//                             <DesignCard
//                                 DesignerName={designerData.name}
//                                 DesignImage={photoData.photos[0]}
//                                 DesignName={design.name}
//                                 DesignPrice={design.price}
//                                 onClick={() => navigate(`/infDesign/${design.id}`)}
//                             />
//                         );
//                     });

//                     Promise.all(designCards).then((completedCards) => {
//                         ReactDOM.render(completedCards, container);
//                     });
//                 }
//             } catch (error) {
//                 console.error('Ошибка:', error);
//             }
//         }
//         getDesigns();
//     }, []);


//     const handleStyleChange = (event) => {
//         setSelectedStyle(event.target.value);
//     };

//     const handleYearChange = (event) => {
//         setSelectedYear(event.target.value);
//     };



//     return (
//         <div className="designsPage__body">
//             <Header></Header>
//             <SelectFilter optionWordName="Style"
//                 optionWord="modern" 
//                 optionWord2="minimalism"
//                 value={selectedStyle}
//                 onChange={handleStyleChange} />
//             <SelectFilter optionWordName="Year"
//                 optionWord="earlier"
//                 optionWord2="later"
//                 value={selectedYear}
//                 onChange={handleYearChange} />

//             <div className="designsPage__body__container">
//                 <div className="designsPage__designs_container"></div>
//             </div>
//             <Footer></Footer>
//         </div>
//     );
// }
