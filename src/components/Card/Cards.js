import React, { useState, useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Container, Card, Image, List, Grid, GridColumn } from 'semantic-ui-react'
import { getCharacter } from '../../actions/character';

import './Cards.css';



export default function Cards() {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    async function loadApi() {
      setChars(await getCharacter());
    }
    loadApi();
  }, [])

  return (
    <Container fluid>
      <List className='teste3'  as='ul'>
        <Grid columns={4}>
          <Grid.Row centered>
            {
              chars.map((char) => (
                <List.Item className='listItem' as='li' key={char.id}>
                  <Card className='cardHeight'>
                    <Image src={char.image} />
                    <Card.Content>
                      <Card.Header content={char.name} />
                      <Card.Meta content={`${char.species} - ${char.gender}`} />
                      <Card.Description>
                        {char.name} is origin from {char.origin.name}
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </List.Item>
              ))
            }
            </Grid.Row>
        </Grid>
      </List>
    </Container>
  )
}