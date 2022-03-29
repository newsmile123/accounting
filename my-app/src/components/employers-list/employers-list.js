import EmployersListItem from "../employers-list-item/employers-list-item"
import './employers-list.css'

const EmployersList = ({data, onDelete}) => {

    

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return <EmployersListItem 
        onDelete={() => onDelete(id)} 
        key = {id} 
        {...itemProps}/>
    }) 

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployersList

