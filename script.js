
        function handleSubmit(event) {
            event.preventDefault();
            const inputText = document.getElementById('inputText').value.trim();
            const qrCodeContainer = document.getElementById('qrCode');
            const downloadLink = document.getElementById('downloadLink');
            const errorElement = document.getElementById('error');

            if (!inputText) {
                errorElement.textContent = 'Please enter a valid text or URL.';
                qrCodeContainer.innerHTML = '';
                downloadLink.style.display = 'none';
                return;
            }

            const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(inputText)}`;
            qrCodeContainer.innerHTML = `<img src="${apiUrl}" alt="QR Code">`;
            downloadLink.href = apiUrl;
            downloadLink.style.display = 'block';
            errorElement.textContent = '';
        }
    