import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployersList from '../employers-list/employers-list'
import EmployersAdd from '../employers-add/employers-add'
import './app.css'

const data = [
    {name: "jhon", salary: 300, increase: true, id: 1},
    {name: "lol", salary: 3300, increase: false, id: 2},
    {name: "kek", salary: 1300, increase: true, id: 3},
]

function App() {
    return (
        <div className='app'>
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployersList data={data} />
            <EmployersAdd/>

        </div>

    )
}

export default App