import { useState } from "react"
import { useLawyersContext } from "../hooks/useLawyersContext"
const LawyerForm = () => {
        const [activeFilters, setActiveFilters] = useState([]);

        const handleFilter = (filter) => {
                let updatedFilters = [...activeFilters];
                
                if (updatedFilters.includes(filter)) {
                // Filter already exists, remove it from the activeFilters array
                updatedFilters = updatedFilters.filter(f => f !== filter);
                } else {
                // Filter does not exist, add it to the activeFilters array
                updatedFilters.push(filter);
                }
                setActiveFilters(updatedFilters);
                // handleFilterChange(updatedFilters); // Call the handleFilterChange function in the parent component with the updatedFilters array
                };
        /***********************************************/

        const { dispatch } = useLawyersContext()

        const [lang, setLang] = useState('');
        const [zip, setZip] = useState('');
        const [major, setMajor] = useState('');
        const [location, setLocation] = useState('');
        // const [time, setTime] = useState('');
        const [note, setNote] = useState('');

        const [hour, setHour] = useState('');
        const [minutes, setMinutes] = useState('');
        const [period, setPeriod] = useState('');
                
        const [error, setError] = useState(null)
        const [emptyFields, setEmptyFields] = useState([])

        const handleSubmit = async (e) => {
                e.preventDefault()
                console.log("are yo uhere???")
                const time = hour+":"+minutes.padStart(2, '0')+" "+period
                const lawyer = {zip, lang, major, location, time, note, complete: false}
                const response = await fetch('/api/lawyers', {
                        method: 'POST',
                        body: JSON.stringify(lawyer),
                        headers: {
                                'Content-Type': 'application/json',
                        }
                })
                const json = await response.json()
                if (!response.ok) {
                        setError(json.error)
                        setEmptyFields(json.emptyFields)
                }
                if (response.ok) {
                //         setZip('');
                //         setLang('');
                //         setMajor('');
                //         setLocation('');

                //         setHour('');
                //         setMinutes('');
                //         setPeriod('');

                //         setNote('');

                //         setError(null)
                //         setEmptyFields([])
                        console.log('new mealswipe added', json)
                //         dispatch({type: 'CREATE_MEALSWIPE', payload: json})
                }
        }

        return (
                <form className="create" onSubmit={handleSubmit()}>
                        {/* <h3>Add a New Workout</h3> */}
                        <h3>Search for a Lawyer</h3>
                        

                        <label>Prefered Language:</label>
                        <select
                        value={lang}
                        onChange={(e) => setLang(e.target.value)}
                        className={emptyFields.includes('lang') ? 'error' : ''}
                        >
                        <option value=""></option>
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        </select>

                        {/* <label>Area of law:</label>
                        <select
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        className={emptyFields.includes('lang') ? 'error' : ''}
                        >
                                <option value=""></option>
                                <option value="Immigration">Immigration</option>
                                <option value="Family">Family</option>
                                <option value="Criminal">Criminal</option>
                        </select>

                        <label>Zipcode</label>
                        <input
                        placeholder="6 digit zipcode"
                        pattern="[0-9]{5}"
                        ></input> */}

                        <button>Search for a lawyer</button>
                        {error && <div className='error'>{error}</div>}
                </form>

        )
}

export default LawyerForm