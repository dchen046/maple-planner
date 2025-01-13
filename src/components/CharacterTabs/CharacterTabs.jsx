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
    const [isLoading, setLoading] = useState(true);
    const [characters, setCharacters] = useState(() => {
        const chars = localStorage.getItem('characters');
        return chars ? JSON.parse(chars) : {};
    });

    const updateChars = (name) => {
        setCharacters((prev) => ({
            ...prev,
            [name]: new Character(name),
        }));
    }

    useEffect(() => {
        localStorage.setItem('characters', JSON.stringify(characters));
        console.log(`what is saved: `);
        console.log(characters);
        setLoading(false);
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
        setCharacters(() => []);
    }

    return (
        <Tab.Container
            id="character-tabs"
            defaultActiveKey="0"
            transition={true}
        >
            <Row>
                <Col lg={2}>
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

                <Col lg={10}>
                    <h1>Information</h1>
                    <Tab.Content>
                        {isLoading ? 'Loadnig...' : <CreateTabContents characters={characters} setCharacters={setCharacters} />}
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}

function CreateTabs({ characters }) {
    console.log('Creating Tabs');
    return (
        Object.keys(characters).map((char) => {
            const character = characters[char];
            return <TabItem key={character.id} name={character.name} index={character.id} tabClassName />
        })
    );
}

function CreateTabContents({ characters, setCharacters }) {
    return (
        Object.keys(characters).map((char) => {
            const character = characters[char];
            const handleDelete = () => {
                setCharacters((prev) => {
                    const newChars = { ...prev }
                    delete newChars[char]
                    return newChars;
                })
            }

            return (
                <Tab.Pane key={character.id} eventKey={character.id}>
                    <Row>
                        <Col lg={4}>
                            <h3>Weekly Bosses</h3>
                            <Summary character={character} />
                            <BossTracker character={character} setCharacters={setCharacters} />
                        </Col>
                        <Col lg={8}>
                            <p>TODO</p>
                        </Col>

                        <Button variant='danger' className='mt-3' onClick={handleDelete}>Delete</Button>
                    </Row>
                </Tab.Pane>
            )
        })
    )
}

const TabItem = memo(({ name, index }) => {
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