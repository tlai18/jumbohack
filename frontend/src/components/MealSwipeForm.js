import { useState } from "react"
import { useMealSwipesContext } from "../hooks/useMealSwipesContext"
const MealSwipeForm = () => {
        const { dispatch } = useMealSwipesContext()

        const [name, setName] = useState('');
        const [year, setYear] = useState('');
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
                
                const time = hour+":"+minutes.padStart(2, '0')+" "+period
                const mealswipe = {name, year, major, location, time, note, complete: false}
                const response = await fetch('/api/mealswipes', {
                        method: 'POST',
                        body: JSON.stringify(mealswipe),
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
                        setName('');
                        setYear('');
                        setMajor('');
                        setLocation('');

                        setHour('');
                        setMinutes('');
                        setPeriod('');

                        setNote('');

                        setError(null)
                        setEmptyFields([])
                        console.log('new mealswipe added', json)
                        dispatch({type: 'CREATE_MEALSWIPE', payload: json})
                }
        }

        return (
                <form className="create" onSubmit={handleSubmit}>
                        {/* <h3>Add a New Workout</h3> */}
                        <h3>Request a Meal Swipe</h3>
                        <label>Name:</label>
                        <input 
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className={emptyFields.includes('name') ? 'error' : ''}
                        />

                        <label>Year:</label>
                        <select
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        className={emptyFields.includes('year') ? 'error' : ''}
                        >
                        <option value=""></option>
                        <option value="Freshman">Freshman</option>
                        <option value="Sophomore">Sophomore</option>
                        <option value="Junior">Junior</option>
                        <option value="Senior">Senior</option>
                        </select>
                        
                        <label>Major:</label>
                        <input 
                        type="text"
                        onChange={(e) => setMajor(e.target.value)}
                        value={major}
                        className={emptyFields.includes('major') ? 'error' : ''}
                        list="wordList"
                        pattern="|Computer Science|Biology|Chemistry|Electrical Engineering|Mechanical Engineering" required
                        />
                        
                        <datalist id="wordList">
                                <option value="Computer Science"/>
                                <option value="Biology"/>
                                <option value="Chemistry"/>
                                <option value="Electrical Engineering"/>
                                <option value="Mechanical Engineering"/>
                        </datalist>

                        
                        <label>Location:</label>
                        <select
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className={emptyFields.includes('year') ? 'error' : ''}
                        >
                        <option value=""></option>
                        <option value="Dewick">Dewick</option>
                        <option value="Carm">Carm</option>
                        <option value="SEC">Carm</option>
                        </select>

                        <label>Time:</label>
                        <div className={`time-input ${emptyFields.includes('time') ? 'error' : ''}`}>
                                <input
                                type="text"
                                onChange={(e) => setHour(e.target.value)}
                                value={hour}
                                placeholder="HH"
                                maxLength={2}
                                minLength={1}
                                />

                                <input
                                type="text"
                                onChange={(e) => setMinutes(e.target.value)}
                                value={minutes}
                                placeholder="MM"
                                maxLength={2}
                                minLength={1}
                                />

                                <select
                                onChange={(e) => setPeriod(e.target.value)}
                                value={period}
                                >
                                <option value="">AM/PM</option>
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                                </select>
                        </div>

                        <label>Why me:</label>
                        <input 
                        type="text"
                        onChange={(e) => setNote(e.target.value)}
                        value={note}
                        placeholder="I'm starving save me pls :("
                        />

                        <button>Request Meal Swipe</button>
                        {error && <div className='error'>{error}</div>}
                </form>

        )
}

export default MealSwipeForm