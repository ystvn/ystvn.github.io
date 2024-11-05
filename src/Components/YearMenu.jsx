import Dropdown from 'react-bootstrap/Dropdown';

function YearMenu() {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic" className='mx-2'>
                Year
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item>2023</Dropdown.Item>
                <Dropdown.Item>2024</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default YearMenu;