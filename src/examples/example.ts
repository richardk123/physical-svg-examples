import {StopPhysicalSvg} from "physical-svg";

export interface Example
{
    get id(): string;

    get jsCode(): string;

    get tsCode(): string;

    get htmlCode(): string;

    get simulationStarter(): () => StopPhysicalSvg
}