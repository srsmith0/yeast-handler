import Link from 'next/link';
import styled from 'styled-components';

const Dashboard = () => {

    return (
        <>
            <DashDiv>
            <Link href='/user/addyeast'>
                <DashButton>Add New Yeast</DashButton>
            </Link>
            <Link href='/user/fermentations'>
                <DashButton>Current Yeast</DashButton>
            </Link>
            {/* <Link href='/user/pitches'>
                <DashButton>Pitch Schedule</DashButton>
            </Link> */}
            </DashDiv>
            
        </>
    );
};

export default Dashboard;

const DashDiv = styled.div`
    text-align: center;
    padding-top: 10rem;
`

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