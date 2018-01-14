{/* Common Component import */ }
import React, { Component } from "react"
import { DrawerNavigator } from "react-navigation"

{/* Specific Component import */ }
import HomeScreen from "./HomeScreen.js"
import SideBar from "../SideBar/SideBar.js"

{/* 
  Class definition
  Routeur
*/}
const HomeScreenRouter = DrawerNavigator(
    {
        Home: { screen: HomeScreen }
    },
    {
        contentComponent: props => <SideBar {...props} />
    }
)
export default HomeScreenRouter
