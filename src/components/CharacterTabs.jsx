import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { Button } from 'react-bootstrap';
import { memo, useState } from 'react';
import PropTypes from 'prop-types';

class Character{
    constructor(name) {
        this.name = name;
        this.bosses = new Array(26);
    }
}

function CharacterTabs() {

    const [characters, setCharacters] = useState([]);

    const updateChars = (name) => {
        setCharacters((prev) => [...prev, new Character(name)]);
    }

    const handleClick = () => {
        const name = prompt('Enter character name');
        updateChars(name);
        console.log(characters);
    }

    return (
        <Tab.Container
            id="left-tabs"
            defaultActiveKey="0"
            transition={false}
        >
            <Row>
                <Col sm={2}>
                    <Nav variant="pills" className="flex-column">
                        <CreateTabs characters={characters} />
                    </Nav>
                    <Button
                        variant='outline-success' className='w-100'
                        onClick={handleClick}>
                        + Add
                    </Button>
                </Col>
                <Col sm={10}>
                    <Tab.Content>
                        <Tab.Pane eventKey="1">
                            First tab content
                        </Tab.Pane>
                        <Tab.Pane eventKey="2">
                            2nd tab stuff
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}

function CreateTabs({ characters }) {
    return (
        characters.map((char, index) => {
            return <TabItem key={index} name={char.name} index={index} />
        })
    );
}

const TabItem = memo(({ name, index }) => {
    console.log(name)
    return (
        <Nav.Item key={index}>
            <Nav.Link eventKey={index}>{name}</Nav.Link>
        </Nav.Item>
    );
});

TabItem.displayName = "TabItem";
TabItem.propTypes = {
    name: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
}

export default CharacterTabs;