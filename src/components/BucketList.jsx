import React from 'react'
import Item from './Item'
import {Box, List, Grid, Typography} from '@mui/material';

const BucketList = ({displayList, onHandleDelete, onHandleEditItem, title}) => {
  
  const findColor = (title) => {
    if (title === 'Lifestyle') {
     return 'secondary.light'
    } else if (title === 'Travel') {
      return 'primary.light'
    } else {
      return 'success.light'
    }
  }

  return (
    <Box sx={{display: 'flex', flexWrap: 'wrap', maxWidth: 600, backgroundColor: findColor(title), mb: 1 }}>
      <Grid >
        <Typography sx={{ ml: 10, mt: 4, mb: 4, color: "background.paper"}} variant="h3" component="div">
          {title}
        </Typography>
        <List sx={{ ml: 10, mb: 10, width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}>
          {displayList.map(item => <Item key= {item.id} item ={item} onHandleDelete={onHandleDelete} onHandleEditItem={onHandleEditItem}/>)}
        </List>        
      </Grid>
    </Box>
  )
}

export default BucketList