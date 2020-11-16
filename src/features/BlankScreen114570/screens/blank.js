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
      <Switch
        activeColor="#42ff58"
        inactiveColor="#FF0000"
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
    fontSize: 30,
    color: "#D50700",
    textDecorationLine: "none",
    fontFamily: "Merriweather",
    fontStyle: 'italic',
    textTransform: "lowercase",
  },
  Icon_5: {},
  Switch_7: { alignSelf: "flex-start" }
})
