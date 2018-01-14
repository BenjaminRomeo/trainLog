{/* Common Component import */ }
import React from "react"
import { AppRegistry, Image, StatusBar } from "react-native"
import {
    Button,
    Text,
    Container,
    List,
    ListItem,
    Content,
    Icon
} from "native-base"

{/* Specific Component import */ }
const routes = ["Home", "Exercice", "Mesure", "Graph", "Option"]
const matcher = {Home:"Entrainements", Exercice:"Exercices", Mesure:"Mensurations", Graph:"Graphiques", Option:"Options"}

{/* 
  Class definition
  SideBar : HomeScreen
*/}
class SideBar extends React.Component {
    render() {
        return (
            <Container>
                <Content>
                    <Image
                        source={{
                            uri: "https://www.sport-equipements.fr/wp-content/uploads/2015/10/musculation.jpg"
                        }}
                        style={{
                            height: 120,
                            alignSelf: "stretch",
                            justifyContent: "center",
                            alignItems: "center"
                        }} />
                    <List
                        dataArray={routes}
                        renderRow={data => {
                            return (
                                <ListItem button onPress={() => this.props.navigation.navigate(data)}>
                                    <Text>{data}</Text>
                                </ListItem>
                            )
                        }}
                    />
                </Content>
            </Container>
        )
    }
}
export default SideBar
