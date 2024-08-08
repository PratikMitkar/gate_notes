import React, { useEffect } from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { GlobalWorkerOptions } from 'pdfjs-dist';

// Specify the workerSrc
GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.js`;

const PdfReader = ({ file }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        renderToolbar: (Toolbar) => (
            <Toolbar>
                {({
                    CurrentPageInput,
                    GoToNextPage,
                    GoToPreviousPage,
                    NumberOfPages,
                    Zoom,
                    EnterFullScreen,
                    ShowSearchPopover,
                    Print,
                    Download,  // Reference to the Download button
                    OpenFile,  // Reference to the OpenFile button
                }) => (
                    <>
                        <div className="rpv-toolbar__item">
                            <GoToPreviousPage />
                        </div>
                        <div className="rpv-toolbar__item">
                            <CurrentPageInput /> / <NumberOfPages />
                        </div>
                        <div className="rpv-toolbar__item">
                            <GoToNextPage />
                        </div>
                        <div className="rpv-toolbar__item">
                            <Zoom />
                        </div>
                        <div className="rpv-toolbar__item">
                            <EnterFullScreen />
                        </div>
                        <div className="rpv-toolbar__item">
                            <Print />
                        </div>
                        <div className="rpv-toolbar__item">
                            <ShowSearchPopover />
                        </div>
                        {/* Remove the Download and OpenFile buttons */}
                    </>
                )}
            </Toolbar>
        ),
    });

    useEffect(() => {
        GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.js`;
    }, []);

    return (
        <div style={{ height: '100%', width: '100%', overflowY: 'auto' }}>
            <Viewer fileUrl={file} plugins={[defaultLayoutPluginInstance]} />
        </div>
    );
};

export default PdfReader;
