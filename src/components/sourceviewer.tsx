import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';

export interface SourceViewerProps
{
    codeTs: string;
    codeHtml: string;
}

export interface SourceViewerState
{
    language: "ts" | "html";
}

export class SourceViewer extends React.Component<SourceViewerProps, SourceViewerState> {

    constructor(props: SourceViewerProps)
    {
        super(props);
        this.state = {language: "ts"};
        this.handleClickTS = this.handleClickTS.bind(this);
        this.handleClickHtml = this.handleClickHtml.bind(this);
    }

    render() {

        let codeMirror;
        switch (this.state.language)
        {
            case "ts":
            {
                codeMirror =
                    <CodeMirror
                        value={this.props.codeTs}
                        editable={false}
                        height="200px"
                        extensions={[javascript({ jsx: true })]}
                    />;
                break;
            }
            case "html":
            {
                codeMirror =
                    <CodeMirror
                        value={this.props.codeHtml}
                        editable={false}
                        height="200px"
                        extensions={[html()]}
                    />;
                break;
            }
        }

        return (
            <div>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className={`nav-link ${this.state.language === "ts" ? "active" : ""}`} aria-current="page" onClick={this.handleClickTS}>Typescript</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${this.state.language === "html" ? "active" : ""}`} aria-current="page" onClick={this.handleClickHtml}>HTML</a>
                    </li>
                </ul>
                {codeMirror}
            </div>
        );
    }

    handleClickTS()
    {
        this.setState({language: "ts"});
    }

    handleClickHtml()
    {
        this.setState({language: "html"});
    }
}