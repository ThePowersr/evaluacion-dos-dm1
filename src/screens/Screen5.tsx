import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton/CustomButton";
import { ScreenNavigationProp } from "../types/types";
import CustomTextInput from "../components/CustomTextInput/CustomTextInput";

const Screen5 = ({
  navigation,
}: {
  navigation: ScreenNavigationProp<"Screen4">;
}) => {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState("");

  /** Función para calcular el número menor o igualdad */
  const calcularMenor = useCallback(() => {
    if (!numero1 || !numero2) {
      setResultado("Por favor ingresa valores en los campos");
      return;
    }

    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    if (isNaN(num1) || isNaN(num2)) {
      setResultado("Ingresa valores numéricos válidos");
      return;
    }

    if (num1 < num2) {
      setResultado(`El número menor es: ${num1}`);
    } else if (num1 > num2) {
      setResultado(`El número menor es: ${num2}`);
    } else {
      setResultado(`${num1} es igual que ${num2}`);
    }
  }, [numero1, numero2]); // Se recalcula solo si cambian los números

  return (
    <View style={styles.container}>
      <CustomTextInput
        placeholder="Número 1"
        keyboardType="numeric"
        value={numero1}
        onChangeText={setNumero1}
      />
      <CustomTextInput
        placeholder="Número 2"
        keyboardType="numeric"
        value={numero2}
        onChangeText={setNumero2}
      />
      <CustomButton title="Calcular menor" onPress={calcularMenor} />
      {resultado !== "" && <Text style={styles.resultText}>{resultado}</Text>}
      <CustomButton title="Regresar" onPress={() => navigation.pop()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  resultText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Screen5;
