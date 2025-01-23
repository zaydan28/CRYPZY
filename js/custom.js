  function copyToClipboard() {
    const copyText = document.getElementById("address");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copyText.value);
    // alert("Copied the text: " + copyText.value);
  }

  function send() {
    alert("Wait 10 - 30 minutes!");
    location.reload();
  }

  async function fetchBitcoinPrice() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        const data = await response.json();
        document.getElementById('bitcoin-price').innerText = `$${data.bitcoin.usd}`;
    } catch (error) {
        console.error('Error fetching Bitcoin price:', error);
        document.getElementById('bitcoin-price').innerText = 'Error fetching price';
    }
  }

  async function fetchEthereumPrice() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
        const data = await response.json();
        document.getElementById('ethereum-price').innerText = `$${data.ethereum.usd}`;
    } catch (error) {
        console.error('Error fetching Ethereum price:', error);
        document.getElementById('ethereum-price').innerText = 'Error fetching price';
    }
  }

  async function fetchSolanaPrice() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd');
        const data = await response.json();
        document.getElementById('solana-price').innerText = `$${data.solana.usd}`;
    } catch (error) {
        console.error('Error fetching Solana price:', error);
        document.getElementById('solana-price').innerText = 'Error fetching price';
    }
  }

  async function fetchXRPPrice() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ripple&vs_currencies=usd');
        const data = await response.json();
        document.getElementById('xrp-price').innerText = `$${data.ripple.usd}`;
    } catch (error) {
        console.error('Error fetching XRP price:', error);
        document.getElementById('xrp-price').innerText = 'Error fetching price';
    }
  }
  
  // BTC
  fetchBitcoinPrice();
  setInterval(fetchBitcoinPrice, 60000);

  // ETH
  fetchEthereumPrice();
  setInterval(fetchEthereumPrice, 60000);
  
  // SOL
  fetchSolanaPrice();
  setInterval(fetchSolanaPrice, 60000);
  
  // XRP
  fetchXRPPrice();
  setInterval(fetchXRPPrice, 60000);