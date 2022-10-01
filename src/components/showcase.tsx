import React from 'react';
import {StopPhysicalSvg} from "physical-svg";
import {SourceViewer} from "./sourceviewer";
import {Example} from "../examples/example";

export interface ShowCaseProps
{
    data: Example;
    title: string;
}

export class Showcase extends React.Component<ShowCaseProps> {

    private _stopSimulations: {id: string, stopper: StopPhysicalSvg}[] = [];

    constructor(props: ShowCaseProps)
    {
        super(props);
        this.state = {stopPhysics: undefined}
        this.handleReload = this.handleReload.bind(this);
    }

    componentDidMount()
    {
        this.initPhysicalSvg();
    }

    private initPhysicalSvg()
    {
        const stop = this.props.data.simulationStarter();
        this._stopSimulations.push({id: this.props.data.id, stopper: stop})
    }

    private stopPhysicalSvg()
    {
        const stopSimulations = this._stopSimulations.filter(sim => sim.id === this.props.data.id);
        stopSimulations.forEach(simulation =>
        {
            simulation.stopper.stop();
            this._stopSimulations = this._stopSimulations.splice(this._stopSimulations.indexOf(simulation), 1)
        });
    }

    componentWillUnmount()
    {
        this.stopPhysicalSvg();
    }

    htmlDecode(content: string): string
    {
        let e = document.createElement('div');
        e.innerHTML = content;
        return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue!;
    }

    handleReload()
    {
        this.stopPhysicalSvg();
        document.getElementById(this.props.data.id + "svg")!.innerHTML = this.props.data.htmlCode;
        this.initPhysicalSvg();
    }

    render() {
        return (
            <div className="container">
                <div className="card m-5">
                    <div className="card-header">
                        <h4>{this.props.title}</h4>
                        <div className="row">
                            <div id={this.props.data.id + "svg"} className="col p-1" dangerouslySetInnerHTML={{__html: this.props.data.htmlCode}}>
                            </div>
                            <div id={"debug-render" + this.props.data.id} className="col p-1">

                            </div>
                        </div>
                        <div className="row justify-content-end">
                            <div className="col-md-auto">
                                <button type="button" className="btn btn-primary" onClick={this.handleReload}>
                                    <span className="reload-icon">&#x21bb;</span>
                                    Reload
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Source code</h5>
                        <SourceViewer codeTs={this.props.data.tsCode} codeHtml={this.props.data.htmlCode}/>
                    </div>
                </div>
            </div>
        );
    }
}