import Button from "@/components/Button"
import { useCalculatorStore } from "@/data/init"
import { StyleSheet, Text, View } from "react-native"

export default function HomeScreen() {
  const { displayValue } = useCalculatorStore()
  return (
    <View style={styles.body}>
      <View>
        <Text
          style={{
            color: "#EAEAEA",
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {displayValue}
        </Text>
      </View>
      <View style={styles.body__calculator_buttons}>
        <View style={styles.body__calculator_buttons__button}>
          <Button label="AC" />
          <Button label="%" />
          <Button label="delete" />
          <Button label="/" />
        </View>
        <View style={styles.body__calculator_buttons__button}>
          <Button label="7" />
          <Button label="8" />
          <Button label="9" />
          <Button label="*" />
        </View>
        <View style={styles.body__calculator_buttons__button}>
          <Button label="4" />
          <Button label="5" />
          <Button label="6" />
          <Button label="-" />
        </View>
        <View style={styles.body__calculator_buttons__button}>
          <Button label="1" />
          <Button label="2" />
          <Button label="3" />
          <Button label="+" />
        </View>
        <View style={styles.body__calculator_buttons__button}>
          <Button label="00" />
          <Button label="0" />
          <Button label="." />
          <Button label="=" />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#1E1E1E",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "100%",
    width: "100%",
  },
  body__calculator_buttons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },
  body__calculator_buttons__button: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  body_calculator_display: {},
})
