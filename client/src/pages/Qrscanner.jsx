import React, { useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { useNavigate } from 'react-router-dom';

const QrScanner = () => {
    const navigate = useNavigate();

    async function checklogin(){
        
        const token = localStorage.getItem('token')
        if(!token )navigate("/Login");
        return;
      
    }


    useEffect(() => {

        checklogin();


        const myqr = document.getElementById('your-qr-result');
        let lastResult;
        let countResults = 0;

        const onScanSuccess = (decodeText, decodeResult) => {
            if (decodeText !== lastResult) {
                ++countResults;
                lastResult = decodeText;
                myqr.innerHTML = `Your scan ${countResults}: ${decodeText}`;

                // Check if the scanned text starts with "wal" and ends with "mart"
                if (/^.*$/.test(decodeText)) {
                    // Redirect to www.google.com if the condition is met
                   navigate("/Scan")
                } else {
                    alert("Scanned text does not match the required pattern.");
                }
            }
        };

        // Initialize QR code scanner
        const htmlscanner = new Html5QrcodeScanner(
            "my-qr-reader", { fps: 10, qrbox: 250 }
        );
        htmlscanner.render(onScanSuccess);

        // Cleanup on component unmount
        return () => {
            htmlscanner.clear();
        };
    }, []);

    return (
        <div>
            <div id="your-qr-result"></div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8%' }}>
                <div id="my-qr-reader" style={{ width: '500px' }}></div>
            </div>
        </div>
    );
};

export default QrScanner;
