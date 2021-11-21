import Menu from "../ui/menu/menu"

const Grid = ({children}) => {
    return (
        <div className="container">
            <Menu/>
            {children}
        </div>
    )
}

export default Grid