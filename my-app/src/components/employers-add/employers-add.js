import './employers-add.css'
import React from 'react';

class EmployersAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: 0
        }
    }
    addChange = (e) => {
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
        console.log(e.target.value)
    }
   

    onSubmit = (e) => {
        e.preventDefault();
        console.log('subity')
        this.props.onAdd(this.state.name, this.state.salary)
        this.setState({
            name: '',
            salary: ''
        })
    }
  

    render() {

        const {name, salary} = this.state
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    onSubmit={this.onSubmit}
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" 
                        onChange={this.addChange}
                        name="name"
                        value={name}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        onChange={this.addChange}
                        name="salary"
                        value={salary}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployersAdd