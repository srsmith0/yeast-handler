import Link from 'next/link';
import styled from 'styled-components';

const Dashboard = () => {

    return (
        <>
            <DashButton>
                <Link href='/user/addyeast'>Add New Yeast</Link>
            </DashButton>
            <DashButton>
                <Link href='/user/fermentations'>Current Yeast</Link>
            </DashButton>
            <DashButton>
                <Link href='/user/pitches'>Pitch Schedule</Link>
            </DashButton>
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