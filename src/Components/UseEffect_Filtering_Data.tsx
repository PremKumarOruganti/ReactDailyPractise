/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react'

const UseEffect_Filtering_Data = () => {
    const [drinksData, setDrinksData] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [loading, setLoading] = useState(false)
    const [isError, setIsError] = useState({ status: false, msg: '' })
    const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
    const fetchDrink = async (URL: any) => {
        setLoading(true)
        setIsError({ status: false, msg: '' })
        try {
            const response = await fetch(URL);
            const { drinks } = await response.json()
            console.log('data', drinks);
            setDrinksData(drinks)
            setLoading(false)
            setIsError({ status: false, msg: '' })
            if (!drinks) {
                throw new Error("Data Not Found")
            }
        }
        catch (error) {
            console.log(error);
            setLoading(false)
            setIsError({ status: true, msg: 'something went wrong....' })
        }
    }

    useEffect(() => {
        const correctURL = `${URL}${searchTerm}`
        fetchDrink(correctURL)
    }, [searchTerm])
    return (
        <>
            <div>APIData:{drinksData.length}</div>
            <form>
                <input
                    type='text'
                    id='search'
                    placeholder='search something Here ....'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </form>
            <hr />
            {loading && !isError?.status && <h3>Loading...</h3>}
            {isError?.status && <h3 style={{ color: 'red' }}>{isError.msg}</h3>}
            {!loading && !isError?.status && <ul className='cocktail-data'>
                {
                    drinksData.map((eachItem) => {
                        const { idDrink, strDrink, strDrinkThumb } = eachItem;
                        return (


                            <li key={idDrink}>
                                <div>
                                    <img src={strDrinkThumb} alt={strDrink} />
                                </div>



                                <div>
                                    <h3>{strDrink}</h3>
                                </div>
                            </li>

                        )
                    })
                }
            </ul>
            }
        </>
    )
}

export default UseEffect_Filtering_Data