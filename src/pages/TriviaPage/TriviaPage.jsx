import { Html5QrcodeScanner } from "html5-qrcode"
import { useState, useEffect } from "react"
import { Question } from "../../components/Question/Question"
import './triviapage.css'

export function TriviaPage() {

    const [scanResult, setScannResult] = useState(null)



    // Scanner
    useEffect(() => {
        const scanner = new Html5QrcodeScanner('reader', {
            qrbox: {
                width: 300,
                height: 300
            },
            fps: 10,
            facingMode: 'environment'
        })

        scanner.render(success, error)

        function success(result) {
            scanner.clear()
            setScannResult(result)
        }

        function error(err) {

            console.error(err);

        }

    }, [])

    if (scanResult) {
        console.log(scanResult);
    }

    return (
        <>
            {
                scanResult ?
                    <Question url={scanResult} />
                    :
                    <section className="qr-scan">
                        <img src="/logo.svg" alt="Space Quest Logo" className="logo" />
                        <p>Scan the QR code to answer the question!</p>
                        <div id="reader" />
                    </section>

            }
        </>
    )
}