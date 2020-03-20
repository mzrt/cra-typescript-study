import React, { Component } from "react";
import SortableContainer, { SortableContainerProps } from "./SortableContainer";

interface BuilderProps extends SortableContainerProps{
    config: object;
}

@SortableContainer
export class Builder extends Component<BuilderProps> {
    public render = () => {
        return<p>Builder</p>
    }
}