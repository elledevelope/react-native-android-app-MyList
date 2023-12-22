import React from 'react'
import { Button, Text, View } from 'react-native'
import { styleItem } from './styleItem'
import TodoListContext from '../../TodoListContext'

const Item = (props) => {
    const todoListContext = React.useContext(TodoListContext)
    return (
        <View style={styleItem}>
            <Text style={{
                fontSize: 18,
                paddingTop: 7,
                fontWeight: 500,
                textTransform: 'capitalize'
            }}>{props.item}</Text>
            {/* <Text>{props.index}</Text> */}
            <Button
                title='X'
                color="red"
                onPress={()=>{todoListContext.deleteItem(props.index)}}
            ></Button>
        </View>
    )
}

export default Item