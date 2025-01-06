import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { memo, useEffect, useState } from 'react';
import './CharacterTabs.css'
import BossTracker from '../BossTracker/BossTracker';
import { Character } from '../utility/Character';
import Summary from '../Summary/Summary';


function CharacterTabs() {
    const [characters, setCharacters] = useState(() => {
        const chars = localStorage.getItem('characters');
        console.log(chars);
        return chars ? JSON.parse(chars) : [];
    });

    const updateChars = (name) => {
        setCharacters((prev) => [...prev, new Character(name)]);
        localStorage.setItem('characters', characters);
    }

    useEffect(() => {
        localStorage.setItem('characters', JSON.stringify(characters));
    }, [characters]);

    const handleAdd = () => {
        const name = prompt('Enter character name');
        if (name) {
            updateChars(name);
            console.log(characters);
        }
    }

    const handleClear = () => {
        localStorage.clear();
        setCharacters( () => []);
    }

    return (
        <Tab.Container
            id="character-tabs"
            defaultActiveKey="0"
            transition={false}
        >
            <Row>
                <Col lg={3}>
                    <h1 className='text-center'>Characters</h1>
                    <Nav variant="pills" className="flex-column">
                        <CreateTabs characters={characters} />
                    </Nav>
                    <Button
                        variant='outline-success' className='w-100 mt-2'
                        onClick={handleAdd}>
                        + Add
                    </Button>
                    <Button
                        variant='outline-danger' className='w-100 mt-2'
                        onClick={handleClear}>
                        Clear
                    </Button>
                </Col>
                <Col g={9}>
                    <h1>Information</h1>
                    <Tab.Content>
                        <CreateTabContents characters={characters} />
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}

function CreateTabs({ characters }) {
    return (
        characters.map((char) => {
            return <TabItem key={char.id} name={char.name} index={char.id} tabClassName />
        })
    );
}

function CreateTabContents({ characters }) {
    return (
        characters.map((char) => {
            return (
                <Tab.Pane key={char.id} eventKey={char.id}>
                     <BossTracker character={char}/>
                     <Summary />
                </Tab.Pane>
            )
        })
    )
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