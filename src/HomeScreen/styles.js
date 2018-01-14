{/* Common Component import */ }
import { StyleSheet } from 'react-native'

{/* 
  Class definition
  Home Screen => StyleSheet
*/}
export default StyleSheet.create({
    container: {
        backgroundColor:'grey'
    },
    header: {
        backgroundColor: 'orange'
    },
    headerText: {
        textAlign: 'center', 
        width: 150, 
        color: 'white'
    },
    headerIcon: {
        color: 'white'
    },
    swipeOut: {
        backgroundColor: 'white', 
        height: 80,
        paddingLeft: 10
    },
    swipeOutView: {
        backgroundColor: 'white', 
        height: 80,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        borderLeftColor: 'white'
    },
    swipeOutTitle: {
        lineHeight: 35,
        fontWeight: 'bold',
        fontSize: 20
    },
    swipeOutWorked: {
        lineHeight: 18,
        color: 'grey',
        fontSize: 12
    },
    swipeOutDay: {
        lineHeight: 18,
        color: 'grey',
        fontSize: 12
    },
})