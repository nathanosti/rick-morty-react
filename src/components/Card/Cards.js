import React, { useState, useEffect } from 'react';
import { getCharacter } from '../../actions/character';

import 'semantic-ui-css/semantic.min.css'
import { Card, Image, List, Grid } from 'semantic-ui-react'

export default function Cards() {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    async function loadApi() {
      setChars(await getCharacter());
    }
    loadApi();
  }, [])

  return (
    <>
      <List as='ul'>
        <Grid>
          <Grid.Row>
            {
              chars.map((char) => (
                <List.Item as='li' key={char.id}>
                  <Card>
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
    </>
  )
}