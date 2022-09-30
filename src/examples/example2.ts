import {Example} from "./example";
import {PhysicalSvg, StopPhysicalSvg} from "physical-svg";

export class Example2 implements Example
{

    get htmlCode(): string
    {
        return '<svg id="example2" xmlns="http://www.w3.org/2000/svg" width="100%" height="600px">\n' +
            '\n' +
            '  <g>\n' +
            '    <title>Layer 1</title>\n' +
            '    <path d="m373.06498,165.355l0,107.71001l-107.71,0l0,53.85999l107.71,0l0,107.72003l53.86001,0l0,-107.72003l107.72,0l0,-53.85999l-107.72,0l0,-107.71001l-53.86001,0" opacity="undefined" fill=" #c10d0e"/>\n' +
            '    <path fill=" #c10d0e" d="m460.38498,267.935l31.31,0c8.04,-10.33 28.46,-17.07 25.85,-36.78c-0.7,-5.33 -4.18,-10.64 -8.24,-13.85c-11.66,21.31 -38.38,28.2 -48.92,50.63"/>\n' +
            '    <path fill=" #c10d0e" d="m432.02498,242.835c5.76,-5.82 12.85,-14.18 21.91,-21.62c8.3,-6.82 19.22,-13.21 19.88,-24.35c0.5,-8.46 -3.71,-13.61 -9.94,-16.4c0,0 -2.78,4.8 -6.96,8.45c-5.79,5.06 -22.42,13.76 -24.36,20.88c-1.65,6.07 0.27,21.16 -0.53,33.04"/>\n' +
            '    <path fill=" #c10d0e" d="m444.97498,238.115c-7.4,7.89 -15.07,14.48 -12.43,29.82l19.88,0c4.81,-7.04 10.86,-14.79 19.38,-22.37c7.58,-6.74 17.26,-13.16 22.37,-19.38c7.56,-9.22 5.92,-26.65 -5.55,-31.3c-9.72,16.36 -29.93,28.6 -43.65,43.23"/>\n' +
            '    <path fill=" #c10d0e" d="m367.93498,239.605l0,-31.31c-10.32,-8.04 -17.07,-28.46 -36.78,-25.85c-5.33,0.7 -10.64,4.18 -13.85,8.24c21.31,11.67 28.2,38.39 50.63,48.92"/>\n' +
            '    <path fill=" #c10d0e" d="m342.83498,267.975c-5.82,-5.76 -14.18,-12.85 -21.62,-21.91c-6.82,-8.3 -13.21,-19.22 -24.35,-19.88c-8.46,-0.5 -13.61,3.71 -16.4,9.94c0,0 4.8,2.78 8.45,6.96c5.06,5.79 13.76,22.43 20.88,24.36c6.07,1.65 21.16,-0.28 33.04,0.53"/>\n' +
            '    <path fill=" #c10d0e" d="m338.11498,255.015c7.89,7.4 14.48,15.07 29.82,12.43l0,-19.89c-7.04,-4.81 -14.79,-10.86 -22.37,-19.38c-6.74,-7.58 -13.16,-17.26 -19.38,-22.37c-9.22,-7.56 -26.65,-5.92 -31.3,5.55c16.37,9.73 28.6,29.94 43.23,43.66"/>\n' +
            '    <path fill=" #c10d0e" d="m339.60498,332.055l-31.31,0c-8.05,10.33 -28.46,17.07 -25.85,36.78c0.7,5.33 4.18,10.64 8.24,13.85c11.67,-21.3 38.39,-28.2 48.92,-50.63"/>\n' +
            '    <path fill=" #c10d0e" d="m367.97498,357.155c-5.76,5.82 -12.85,14.18 -21.91,21.62c-8.3,6.82 -19.21,13.2 -19.88,24.35c-0.5,8.46 3.71,13.61 9.94,16.4c0,0 2.78,-4.8 6.96,-8.45c5.79,-5.06 22.42,-13.76 24.36,-20.88c1.65,-6.06 -0.28,-21.15 0.53,-33.04"/>\n' +
            '    <path fill=" #c10d0e" d="m355.01498,361.875c7.4,-7.89 15.07,-14.48 12.43,-29.82l-19.89,0c-4.81,7.04 -10.86,14.79 -19.38,22.37c-7.57,6.74 -17.26,13.16 -22.37,19.38c-7.56,9.22 -5.92,26.65 5.55,31.3c9.73,-16.36 29.94,-28.6 43.66,-43.23"/>\n' +
            '    <path fill=" #c10d0e" d="m432.05498,360.385l0,31.31c10.33,8.04 17.07,28.46 36.78,25.84c5.33,-0.7 10.64,-4.18 13.85,-8.24c-21.3,-11.65 -28.2,-38.37 -50.63,-48.91"/>\n' +
            '    <path fill=" #c10d0e" d="m457.15498,332.025c5.82,5.76 14.18,12.85 21.62,21.91c6.82,8.3 13.21,19.22 24.35,19.88c8.46,0.5 13.61,-3.71 16.4,-9.94c0,0 -4.8,-2.78 -8.45,-6.96c-5.06,-5.79 -13.76,-22.42 -20.88,-24.36c-6.06,-1.65 -21.15,0.27 -33.04,-0.53"/>\n' +
            '    <path fill=" #c10d0e" d="m461.87498,344.975c-7.89,-7.4 -14.48,-15.07 -29.82,-12.43l0,19.88c7.04,4.81 14.79,10.86 22.37,19.38c6.74,7.57 13.16,17.26 19.38,22.37c9.22,7.56 26.65,5.92 31.3,-5.55c-16.36,-9.72 -28.6,-29.93 -43.23,-43.65"/>\n' +
            '  </g>\n' +
            '</svg>';
    }

    get id(): string
    {
        return "example2";
    }

    get jsCode(): string
    {
        return 'PhysicalSvg(document.getElementById("svg")!)\n' +
            '            .usePathAggregator()\n' +
            '            .withGravity({x: 0, y: 0})\n' +
            '            .withMouseInteraction(0.01)\n' +
            '            .withScrollInteraction(0.001)\n' +
            '            .withLimitVelocityPlugin(2)\n' +
            '            .withLimitAngularVelocityPlugin(Math.PI / 100)\n' +
            '            .withBorderCollider()\n' +
            '            .withDebugRenderer(document.getElementById("example1-canvas-wrapper")!)\n' +
            '            .startSimulation({colliderWidth: 10, restitution: 1, friction: 0, frictionAir: 0});'
    }

    get simulationStarter(): () => StopPhysicalSvg
    {
        return () => PhysicalSvg(document.getElementById(this.id)!)
            .usePathAggregator()
            .withGravity({x: 0, y: 0})
            .withMouseInteraction(0.01)
            .withScrollInteraction(0.001)
            .withLimitVelocityPlugin(2)
            .withLimitAngularVelocityPlugin(Math.PI / 100)
            .withBorderCollider()
            .withDebugRenderer(document.getElementById("debug-render" + this.id)!)
            .startSimulation({colliderWidth: 10, restitution: 1, friction: 0, frictionAir: 0});
    };

    get tsCode(): string
    {
        return 'PhysicalSvg(document.getElementById("svg")!)\n' +
            '            .usePathAggregator()\n' +
            '            .withGravity({x: 0, y: 0})\n' +
            '            .withMouseInteraction(0.01)\n' +
            '            .withScrollInteraction(0.001)\n' +
            '            .withLimitVelocityPlugin(2)\n' +
            '            .withLimitAngularVelocityPlugin(Math.PI / 100)\n' +
            '            .withBorderCollider()\n' +
            '            .withDebugRenderer(document.getElementById("example1-canvas-wrapper")!)\n' +
            '            .startSimulation({colliderWidth: 10, restitution: 1, friction: 0, frictionAir: 0});'
    }

}