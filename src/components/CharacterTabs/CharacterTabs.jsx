import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { memo, useState } from 'react';
import './CharacterTabs.css'

class Character{
    constructor(name) {
        this.name = name;
        this.bosses = new Array(26);
        this.id = Date.now();
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
            id="character-tabs"
            defaultActiveKey="0"
            transition={false}
        >
            <Row>
                <Col sm={4} lg={2}>
                <h1 className='text-center'>Characters</h1>
                    <Nav variant="pills" className="flex-column">
                        <CreateTabs characters={characters} />
                    </Nav>
                    <Button
                        variant='outline-success' className='w-100 mt-2'
                        onClick={handleClick}>
                        + Add
                    </Button>
                </Col>
                <Col sm={8} lg={10}>
                    <h1>Information</h1>
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
            return <TabItem key={char.id} name={char.name} index={index} tabClassName/>
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