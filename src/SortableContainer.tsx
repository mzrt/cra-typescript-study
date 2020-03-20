import React, { Component } from "react";
import Immutable from "immutable";

interface DraggingInfo{
    id: number
}
export interface SortableContainerProps{
    tree: Immutable.Map<string, any>
}
interface SortableContainerState{
    dragging: DraggingInfo
}
export default (Builder:any) => {
    const retClass = class SortableContainer<T extends SortableContainerProps> extends Component<T, SortableContainerState> {
        public state: SortableContainerState = {
            dragging: { id:1 }
        }
        public render = () => {
            return <div><Builder></Builder></div>
        }
    }
    return retClass;
}