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
                width: 150,
                height: 150
            },
            fps: 5
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
                    <div id="reader" />

            }
        </>
    )
}