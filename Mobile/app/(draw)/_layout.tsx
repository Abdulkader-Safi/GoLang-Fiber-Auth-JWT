import { Drawer } from "expo-router/drawer";

const _layout = () => {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          title: "Welcome",
        }}
      />

      <Drawer.Screen
        name="login"
        options={{
          title: "Login",
        }}
      />
    </Drawer>
  );
};

export default _layout;
