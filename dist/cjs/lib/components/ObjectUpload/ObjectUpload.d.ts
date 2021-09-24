import React from 'react';
export interface ObjectUploadProps {
    open: boolean;
    onClose: () => void;
    onUpload: (file: File | undefined) => void;
}
declare const ObjectUpload: ({ open, onClose, onUpload }: ObjectUploadProps) => React.ReactElement;
export default ObjectUpload;
