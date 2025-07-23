import { UserCircleIcon } from "lucide-react"
import { HeaderTop } from "./Header.styles"
import { ThemeToggle } from "../../components/theme/ThemeToggle"


export const Header: React.FC = () => {
    return(
        <HeaderTop>
            <ThemeToggle header />
            <input type="text" placeholder="Search here..." className="serachInput" ></input>
            <UserCircleIcon size={25} strokeWidth="1.5px" className="ms-2 icon" />
        </HeaderTop>
    )
}