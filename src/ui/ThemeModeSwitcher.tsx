"use client";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useColorScheme } from "@mui/material/styles";

const ThemeModeSwitcher = () => {
  const { mode, setMode } = useColorScheme();

  if (!mode) {
    return;
  }

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <FormControl>
        <FormLabel id="theme-toggle-label">Theme</FormLabel>
        <RadioGroup
          aria-labelledby="theme-toggle-label"
          name="theme-toggle"
          row
          value={mode}
          onChange={(event) =>
            setMode(event.target.value as "system" | "light" | "dark")
          }
        >
          <FormControlLabel value="system" control={<Radio />} label="System" />
          <FormControlLabel value="light" control={<Radio />} label="Light" />
          <FormControlLabel value="dark" control={<Radio />} label="Dark" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default ThemeModeSwitcher;
