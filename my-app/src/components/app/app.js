import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployersList from '../employers-list/employers-list'
import EmployersAdd from '../employers-add/employers-add'
import './app.css'
import React from 'react'

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {name: "jhon", salary: 300, increase: true, id: 1},
                {name: "lol", salary: 3300, increase: false, id: 2},
                {name: "kek", salary: 1300, increase: true, id: 3},
            ]
        }
        this.maxId = 4

    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.maxId++
        }
        console.log('props')
        this.setState(({data}) => {
            const newArr = [...data, newItem]
            console.log(newArr)
            return {
                data: newArr
            }
        })
    }


    render() {
        return (
            <div className='app'>
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployersList 
                    data={this.state.data} 
                    onDelete={this.deleteItem}
                />
                <EmployersAdd onAdd={this.addItem}
                />
            </div>
    
        )
    }
}

export default App