import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

export const Intro = () => {
    return (
        <div className="intro container">
            <h1>physical-svg</h1>
            <p>
                Is typescript library for node.js that runs <b>physical</b> simulation on your <b>svg</b> picture in browser.
                This project uses awesome 2d physic library <a href="https://brm.io/matter-js/">matterjs</a> and for bezier curves <a href="https://pomax.github.io/bezierjs/">bezier-js</a>.
            </p>

            <h1>Installation</h1>
            <p>
                <CodeMirror
                    value={"npm install physical-svg"}
                    editable={false}
                    height="100px"
                    extensions={[javascript({ jsx: true })]}
                />
            </p>
            <p>
                or use javascript bundle directly <a href="https://raw.githubusercontent.com/richardk123/physical-svg/main/dist/bundle.js">physical-svg.js</a>
            </p>

            <h1>Links</h1>
            <p>
                <a href="https://www.npmjs.com/package/physical-svg">npm</a>
            </p>
            <p>
                <a href="https://github.com/richardk123/physical-svg">Github sources</a>
            </p>
            <p>
                <a href="https://github.com/richardk123/physical-svg-examples">Example project sources</a>
            </p>

        </div>
    );
};