import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployersList from '../employers-list/employers-list'
import EmployersAdd from '../employers-add/employers-add'

import './app.css'

function App() {
    return (
        <div className='app'>
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployersList/>
            <EmployersAdd/>


        </div>

    )
}

export default App