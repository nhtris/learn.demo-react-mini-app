import { useEffect, useState, useContext } from "react";
import { DarkModeContext } from "../App";
import { Link } from "react-router-dom";
import MiniApp from "js-miniapp-sdk";

export default function AppInfo() {

  const {darkMode, setDarkMode} = useContext(DarkModeContext);

  const [hostAppInfo, setHostAppInfo] = useState({});
  const [appThemeColors, setAppThemeColors] = useState({});
  const [userNames, setUserNames] = useState(null);

  useEffect(() => {
    const getHost = async () => {
      try {
        const info = await MiniApp.getHostEnvironmentInfo();
        console.log("...info MiniApp.getHostEnvironmentInfo:", info);
        setHostAppInfo(info);
      } catch (error) {
        console.error("...error MiniApp.getHostEnvironmentInfo:", error);
        setHostAppInfo("error");
      }
    };
    getHost();
  }, []);

  useEffect(() => {
    const getDarkMode = async () => {
      try {
        const darkMode = await MiniApp.miniappUtils.darkMode();
        console.log("...darkMode MiniApp.darkMode:", darkMode);
        setDarkMode(darkMode);
      } catch (error) {
        console.error("...error MiniApp.darkMode:", error);
        setDarkMode("error");
      }
    };
    getDarkMode();
  }, [setDarkMode]);

  useEffect(() => {
    const getAppThemeColors = async () => {
      try {
        const themeColors = await MiniApp.miniappUtils.getHostAppThemeColors();
        console.log("...themeColors MiniApp.getAppThemeColors:", themeColors);
        setAppThemeColors(themeColors);
      } catch (error) {
        console.error("...error MiniApp.getAppThemeColors:", error);
        setAppThemeColors("error");
      }
    };
    getAppThemeColors();
  }, []);

  useEffect(() => {
    const getUserNames = async () => {
      try {
        const names = await MiniApp.user.getUserName();
        console.log("...names MiniApp.user.getUserNames:", names);
        setUserNames(names);
      } catch (error) {
        console.error("...error MiniApp.user.getUserNames:", error);
        setUserNames("error");
      }
    };
    getUserNames();
  }, []);

  return (
    <div className="break-words dark:text-gray-100">
      <div>
        <Link to="/">Go home</Link>
      </div>
      <div className="pt-3 flex flex-col gap-2 px-1">
        <h1 className="text-xl">App Info</h1>
        <div className="border border-gray-400">
          <p>Host App Info: {JSON.stringify(hostAppInfo)}</p>
        </div>
        <div className="border border-gray-400">
          <p>App darkmode: {JSON.stringify(darkMode)}</p>
        </div>
        <div className="border border-gray-400">
          <p>App theme colors: {JSON.stringify(appThemeColors)}</p>
        </div>
        <div className="border border-gray-400">
          <p>userName: {JSON.stringify(userNames)}</p>
        </div>
      </div>
    </div>
  );
}
