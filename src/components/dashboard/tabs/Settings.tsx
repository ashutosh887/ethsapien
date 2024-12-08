import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [autoFetchEnabled, setAutoFetchEnabled] = useState(false);
  const [theme, setTheme] = useState("system");
  const [dataLimit, setDataLimit] = useState(50);

  const saveSettings = () => {
    const settings = {
      notificationsEnabled,
      darkModeEnabled,
      autoFetchEnabled,
      theme,
      dataLimit,
    };
    localStorage.setItem("appSettings", JSON.stringify(settings));
    alert("Settings saved!");
  };

  useEffect(() => {
    const savedSettings = localStorage.getItem("appSettings");
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);
      setNotificationsEnabled(settings.notificationsEnabled);
      setDarkModeEnabled(settings.darkModeEnabled);
      setAutoFetchEnabled(settings.autoFetchEnabled);
      setTheme(settings.theme);
      setDataLimit(settings.dataLimit);
    }
  }, []);

  return (
    <Card className="p-6">
      <CardHeader>
        <CardTitle>Settings</CardTitle>
        <CardDescription>Manage your preferences and settings.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <span>Enable Notifications</span>
          <Switch
            checked={notificationsEnabled}
            onCheckedChange={(checked) => setNotificationsEnabled(checked)}
          />
        </div>

        <div className="flex items-center justify-between">
          <span>Dark Mode</span>
          <Switch
            checked={darkModeEnabled}
            onCheckedChange={(checked) => setDarkModeEnabled(checked)}
          />
        </div>

        <div className="flex items-center justify-between">
          <span>Auto Fetch Credentials</span>
          <Switch
            checked={autoFetchEnabled}
            onCheckedChange={(checked) => setAutoFetchEnabled(checked)}
          />
        </div>

        <div className="flex items-center justify-between">
          <span>Theme</span>
          <Select value={theme} onValueChange={(value) => setTheme(value)}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Select a theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <span>Data Limit (MB): {dataLimit}</span>
          <Slider
            value={[dataLimit]}
            onValueChange={(value) => setDataLimit(value[0])}
            max={100}
            step={5}
          />
        </div>

        <Button onClick={saveSettings} className="mt-4">
          Save Settings
        </Button>
      </CardContent>
    </Card>
  );
};

export default Settings;
