import {Example} from "./example";
import {PhysicalSvg, StopPhysicalSvg} from "physical-svg";

export class Example3 implements Example
{

    get htmlCode(): string
    {
        return '<svg id="example3" width="100%" height="600" fill="white">\n' +
            '  <path fill-rule="evenodd" clip-rule="evenodd" d="M86.693,31.337c-3.359,0-6.083,2.767-6.083,6.179v24.149     c0,3.413,2.724,6.179,6.083,6.179c3.361,0,6.085-2.766,6.085-6.179V37.516C92.778,34.104,90.054,31.337,86.693,31.337z      M13.306,31.337c-3.36,0-6.084,2.767-6.084,6.179v24.149c0,3.413,2.724,6.179,6.084,6.179c3.36,0,6.084-2.766,6.084-6.179V37.516     C19.39,34.104,16.666,31.337,13.306,31.337z"/>\n' +
            '  <path fill-rule="evenodd" clip-rule="evenodd" d="M23.052,31.524v44.118c0,2.62,2.124,4.744,4.744,4.744h5.421v13.436     c0,3.413,2.724,6.179,6.084,6.179c3.36,0,6.085-2.766,6.085-6.179V80.385h9.47v13.436c0,3.413,2.724,6.179,6.083,6.179     c3.361,0,6.085-2.766,6.085-6.179V80.385h5.42c2.621,0,4.745-2.124,4.745-4.744V31.524H23.052z"/>\n' +
            '  <path fill-rule="evenodd" clip-rule="evenodd" d="M62.832,8.663l5.002-7.26c0.296-0.431,0.223-0.997-0.166-1.264     c-0.388-0.268-0.943-0.135-1.24,0.297l-5.195,7.54c-3.424-1.349-7.227-2.1-11.234-2.1c-4.007,0-7.809,0.751-11.233,2.1     l-5.196-7.54c-0.297-0.432-0.852-0.565-1.24-0.297c-0.388,0.267-0.461,0.834-0.165,1.264l5.002,7.26     c-7.951,3.699-13.527,10.726-14.237,18.93h54.138C76.359,19.389,70.783,12.361,62.832,8.663z M38.58,20.103     c-1.655,0-2.995-1.34-2.995-2.995c0-1.655,1.341-2.995,2.995-2.995c1.655,0,2.995,1.341,2.995,2.995     C41.575,18.763,40.234,20.103,38.58,20.103z M61.794,20.103c-1.654,0-2.996-1.34-2.996-2.995c0-1.655,1.342-2.995,2.996-2.995     c1.655,0,2.995,1.341,2.995,2.995C64.79,18.763,63.449,20.103,61.794,20.103z"/>\n' +
            '</svg>';
    }

    get id(): string
    {
        return "example3";
    }

    get jsCode(): string
    {
        return 'PhysicalSvg(document.getElementById("svg")!)\n' +
            '            .usePathAggregator()\n' +
            '            .withGravity({x: 0, y: 0})\n' +
            '            .withMouseInteraction(0.01)\n' +
            '            .withScrollInteraction(0.001)\n' +
            '            .withLimitVelocityPlugin(4)\n' +
            '            .withLimitAngularVelocityPlugin(Math.PI / 100)\n' +
            '            .withBorderCollider()\n' +
            '            .withDebugRenderer(document.getElementById("example1-canvas-wrapper")!)\n' +
            '            .startSimulation({colliderWidth: 5, restitution: 1, friction: 0, frictionAir: 0});'
    }

    get simulationStarter(): () => StopPhysicalSvg
    {
        return () => PhysicalSvg(document.getElementById(this.id)!)
            .usePathAggregator()
            .withGravity({x: 0, y: 0})
            .withMouseInteraction(0.01)
            .withScrollInteraction(0.001)
            .withLimitVelocityPlugin(4)
            .withLimitAngularVelocityPlugin(Math.PI / 100)
            .withBorderCollider()
            .withDebugRenderer(document.getElementById("debug-render" + this.id)!)
            .startSimulation({colliderWidth: 5, restitution: 1, friction: 0, frictionAir: 0});
    };

    get tsCode(): string
    {
        return 'PhysicalSvg(document.getElementById("svg")!)\n' +
            '            .usePathAggregator()\n' +
            '            .withGravity({x: 0, y: 0})\n' +
            '            .withMouseInteraction(0.01)\n' +
            '            .withScrollInteraction(0.001)\n' +
            '            .withLimitVelocityPlugin(4)\n' +
            '            .withLimitAngularVelocityPlugin(Math.PI / 100)\n' +
            '            .withBorderCollider()\n' +
            '            .withDebugRenderer(document.getElementById("example1-canvas-wrapper")!)\n' +
            '            .startSimulation({colliderWidth: 5, restitution: 1, friction: 0, frictionAir: 0});'
    }
}