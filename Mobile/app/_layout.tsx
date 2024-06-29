import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Welcome",
        }}
      />
    </Stack>
  );
};

export default _layout;
