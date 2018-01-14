{/* Common Component import */ }
import React, { Component } from "react"
import { View } from "react-native"
import { Container, Content, Picker, Button, Text } from "native-base"
import Expo from "expo"

{/* Specific Component import */ }
import HomeScreen from "./src/HomeScreen/index.js"

{/* 
  Class definition
  Application input state
*/}

class TrainLogInit extends Component {
    constructor() {
        super()
        this.state = {
            isReadyToStart: false,
            isError: false
        }
    }
    async componentWillMount() {
        try {
            await Expo.Font.loadAsync({
                Roboto: require("native-base/Fonts/Roboto.ttf"),
                Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
                Ionicons: require("native-base/Fonts/Ionicons.ttf")
            })
            this.setState({ isReadyToStart: true })
        } catch (error) {
            console.error(error)
            this.setState({ isError: true })
        }
    }
    render() {
        if (!this.state.isReadyToStart) {
            return <Expo.AppLoading />
        }
        else if (this.state.isError) {
            return (
                <Text>Une erreur innatendu est survenue</Text>
            )
        } else {
            return <HomeScreen />
        }
    }
}
export default TrainLogInit
