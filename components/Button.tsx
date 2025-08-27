import { useCalculatorStore } from "@/data/init"
import Feather from "@expo/vector-icons/Feather"
import { Pressable, StyleSheet, Text, View } from "react-native"

type Props = {
  label: string
}

export default function Button({ label }: Props) {
  const { displayValue, setDisplayValue } = useCalculatorStore()
  const handleButtonPress = (label: string) => {
    if (label === "AC") {
      setDisplayValue("0")
      return
    }
    if (label === "delete") {
      if (displayValue.length === 1) {
        setDisplayValue("0")
      } else {
        setDisplayValue(displayValue.slice(0, -1))
      }
      return
    }
    if (label === "=") {
      try {
        const result = Function(`"use strict"; return (${displayValue})`)()
        setDisplayValue(String(result))
      } catch (error) {
        setDisplayValue("Error")
      }
      return
    }
    if (displayValue === "0") {
      setDisplayValue(label) // Replace initial zero
      return
    }
    setDisplayValue(displayValue + label) // Append new value
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => handleButtonPress(label)}>
        {label === "delete" ? (
          <Feather name="delete" size={24} color="white" />
        ) : (
          <Text style={styles.buttonText}>{label}</Text>
        )}
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 4,
    padding: 4,
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#2E2E2E",
    color: "#ffffff",
    height: 50,
    width: 50,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#EAEAEA",
    fontSize: 20,
    fontWeight: "bold",
  },
})
