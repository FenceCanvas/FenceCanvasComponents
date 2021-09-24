import React from 'react';
import { IListItem } from '../../../interface/listItem.interface';
export interface SidebarProps {
    listItems: IListItem[];
    open: boolean;
    onClose: () => void;
    color: 'primary' | 'secondary';
    logoSrc: string | undefined;
}
declare const Sidebar: ({ listItems, open, onClose, color, logoSrc }: SidebarProps) => React.ReactElement;
export default Sidebar;
