import POPOSSpace from "../POPOSSpace/POPOSSpace"
import data from '../../sfpopos-data.json';
import './POPOSList.css';
import { useState } from 'react'

function POPOSList() {
    const [query, setQuery] = useState('')
    const spaces = data
      .filter(obj => obj.title.toLowerCase().includes(query.toLowerCase()) || obj.address.toLowerCase().includes(query.toLowerCase()))
      .map(({ id, title, address, images, hours }) => {
        return (
          <POPOSSpace
            id={id}
            key={`${title}-${id}`}
            name={title}
            address={address}
            image={images[0]}
            hours={hours}
          />
        )
      })

    return (
        <div>
            <div className="formWrapper">
                <form>
                    <input
                    value={query}
                    placeholder="search"
                    onChange={(e) => setQuery(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="POPOSList">
                {spaces}
            </div>
        </div>
    )
}

export default POPOSList

// ***** manually inputting data for each example: *****

// function POPOSList() {
//     return (
//         <div className="POPOSList">
//             <POPOSSpace
//                 name="50 California Street"
//                 address="50 California St."
//                 image="50-california-st.jpg"
//             />
//             <POPOSSpace
//             name="100 Pine"
//             address="100 Pine"
//             image="100-pine.jpg"
//             />
//             <POPOSSpace
//             name="101 California Street"
//             address="101 California St."
//             image="101-california.jpg"
//             />
//             <POPOSSpace 
//             name="Citigroup Center"
//             address="Citigroup Center"
//             image="citigroup-center.jpg"
//             />
//             <POPOSSpace
//             name="Garden Terrace at 150 California"
//             address="Garden Terrace at 150 California"
//             image="garden-terrace-at-150-california.jpg"
//             />
//             <POPOSSpace
//             name="Transamerica Redwood Park"
//             address="Transamerica Redwood Park"
//             image="transamerica-redwood-park.jpg"
//             />
//         </div>
//     )
// }