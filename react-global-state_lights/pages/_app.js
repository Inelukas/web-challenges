import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { uid } from "uid";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState([
    { name: "Living Room", isOn: false, id: uid() },
    { name: "Kitchen", isOn: false, id: uid() },
    { name: "Bedroom", isOn: false, id: uid() },
    { name: "Bathroom", isOn: false, id: uid() },
    { name: "Garage", isOn: false, id: uid() },
    { name: "Porch", isOn: false, id: uid() },
    { name: "Garden", isOn: false, id: uid() },
    { name: "Office", isOn: false, id: uid() },
  ]);

  const lightCount = countLights();

  function countLights() {
    let lightsOn = 0;
    lights.forEach((light) => (light.isOn === true ? lightsOn++ : null));
    return lightsOn;
  }

  function handleToggle(id) {
    setLights(
      lights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  function handleTurnAllOff() {
    setLights(
      lights.map((light) => {
        return { ...light, isOn: false };
      })
    );
  }

  function handleTurnAllOn() {
    setLights(
      lights.map((light) => {
        return { ...light, isOn: true };
      })
    );
  }

  return (
    <Layout lightCount={lightCount}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        onToggle={handleToggle}
        lightCount={lightCount}
        onTurnAllOff={handleTurnAllOff}
        onTurnAllOn={handleTurnAllOn}
      />
    </Layout>
  );
}
