import './App.css';
import Economist from "./icons/1-economist/economist";
import GameDesigner from "./icons/2-GameDesigner/GameDesigner";
import Marketer from "./icons/3-Marketer/Marketer";
import DModeller from "./icons/4-3DModeller/3DModeller";
import Microbiologist from "./icons/5-Microbiologist/Microbiologist";
import ProjectEngineer from "./icons/6-ProjectEngineer/ProjectEngineer";
import MicrocontrollerProgrammer from "./icons/7-MicrocontrollerProgrammer/MicrocontrollerProgrammer";
import FoodIndustryTechnologist from "./icons/9-FoodIndustryTechnologist/FoodIndustryTechnologist";
import EngineerResearcher from "./icons/10-EngineerResearcher/EngineerResearcher";
import DesignEngineer from "./icons/12-DesignEngineer/DesignEngineer";
import Laser from "./icons/11-check-Laser/Laser";
import SystemArchitect from "./icons/8-no-SystemArchitect/SystemArchitect";

function App() {
    return (
        <div className="App">
            <Economist/>
            <GameDesigner/>
            <Marketer/>
            <DModeller/>
            <Microbiologist/>
            <ProjectEngineer/>
            <MicrocontrollerProgrammer/>
            <SystemArchitect/>
            <FoodIndustryTechnologist/>
            <EngineerResearcher/>
            <Laser/>
            <DesignEngineer/>
        </div>
    );
}

export default App;
