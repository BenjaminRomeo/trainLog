{/* Common Component import */ }
import React from "react"
import { StatusBar, ScrollView, ListView, TouchableHighlight } from "react-native"
import { Button, Text, Container, Body, List, Header, Title, Left, Icon, Right, View } from "native-base"
import Swipeout from 'react-native-swipeout'

{/* Specific Component import */ }
import styles from './styles'

{/* 
  Class definition
  Home Screen => Training
*/}

const rows = [
    {
        title: 'Push',
        worked: 'Pectoraux',
        day: 'Lundi'
    },
    {
        title: 'Leg',
        worked: 'Jambe',
        day: 'Mardi'
    },
    {
        title: 'Pull',
        worked: 'Dos',
        day: 'Mercredi'
    },
    {
        title: 'Push',
        worked: 'Pectoraux',
        day: 'Jeudi'
    },
    {
        title: 'Push',
        worked: 'Dos',
        day: 'Vendredi'
    }
]

class HomeScreen extends React.Component {
    constructor(props) {
        super(props)
        let ds = new ListView.DataSource({rowHasChanged: (row1, row2) => true})

        this.state = ({
            swipeoutBtns: [
                {
                    text: 'Editer',
                    backgroundColor: 'green',
                    underlayColor: 'grey',
                },
                {
                    text: 'Dupliquer',
                    backgroundColor: 'blue',
                    underlayColor: 'grey',
                },
                {
                    text: 'Archiver',
                    backgroundColor: 'orange',
                    underlayColor: 'grey',
                },
                {
                    text: 'Supprimer',
                    backgroundColor: 'red',
                    underlayColor: 'grey',
                }
            ],
            dataSource: ds.cloneWithRows(rows),
            sectionID: null,
            rowID: null
        })
    }

    _renderRow(rowData, sectionID, rowID) {
        return (
            <Swipeout
                style={styles.swipeOut} 
                sensitivity = {50}
                right={this.state.swipeoutBtns}
                rowID={rowID}
                sectionID={sectionID}
                autoClose={rowData.autoClose}
                close={!rowData.active}
                onOpen={(sectionID, rowID) => this._handleSwipeout(sectionID, rowID)}
            >
                <TouchableHighlight style={styles.swipeOut}>
                    <View style={styles.swipeOutView}>
                        <Text style={styles.swipeOutTitle}>{rowData.title}</Text>
                        <Text style={styles.swipeOutWorked}>{rowData.worked}</Text>
                        <Text style={styles.swipeOutDay}>{rowData.day}</Text>
                    </View>
                </TouchableHighlight>
            </Swipeout>
        ) 
    }

    _updateDataSource = function(data) {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(data)
        })
    }

    _handleSwipeout = function(sectionID, rowID) {
        for (var i = 0; i < rows.length; i++) {
          if (i != rowID) rows[i].active = false
          else rows[i].active = true
        }
        this._updateDataSource(rows)
      }

    render() {
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
                <ListView dataSource={this.state.dataSource} renderRow={this._renderRow.bind(this)}/>
            </Container>
        )
    }
}
export default HomeScreen
