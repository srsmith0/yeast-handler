import Link from 'next/link';
import styled from 'styled-components';

const Dashboard = () => {

    return (
        <>
            <Link href='/user/addyeast'>
                <DashButton>Add New Yeast</DashButton>
            </Link>
            <Link href='/user/fermentations'>
                <DashButton>Current Yeast</DashButton>
            </Link>
            <Link href='/user/pitches'>
                <DashButton>Pitch Schedule</DashButton>
            </Link>
            
        </>
    );
};

export default Dashboard;

const DashButton = styled.button `
    height: 5rem;
    width: 15rem;
    border-radius: 15px;
    background-color: #7c7109;
    &:hover {
        cursor: pointer;
        background-color: #5a5209;
    }
    
`