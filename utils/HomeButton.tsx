import Link from "next/link";
import styled from 'styled-components';

const HomeButton = () => {
    return <Link href='/user/dashboard'><HomeLink>Go Home</HomeLink></Link>
};

export default HomeButton;

const HomeLink = styled.button `
    font-size: 1.5rem;
    font-weight: bold;
    height: 5rem;
    width: 15rem;
    border-radius: 15px;
    background-color: #7c7109;
    &:hover {
        cursor: pointer;
        background-color: #5a5209;
    }
`