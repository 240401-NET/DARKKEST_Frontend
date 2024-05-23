import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../shared/types";

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const SmoothScrollLink = ({
    page,
    selectedPage,
    setSelectedPage
} : Props) => {
    const lowerCasePage = page.toLowerCase() as SelectedPage;
    
    return (
        <AnchorLink
            className = {`${selectedPage === lowerCasePage ? "text-primary-green" : "text-primary-black"}
            hover:text-primary-green transition duration-500`}
            href = {`#${lowerCasePage}`}
            onClick = {()=> setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}

export default SmoothScrollLink;