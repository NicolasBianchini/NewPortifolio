import React from 'react';
import { Button, Tooltip } from "@heroui/react";
import { Icon } from '@iconify/react';
import { useTheme } from "@heroui/use-theme";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  
  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Tooltip content={`Switch to ${isDark ? "light" : "dark"} mode`}>
      <Button
        isIconOnly
        variant="flat"
        color="primary"
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        onPress={toggleTheme}
        className="shadow-md"
      >
        {isDark ? (
          <Icon icon="lucide:sun" className="w-5 h-5" />
        ) : (
          <Icon icon="lucide:moon" className="w-5 h-5" />
        )}
      </Button>
    </Tooltip>
  );
};