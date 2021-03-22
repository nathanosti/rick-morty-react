import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getCharacters } from '../../actions/rickandmorty'
import 'semantic-ui-css/semantic.min.css';
import { Container, Card, Image, List, Grid } from 'semantic-ui-react';

import './Cards.css';

export default function Cards() {
  const dispatch = useDispatch()

  const store = useSelector(state => state)
  
  useEffect(() => {
    dispatch(getCharacters())
  }, [])

  return (
    <Container fluid>
      <h1>teste</h1>
      <List  as='ul'>
        <Grid columns={4}>
          <Grid.Row centered>
            {
              store.rickandmorty.characters.map((char) => (
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