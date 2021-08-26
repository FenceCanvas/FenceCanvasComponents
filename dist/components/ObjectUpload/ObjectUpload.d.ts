import React from 'react';
export interface ObjectUploadProps {
    open: boolean;
    onClose: () => void;
}
declare const ObjectUpload: ({ open, onClose }: ObjectUploadProps) => React.ReactElement;
export default ObjectUpload;
