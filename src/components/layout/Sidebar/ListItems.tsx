import { Link } from "react-router-dom"



interface Props {
    Icon: React.FC<{ className: string }>;
    item: string
}

const ListItems: React.FC<Props> = ({ Icon, item }) => {
    return (
        <li>
            <Link to="#" className="flex items-center p-2 mt-4 text-primary rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <Icon className="w-5 h-5 text-primary transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ml-3">{item}</span>
            </Link>
        </li>
    )
}


export default ListItems