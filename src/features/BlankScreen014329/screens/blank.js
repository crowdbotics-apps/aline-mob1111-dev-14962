import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { Switch_7: true }

  render = () => (
    <View>
      <Text style={styles.Text_3}>
        Select this text to return to blank screen.
      </Text>
      <Icon name="bitbucket" />
      <Switch
        activeColor="#42ff58"
        inactiveColor="#1a6dcb"
        style={styles.Switch_7}
        value={this.state.Switch_7}
        onValueChange={nextChecked => this.setState({ Switch_7: nextChecked })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  Text_3: {
    fontSize: 16,
    color: "#d50707",
    fontFamily: "Merriweather-Regular",
    textDecorationLine: "overline",
    lineHeight: 13
  },

  Icon_5: {},
  View_1: {},
  Text_3: {
    fontSize: 16,
    color: "#d50707",
    fontFamily: "Merriweather-Italic",
    textDecorationLine: "none",
    textTransform: "lowercase",
    lineHeight: 13
  },
  Icon_5: {},
  Switch_7: { alignSelf: "flex-start" }
})
