{/* Common Component import */ }
import React from "react";
import { StatusBar, ScrollView } from "react-native"
import { Button, Text, Container, Body, List, Header, Title, Left, Icon, Right, View } from "native-base"
import Swipeout from 'react-native-swipeout'

{/* Specific Component import */ }
import styles from './styles'

{/* 
  Class definition
  Home Screen => Training
*/}
class HomeScreen extends React.Component {
    constructor(props) {
        super(props)
     
        this.state = ({
            activeRow: null
        })
    }
    render() {

        let swipeoutBtns = [
            {
                text: 'Editer',
                backgroundColor: 'green',
                underlayColor: 'grey',
                sensitivity: 10,
                autoClose: true,
            },
            {
                text: 'Dupliquer',
                backgroundColor: 'blue',
                underlayColor: 'grey',
                sensitivity: 10,
            },
            {
                text: 'Archiver',
                backgroundColor: 'orange',
                underlayColor: 'grey',
                sensitivity: 10,
            },
            {
                text: 'Supprimer',
                backgroundColor: 'red',
                underlayColor: 'grey',
                sensitivity: 10,
            }
        ], workoutList = [
            {
                title: 'Push',
                worked: 'Pectoraux',
                day: 'Lundi',
                rowId: 1
            },
            {
                title: 'Leg',
                worked: 'Jambe',
                day: 'Mardi',
                rowId: 2
            },
            {
                title: 'Pull',
                worked: 'Dos',
                day: 'Mercredi',
                rowId: 3
            },
            {
                title: 'Push',
                worked: 'Pectoraux',
                day: 'Jeudi',
                rowId: 4
            },
            {
                title: 'Push',
                worked: 'Dos',
                day: 'Vendredi',
                rowId: 5
            },
        ]

        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                            <Icon style={styles.headerIcon} name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Text style={styles.headerText}>ENTRAINEMENT</Text>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.props.navigation.navigate("Profile")} >
                            <Icon style={styles.headerIcon} name="archive" />
                        </Button>
                        <Button transparent onPress={() => this.props.navigation.navigate("Profile")} >
                            <Icon style={styles.headerIcon} name="create" />
                        </Button>
                    </Right>
                </Header>
                <List
                    dataArray={workoutList}
                    renderRow={data => {
                        return (
                            <Swipeout style={styles.swipeOut} right={swipeoutBtns} onOpen={(secId, rowId, direction) => {
                                this.setState({ activeRow: data.rowId })
                                console.log(this.state.activeRow)
                            }}>
                                <View style={styles.swipeOutView}>
                                    <Text style={styles.swipeOutTitle}>{data.title}</Text>
                                    <Text style={styles.swipeOutWorked}>{data.worked}</Text>
                                    <Text style={styles.swipeOutDay}>{data.day}</Text>
                                </View>
                            </Swipeout>
                        )
                    }}
                />
            </Container>
        )
    }
}
export default HomeScreen
